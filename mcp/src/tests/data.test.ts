// Unit tests for the data layer (search ranking/filters/limit, get formats
// and unknown-id errors, cache version-change refresh).
// Run with: npm test   (uses node:test, no extra test dependency)

import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, mkdir, writeFile, readFile, access } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  BASE_URL,
  clearMemoryCache,
  cleanCss,
  cleanHtml,
  componentName,
  creditHeader,
  formatElement,
  getElement,
  getRandom,
  getSimilar,
  loadIndex,
  searchElements,
  UiLibError,
  type DataOptions,
  type ElementData,
  type IndexData,
} from '../data.js';

const EL1: ElementData = {
  id: 'glowing-button-1-by-alice',
  name: 'Glowing Button',
  category: 'buttons',
  author: 'alice',
  source: 'https://uiverse.io/alice/glowing-button-1',
  trigger: 'hover',
  description: 'A button that glows on hover.',
  howItWorks: 'CSS box-shadow animation.',
  tags: ['button', 'glow'],
  html: '<!-- a comment -->\n<button class="glow">\n  Click me\n</button>',
  css: '/* a comment */\n.glow {\n  color: red;\n}\n',
  combined: '<!DOCTYPE html>\n<html>\n<head><style>.glow{color:red}</style></head>\n<body><button class="glow">Click me</button></body>\n</html>',
};

const EL2: ElementData = {
  id: 'plain-card-2-by-bob',
  name: 'Plain Card',
  category: 'cards',
  author: 'bob',
  source: 'https://uiverse.io/bob/plain-card-2',
  trigger: 'static',
  description: 'A simple card.',
  howItWorks: 'A card.',
  tags: ['glow', 'card'],
  html: '<div class="card">Hello</div>',
  css: '.card { padding: 8px; }',
  combined: '<!DOCTYPE html>\n<html><body><div class="card">Hello</div></body></html>',
};

const EL3: ElementData = {
  id: 'simple-box-3-by-carol',
  name: 'Simple Box',
  category: 'cards',
  author: 'carol',
  source: 'https://uiverse.io/carol/simple-box-3',
  trigger: 'static',
  description: 'A glowing box for content.',
  howItWorks: 'A box.',
  tags: ['box'],
  html: '<div class="box">Box</div>',
  css: '.box { margin: 0; }',
  combined: '<!DOCTYPE html>\n<html><body><div class="box">Box</div></body></html>',
};

function makeIndex(version: string, elements: ElementData[]): IndexData {
  return {
    version,
    total: elements.length,
    elements: elements.map((e) => ({
      id: e.id,
      name: e.name,
      category: e.category,
      trigger: e.trigger,
      tags: e.tags,
      description: e.description,
    })),
  };
}

const CATEGORIES = {
  version: 'v1',
  total: 3,
  categories: [
    { name: 'buttons', count: 1, browse: `${BASE_URL}/#/browse?category=buttons` },
    { name: 'cards', count: 2, browse: `${BASE_URL}/#/browse?category=cards` },
  ],
};

/** Fake fetch that serves the fixture index/categories/elements. */
function fakeFetch(current: { index: IndexData }) {
  const byId = new Map<string, ElementData>();
  for (const el of [EL1, EL2, EL3]) byId.set(el.id, el);
  return async (url: string | URL): Promise<Response> => {
    const u = String(url);
    if (u === `${BASE_URL}/data/index.min.json`) {
      return new Response(JSON.stringify(current.index), { status: 200 });
    }
    if (u === `${BASE_URL}/data/categories.json`) {
      return new Response(JSON.stringify(CATEGORIES), { status: 200 });
    }
    const m = u.match(new RegExp(`^${BASE_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/api/([^/]+)/([^/]+)\\.json$`));
    if (m) {
      const el = byId.get(m[2]);
      if (el) return new Response(JSON.stringify(el), { status: 200 });
      return new Response('not found', { status: 404 });
    }
    return new Response('not found', { status: 404 });
  };
}

async function tempCacheDir(): Promise<string> {
  return mkdtemp(join(tmpdir(), 'ui-lib-test-'));
}

function opts(cacheDir: string, current: { index: IndexData }): DataOptions {
  return { fetchImpl: fakeFetch(current), cacheDir };
}

test('search ranks name matches before tag matches before description matches', async () => {
  const dir = await tempCacheDir();
  try {
    clearMemoryCache();
    const current = { index: makeIndex('v1', [EL1, EL2, EL3]) };
    const results = await searchElements('glow', opts(dir, current));
    assert.deepEqual(
      results.map((r) => r.id),
      ['glowing-button-1-by-alice', 'plain-card-2-by-bob', 'simple-box-3-by-carol'],
    );
    // No code in search results.
    for (const r of results) {
      assert.equal('html' in r, false);
      assert.equal('css' in r, false);
    }
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test('search is case-insensitive and filters by category and trigger', async () => {
  const dir = await tempCacheDir();
  try {
    clearMemoryCache();
    const current = { index: makeIndex('v1', [EL1, EL2, EL3]) };
    const o = opts(dir, current);
    const upper = await searchElements('GLOW', o);
    assert.equal(upper.length, 3);
    const cards = await searchElements('glow', { ...o, category: 'cards' });
    assert.deepEqual(cards.map((r) => r.id), ['plain-card-2-by-bob', 'simple-box-3-by-carol']);
    const hover = await searchElements('glow', { ...o, trigger: 'hover' });
    assert.deepEqual(hover.map((r) => r.id), ['glowing-button-1-by-alice']);
    const none = await searchElements('glow', { ...o, category: 'loaders' });
    assert.equal(none.length, 0);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test('search limit defaults to 8 and clamps to 20', async () => {
  const dir = await tempCacheDir();
  try {
    clearMemoryCache();
    const many: ElementData[] = Array.from({ length: 25 }, (_, i) => ({
      ...EL1,
      id: `button-${i}-by-alice`,
      name: `Button ${i}`,
      tags: ['button'],
    }));
    const current = { index: makeIndex('v1', many) };
    const o = opts(dir, current);
    const capped = await searchElements('button', { ...o, limit: 100 });
    assert.equal(capped.length, 20);
    const three = await searchElements('button', { ...o, limit: 3 });
    assert.equal(three.length, 3);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test('get_element formats: html, css, all-in-one, react', async () => {
  const dir = await tempCacheDir();
  try {
    clearMemoryCache();
    const current = { index: makeIndex('v1', [EL1, EL2, EL3]) };
    const o = opts(dir, current);
    const el = await getElement('glowing-button-1-by-alice', o);
    assert.equal(el.author, 'alice');

    const html = formatElement(el, 'html');
    assert.match(html, /<button class="glow">/);
    assert.doesNotMatch(html, /<!--/); // comments stripped

    const css = formatElement(el, 'css');
    assert.match(css, /\.glow \{/);
    assert.doesNotMatch(css, /\/\*/); // comments stripped

    const all = formatElement(el, 'all-in-one');
    assert.match(all, /<!DOCTYPE html>/);
    assert.match(all, /<button class="glow">/);

    const react = formatElement(el, 'react');
    assert.match(react, /export default function GlowingButton1\(\)/);
    assert.match(react, /dangerouslySetInnerHTML/);
    assert.match(react, /import React from 'react'/);
    // The component itself carries no credit line (the caller prepends it
    // via creditHeader, so it is never duplicated).
    assert.doesNotMatch(react, /uiverse\.io/);
    assert.equal(
      creditHeader(el, 'react'),
      '// Glowing Button — by alice — https://uiverse.io/alice/glowing-button-1',
    );
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test('get_element unknown id errors with a suggested next step', async () => {
  const dir = await tempCacheDir();
  try {
    clearMemoryCache();
    const current = { index: makeIndex('v1', [EL1, EL2, EL3]) };
    await assert.rejects(
      () => getElement('no-such-element', opts(dir, current)),
      (err: unknown) => {
        assert.ok(err instanceof UiLibError);
        const e = err as UiLibError;
        assert.match(e.message, /Unknown element id "no-such-element"/);
        assert.match(e.suggestion, /search_elements/);
        return true;
      },
    );
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test('get_similar returns tag matches without code', async () => {
  const dir = await tempCacheDir();
  try {
    clearMemoryCache();
    const current = { index: makeIndex('v1', [EL1, EL2, EL3]) };
    const similar = await getSimilar('glowing-button-1-by-alice', opts(dir, current));
    // EL2 shares the "glow" tag; EL3 shares nothing.
    assert.deepEqual(similar.map((r) => r.id), ['plain-card-2-by-bob']);
    assert.equal('html' in similar[0], false);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test('get_random respects filters and errors on an empty pool', async () => {
  const dir = await tempCacheDir();
  try {
    clearMemoryCache();
    const current = { index: makeIndex('v1', [EL1, EL2, EL3]) };
    const o = opts(dir, current);
    const card = await getRandom({ ...o, category: 'cards' });
    assert.equal(card.category, 'cards');
    await assert.rejects(
      () => getRandom({ ...o, category: 'loaders' }),
      (err: unknown) => {
        assert.ok(err instanceof UiLibError);
        const e = err as UiLibError;
        assert.match(e.suggestion, /list_categories/);
        return true;
      },
    );
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test('cache: a version change refreshes the index and clears cached elements', async () => {
  const dir = await tempCacheDir();
  try {
    clearMemoryCache();
    const current = { index: makeIndex('v1', [EL1, EL2, EL3]) };
    const o = opts(dir, current);
    await loadIndex(o);
    assert.equal(
      (await readFile(join(dir, 'version.txt'), 'utf8')).trim(),
      'v1',
    );
    // Seed a cached element file, as if it came from v1.
    const elPath = join(dir, 'elements', 'buttons', 'glowing-button-1-by-alice.json');
    await mkdir(join(dir, 'elements', 'buttons'), { recursive: true });
    await writeFile(elPath, JSON.stringify(EL1), 'utf8');

    // The live index moves to v2.
    current.index = makeIndex('v2', [EL1, EL2, EL3]);
    const refreshed = await loadIndex(o);
    assert.equal(refreshed.version, 'v2');
    assert.equal(
      (await readFile(join(dir, 'version.txt'), 'utf8')).trim(),
      'v2',
    );
    await assert.rejects(() => access(elPath), /ENOENT/);

    // The network goes down: the disk cache still serves the index.
    clearMemoryCache();
    const offline: DataOptions = {
      cacheDir: dir,
      fetchImpl: async () => {
        throw new Error('network down');
      },
    };
    const fromDisk = await loadIndex(offline);
    assert.equal(fromDisk.version, 'v2');
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test('cleaning helpers and component names', () => {
  assert.equal(cleanCss('/* c */\n.a {\n  color: red; \n}\n\n\n.b{}'), '.a {\n  color: red;\n}\n\n.b{}');
  assert.equal(cleanHtml('<!-- c -->\n<div> x </div>\n\n\n<p>y</p>'), '<div> x </div>\n\n<p>y</p>');
  assert.equal(componentName('afraid-baboon-7-by-portseif'), 'AfraidBaboon7');
  assert.equal(componentName('young-newt-20-by-dexter-st'), 'YoungNewt20');
  assert.equal(componentName('123-thing-by-x'), 'Ui123Thing');
});

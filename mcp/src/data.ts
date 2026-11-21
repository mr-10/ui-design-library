// Data layer for the UI Design Library.
// Fetches the machine-readable data published on GitHub Pages
// (https://mr-10.github.io/ui-design-library), caches it in memory and on
// disk, and falls back to a local copy of the repo data when the network
// is unavailable. No login, no accounts, no API keys.

import { homedir } from 'node:os';
import { join } from 'node:path';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';

export const BASE_URL = 'https://mr-10.github.io/ui-design-library';
export const DATA_VERSION = 'b0d13fd04e73';

export interface IndexElement {
  id: string;
  name: string;
  category: string;
  trigger: string;
  tags: string[];
  description: string;
}

export interface IndexData {
  version: string;
  total: number;
  elements: IndexElement[];
}

export interface CategoryInfo {
  name: string;
  count: number;
  browse: string;
}

export interface CategoriesData {
  version: string;
  total: number;
  categories: CategoryInfo[];
}

export interface ElementData {
  id: string;
  name: string;
  category: string;
  author: string;
  source: string;
  trigger: string;
  description: string;
  howItWorks: string;
  tags: string[];
  html: string;
  css: string;
  combined: string;
  js?: string;
}

export interface ElementSummary {
  id: string;
  name: string;
  category: string;
  trigger: string;
  description: string;
}

export type ElementFormat = 'html' | 'css' | 'all-in-one' | 'react';

export type FetchImpl = (
  url: string | URL,
  init?: RequestInit,
) => Promise<Response>;

/** Options for the data layer. Everything is optional; defaults read env. */
export interface DataOptions {
  /** Defaults to the global fetch. Injectable for tests. */
  fetchImpl?: FetchImpl;
  /** Defaults to $XDG_CACHE_HOME/ui-design-library-mcp or ~/.cache/ui-design-library-mcp. */
  cacheDir?: string;
  /** Repo clone root (has data/ and api/) used only when the network is down. */
  localDataDir?: string;
}

/** Short error with a suggested next step, for tools and the CLI. */
export class UiLibError extends Error {
  readonly suggestion: string;
  constructor(message: string, suggestion: string) {
    super(message);
    this.name = 'UiLibError';
    this.suggestion = suggestion;
  }
  toString(): string {
    return `${this.message}\nTry: ${this.suggestion}`;
  }
}

const FETCH_TIMEOUT_MS = 10_000;

export function resolveCacheDir(opts: DataOptions = {}): string {
  if (opts.cacheDir) return opts.cacheDir;
  if (process.env.UI_LIB_CACHE_DIR) return process.env.UI_LIB_CACHE_DIR;
  const xdg = process.env.XDG_CACHE_HOME;
  if (xdg) return join(xdg, 'ui-design-library-mcp');
  return join(homedir(), '.cache', 'ui-design-library-mcp');
}

function resolveLocalDataDir(opts: DataOptions = {}): string | undefined {
  return opts.localDataDir ?? process.env.UI_LIB_LOCAL_DATA ?? undefined;
}

async function fetchJson<T>(
  url: string,
  fetchImpl: FetchImpl,
): Promise<T> {
  const res = await fetchImpl(url, {
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    headers: { accept: 'application/json' },
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} fetching ${url}`);
  }
  return (await res.json()) as T;
}

async function readJsonFile<T>(path: string): Promise<T> {
  return JSON.parse(await readFile(path, 'utf8')) as T;
}

async function writeJsonFile(path: string, value: unknown): Promise<void> {
  await mkdir(join(path, '..'), { recursive: true });
  await writeFile(path, JSON.stringify(value), 'utf8');
}

// ---------------------------------------------------------------------------
// Index + categories (memory cache, disk cache, live refresh on version change)
// ---------------------------------------------------------------------------

let memIndex: IndexData | null = null;
let memCategories: CategoriesData | null = null;

/** Clear the in-memory caches (used by tests). */
export function clearMemoryCache(): void {
  memIndex = null;
  memCategories = null;
}

export async function loadIndex(opts: DataOptions = {}): Promise<IndexData> {
  const fetchImpl = opts.fetchImpl ?? fetch;
  const cacheDir = resolveCacheDir(opts);
  const url = `${BASE_URL}/data/index.min.json`;

  let index: IndexData | null = null;
  let fromLive = false;
  try {
    index = await fetchJson<IndexData>(url, fetchImpl);
    fromLive = true;
  } catch {
    index = null;
  }

  if (index) {
    // Live copy won: if the version changed, drop the cached element
    // files (they belong to the old data version) and refresh the cache.
    const versionFile = join(cacheDir, 'version.txt');
    let cachedVersion = '';
    try {
      cachedVersion = (await readFile(versionFile, 'utf8')).trim();
    } catch {
      cachedVersion = '';
    }
    if (cachedVersion !== index.version) {
      await rm(join(cacheDir, 'elements'), { recursive: true, force: true });
      await mkdir(cacheDir, { recursive: true });
      await writeFile(versionFile, index.version, 'utf8');
    }
    memIndex = index;
    await writeJsonFile(join(cacheDir, 'index.json'), index).catch(() => {});
    return index;
  }

  // Live fetch failed: memory, then disk, then the local repo copy.
  if (memIndex) return memIndex;
  try {
    memIndex = await readJsonFile<IndexData>(join(cacheDir, 'index.json'));
    return memIndex;
  } catch {
    // fall through
  }
  const local = resolveLocalDataDir(opts);
  if (local) {
    try {
      memIndex = await readJsonFile<IndexData>(join(local, 'data', 'index.min.json'));
      return memIndex;
    } catch {
      // fall through
    }
  }
  throw new UiLibError(
    `Could not reach the UI Design Library data at ${url} and no cached copy is available.`,
    'Check your internet connection and try again.',
  );
}

export async function loadCategories(
  opts: DataOptions = {},
): Promise<CategoriesData> {
  const fetchImpl = opts.fetchImpl ?? fetch;
  const cacheDir = resolveCacheDir(opts);
  const url = `${BASE_URL}/data/categories.json`;

  let cats: CategoriesData | null = null;
  try {
    cats = await fetchJson<CategoriesData>(url, fetchImpl);
  } catch {
    cats = null;
  }
  if (cats) {
    memCategories = cats;
    await writeJsonFile(join(cacheDir, 'categories.json'), cats).catch(
      () => {},
    );
    return cats;
  }
  if (memCategories) return memCategories;
  try {
    memCategories = await readJsonFile<CategoriesData>(
      join(cacheDir, 'categories.json'),
    );
    return memCategories;
  } catch {
    // fall through
  }
  const local = resolveLocalDataDir(opts);
  if (local) {
    try {
      memCategories = await readJsonFile<CategoriesData>(
        join(local, 'data', 'categories.json'),
      );
      return memCategories;
    } catch {
      // fall through
    }
  }
  throw new UiLibError(
    `Could not reach the UI Design Library data at ${url} and no cached copy is available.`,
    'Check your internet connection and try again.',
  );
}

// ---------------------------------------------------------------------------
// Elements
// ---------------------------------------------------------------------------

export async function getElement(
  id: string,
  opts: DataOptions = {},
): Promise<ElementData> {
  const index = await loadIndex(opts);
  const entry = index.elements.find((e) => e.id === id);
  if (!entry) {
    throw new UiLibError(
      `Unknown element id "${id}".`,
      `Search for it first, e.g. search_elements with a keyword from the name, or list the categories with list_categories.`,
    );
  }
  const cacheDir = resolveCacheDir(opts);
  const cachePath = join(cacheDir, 'elements', entry.category, `${id}.json`);

  // Disk cache (invalidated by loadIndex when the data version changes).
  try {
    return await readJsonFile<ElementData>(cachePath);
  } catch {
    // fall through to the network / local copy
  }

  const fetchImpl = opts.fetchImpl ?? fetch;
  const url = `${BASE_URL}/api/${entry.category}/${id}.json`;
  try {
    const el = await fetchJson<ElementData>(url, fetchImpl);
    await writeJsonFile(cachePath, el).catch(() => {});
    return el;
  } catch {
    // fall through to the local copy
  }
  const local = resolveLocalDataDir(opts);
  if (local) {
    try {
      return await readJsonFile<ElementData>(
        join(local, 'api', entry.category, `${id}.json`),
      );
    } catch {
      // fall through
    }
  }
  throw new UiLibError(
    `Could not load element "${id}" from ${url} and no cached copy is available.`,
    'Check your internet connection and try again, or pick another element with search_elements.',
  );
}

function toSummary(e: IndexElement): ElementSummary {
  return {
    id: e.id,
    name: e.name,
    category: e.category,
    trigger: e.trigger,
    description: e.description,
  };
}

/** Words that carry no search meaning; dropped from multi-word queries. */
const STOPWORDS = new Set([
  'a', 'an', 'the', 'with', 'and', 'for', 'of', 'on', 'in', 'to', 'me',
  'my', 'is', 'it', 'that', 'this', 'show', 'get', 'give', 'find', 'make',
  'create', 'please', 'i', 'want', 'need', 'looking', 'by', 'or', 'as',
  'at', 'from', 'into', 'one', 'some', 'any',
]);

/** Split an agent-style query ("neon glowing button") into search tokens. */
function tokenizeQuery(query: string): string[] {
  const words = query
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
  const tokens = words.filter((w) => !STOPWORDS.has(w));
  return tokens.length > 0 ? tokens : words;
}

/** Light stemmer: "glowing" and "glows" both stem to "glow", so an agent
 *  query "neon glowing button" also matches an element whose description
 *  says "glows". */
function stem(word: string): string {
  let w = word;
  if (w.length > 5 && w.endsWith('ing')) w = w.slice(0, -3);
  else if (w.length > 4 && w.endsWith('ed')) w = w.slice(0, -2);
  else if (w.length > 4 && w.endsWith('es')) w = w.slice(0, -2);
  else if (w.length > 3 && w.endsWith('s')) w = w.slice(0, -1);
  return w;
}

/** True when a field contains the token as a substring, or contains a word
 *  with the same stem (so "glowing" matches "glow" and "glows"). */
function fieldMatches(text: string, token: string): boolean {
  const lower = text.toLowerCase();
  const t = token.toLowerCase();
  if (lower.includes(t)) return true;
  const ts = stem(t);
  if (ts.length < 4) return false;
  for (const word of lower.split(/[^a-z0-9]+/)) {
    if (!word) continue;
    if (stem(word) === ts) return true;
  }
  return false;
}

/** Score one token against one element. Name matches count most, then an
 *  exact tag, then a tag containing the token, then the description, then
 *  the category. Returns 0 when the token matches nothing. */
function tokenScore(el: IndexElement, token: string): number {
  let score = 0;
  const tags = el.tags.map((t) => t.toLowerCase());
  if (fieldMatches(el.name, token)) score += 10;
  if (tags.some((t) => t === token)) score += 8;
  else if (tags.some((t) => fieldMatches(t, token))) score += 6;
  if (fieldMatches(el.description, token)) score += 4;
  if (fieldMatches(el.category, token)) score += 2;
  return score;
}

/** Tokenized search over name, tags, description and category.
 *  Every query word must match somewhere for a full hit; elements matching
 *  fewer words still rank below the full hits. Single-word queries behave
 *  exactly as before (name, then tag, then description). */
export async function searchElements(
  query: string,
  opts: DataOptions & {
    category?: string;
    trigger?: string;
    limit?: number;
  } = {},
): Promise<ElementSummary[]> {
  const tokens = tokenizeQuery(query.trim());
  if (tokens.length === 0) {
    throw new UiLibError(
      'search_elements needs a non-empty query.',
      'Pass a keyword, e.g. search_elements with query "glowing button".',
    );
  }
  const limit = Math.min(Math.max(opts.limit ?? 8, 1), 20);
  const index = await loadIndex(opts);
  const ranked: { el: IndexElement; matched: number; score: number }[] = [];
  for (const el of index.elements) {
    if (opts.category && el.category !== opts.category) continue;
    if (opts.trigger && el.trigger !== opts.trigger) continue;
    let matched = 0;
    let score = 0;
    for (const token of tokens) {
      const s = tokenScore(el, token);
      if (s > 0) {
        matched += 1;
        score += s;
      }
    }
    if (matched > 0) ranked.push({ el, matched, score });
  }
  ranked.sort(
    (a, b) =>
      b.matched - a.matched ||
      b.score - a.score ||
      a.el.name.localeCompare(b.el.name),
  );
  return ranked.slice(0, limit).map((r) => toSummary(r.el));
}

export async function listCategories(
  opts: DataOptions = {},
): Promise<CategoryInfo[]> {
  const cats = await loadCategories(opts);
  return cats.categories;
}

export async function getSimilar(
  id: string,
  opts: DataOptions & { limit?: number } = {},
): Promise<ElementSummary[]> {
  const limit = Math.min(Math.max(opts.limit ?? 5, 1), 20);
  const el = await getElement(id, opts);
  const index = await loadIndex(opts);
  const tags = new Set(el.tags.map((t) => t.toLowerCase()));
  const scored: { el: IndexElement; shared: number }[] = [];
  for (const other of index.elements) {
    if (other.id === id) continue;
    const shared = other.tags.filter((t) => tags.has(t.toLowerCase())).length;
    if (shared > 0) scored.push({ el: other, shared });
  }
  scored.sort(
    (a, b) =>
      b.shared - a.shared ||
      (a.el.category === el.category ? 0 : 1) -
        (b.el.category === el.category ? 0 : 1) ||
      a.el.name.localeCompare(b.el.name),
  );
  return scored.slice(0, limit).map((s) => toSummary(s.el));
}

export async function getRandom(
  opts: DataOptions & { category?: string; trigger?: string } = {},
): Promise<ElementSummary> {
  const index = await loadIndex(opts);
  const pool = index.elements.filter(
    (e) =>
      (!opts.category || e.category === opts.category) &&
      (!opts.trigger || e.trigger === opts.trigger),
  );
  if (pool.length === 0) {
    throw new UiLibError(
      `No elements match category "${opts.category ?? '*'}" and trigger "${opts.trigger ?? '*' }".`,
      'List the categories with list_categories, then try get_random with one of them.',
    );
  }
  const pick = pool[Math.floor(Math.random() * pool.length)];
  return toSummary(pick);
}

// ---------------------------------------------------------------------------
// Code formatting
// ---------------------------------------------------------------------------

/** Strip CSS comments and collapse blank lines / trailing whitespace. */
export function cleanCss(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .split('\n')
    .map((line) => line.replace(/[ \t]+$/u, ''))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Strip HTML comments and collapse blank lines / trailing whitespace. */
export function cleanHtml(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .split('\n')
    .map((line) => line.replace(/[ \t]+$/u, ''))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** One-line author credit + source link, in the comment style of the format. */
export function creditHeader(el: ElementData, format: ElementFormat): string {
  const line = `${el.name} — by ${el.author} — ${el.source}`;
  if (format === 'css') return `/* ${line} */`;
  if (format === 'react') return `// ${line}`;
  return `<!-- ${line} -->`;
}

/** PascalCase component name from an element id like
 *  "afraid-baboon-7-by-portseif" -> "AfraidBaboon7". */
export function componentName(id: string): string {
  const cut = id.lastIndexOf('-by-');
  const slug = cut > 0 ? id.slice(0, cut) : id;
  const name = slug
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('');
  return /^[0-9]/.test(name) ? `Ui${name}` : name || 'UiElement';
}

function escapeTemplateLiteral(s: string): string {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${')
    .replace(/<\/style/gi, '<\\/style')
    .replace(/<\/script/gi, '<\\/script');
}

/** Convert an element to a small React component.
 *  Uses dangerouslySetInnerHTML + a <style> tag on purpose: the elements'
 *  HTML uses plain `class` attributes, and a class -> className rewrite
 *  is fragile (it would also have to rewrite `for` -> htmlFor and every
 *  other HTML-only attribute). The HTML stays untouched inside the
 *  template literal, so the element renders exactly as designed. */
export function toReactComponent(el: ElementData): string {
  const name = componentName(el.id);
  const css = escapeTemplateLiteral(cleanCss(el.css));
  const html = escapeTemplateLiteral(cleanHtml(el.html));
  return [
    `import React from 'react';`,
    ``,
    `export default function ${name}() {`,
    `  return (`,
    `    <>`,
    `      <style>{\`${css}\`}</style>`,
    `      <div dangerouslySetInnerHTML={{ __html: \`${html}\` }} />`,
    `    </>`,
    `  );`,
    `}`,
    ``,
  ].join('\n');
}

export function formatElement(el: ElementData, format: ElementFormat): string {
  switch (format) {
    case 'html':
      return cleanHtml(el.html);
    case 'css':
      return cleanCss(el.css);
    case 'react':
      return toReactComponent(el);
    case 'all-in-one':
    default:
      return cleanHtml(el.combined);
  }
}

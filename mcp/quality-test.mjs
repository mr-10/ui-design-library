#!/usr/bin/env node
// Quality test: 20 agent-style queries against the MCP search layer.
// Uses the local repo data (UI_LIB_LOCAL_DATA) with a fetch that always
// fails, so no network is needed. Prints the top 3 per query.
// Run: node quality-test.mjs [query ...]   (no args = the 20 default queries)

import { searchElements, clearMemoryCache } from './dist/data.js';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const QUERIES = [
  'neon glowing button',
  'dark toggle switch',
  'glassmorphism login form',
  'minimal loader',
  'tooltip with arrow',
  'spinning loader',
  'gradient button',
  'rounded checkbox',
  'search input',
  'pricing card',
  'profile card',
  'menu button',
  'download button',
  'password input',
  'toast notification',
  'radio button',
  '3d button',
  'bouncing dots loader',
  'submit button',
  'social login button',
];

const queries = process.argv.slice(2).length ? process.argv.slice(2) : QUERIES;

const failingFetch = async () => {
  throw new Error('network disabled for quality test');
};

async function main() {
  clearMemoryCache();
  for (const q of queries) {
    const results = await searchElements(q, {
      fetchImpl: failingFetch,
      localDataDir: repoRoot,
      cacheDir: '/tmp/ui-lib-quality-cache',
      limit: 3,
    });
    console.log(`\n## ${q}`);
    if (results.length === 0) {
      console.log('  (no results)');
      continue;
    }
    for (const r of results) {
      console.log(`  - ${r.id} [${r.category}/${r.trigger}] ${r.description}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

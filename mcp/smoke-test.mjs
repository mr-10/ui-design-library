#!/usr/bin/env node
// Stdio smoke test for the MCP server against the LOCAL repo data.
// Spawns dist/server.js with UI_LIB_LOCAL_DATA=<repo root> and exercises
// all five tools plus the use-ui-element prompt over JSON-RPC.
// Run: node smoke-test.mjs

import { spawn } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const server = spawn('node', [resolve('dist/server.js')], {
  env: {
    ...process.env,
    UI_LIB_LOCAL_DATA: repoRoot,
    UI_LIB_CACHE_DIR: '/tmp/ui-lib-smoke-cache',
    // Block the live fetch so the server serves the LOCAL repo data
    // (the new enriched version), not the still-old live Pages copy.
    NODE_OPTIONS: '--import /tmp/no-network.mjs',
  },
  stdio: ['pipe', 'pipe', 'inherit'],
});

let buffer = '';
const pending = new Map();
let nextId = 1;

function send(method, params) {
  const id = nextId++;
  const msg = { jsonrpc: '2.0', id, method, params };
  server.stdin.write(JSON.stringify(msg) + '\n');
  return new Promise((resolvePromise, reject) => {
    pending.set(id, { resolvePromise, reject });
    setTimeout(() => reject(new Error(`timeout waiting for ${method}`)), 30000);
  });
}

function notify(method, params) {
  server.stdin.write(JSON.stringify({ jsonrpc: '2.0', method, params }) + '\n');
}

server.stdout.on('data', (chunk) => {
  buffer += chunk.toString();
  let idx;
  while ((idx = buffer.indexOf('\n')) >= 0) {
    const line = buffer.slice(0, idx);
    buffer = buffer.slice(idx + 1);
    if (!line.trim()) continue;
    let msg;
    try {
      msg = JSON.parse(line);
    } catch {
      continue;
    }
    if (msg.id && pending.has(msg.id)) {
      const { resolvePromise, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(JSON.stringify(msg.error)));
      else resolvePromise(msg.result);
    }
  }
});

function toolText(result) {
  const part = result.content?.find((c) => c.type === 'text');
  return part ? part.text : '';
}

async function main() {
  await send('initialize', {
    protocolVersion: '2024-11-05',
    capabilities: {},
    clientInfo: { name: 'smoke-test', version: '1.0.0' },
  });
  notify('notifications/initialized');

  const tools = await send('tools/list');
  console.log('tools:', tools.tools.map((t) => t.name).join(', '));

  const search = await send('tools/call', {
    name: 'search_elements',
    arguments: { query: 'neon glowing button', limit: 3 },
  });
  const searchText = toolText(search);
  console.log('\nsearch_elements("neon glowing button"):\n', searchText.slice(0, 600));
  if (!searchText.includes('bad-newt-60')) throw new Error('search did not return bad-newt-60');
  if (!searchText.includes('lifts and glows')) {
    throw new Error('search did not return the NEW enriched description');
  }

  const cats = await send('tools/call', { name: 'list_categories', arguments: {} });
  const catsText = toolText(cats);
  console.log('\nlist_categories:\n', catsText.slice(0, 400));
  if (!catsText.includes('3805') && !catsText.includes('3,805')) {
    throw new Error('list_categories did not mention 3805 total');
  }

  const el = await send('tools/call', {
    name: 'get_element',
    arguments: { id: 'bad-newt-60-by-mayurd8862', format: 'all-in-one' },
  });
  const elText = toolText(el);
  console.log('\nget_element(bad-newt-60, all-in-one) first 300 chars:\n', elText.slice(0, 300));
  // get_element returns CODE, not the description: check name + author.
  if (!elText.includes('Bad Newt 60')) throw new Error('get_element missing element name');
  if (!elText.includes('mayurd8862')) throw new Error('get_element missing author');

  const similar = await send('tools/call', {
    name: 'get_similar',
    arguments: { id: 'bad-newt-60-by-mayurd8862', limit: 3 },
  });
  const simText = toolText(similar);
  console.log('\nget_similar(bad-newt-60):\n', simText.slice(0, 400));
  if (!simText.includes('by-')) throw new Error('get_similar returned nothing');

  const random = await send('tools/call', {
    name: 'get_random',
    arguments: { category: 'buttons', limit: 2 },
  });
  const randText = toolText(random);
  console.log('\nget_random(buttons, 2):\n', randText.slice(0, 400));
  if (!randText.includes('buttons')) throw new Error('get_random missing category');

  const prompts = await send('prompts/list');
  console.log('\nprompts:', prompts.prompts.map((p) => p.name).join(', '));
  const prompt = await send('prompts/get', {
    name: 'use-ui-element',
    arguments: { request: 'a neon glowing button' },
  });
  const promptText = prompt.messages?.map((m) => m.content?.text).join('\n') ?? '';
  console.log('\nuse-ui-element prompt first 300 chars:\n', promptText.slice(0, 300));
  if (!promptText.includes('a neon glowing button')) {
    throw new Error('prompt did not echo the request');
  }
  if (!promptText.includes('search_elements')) {
    throw new Error('prompt does not instruct search_elements');
  }

  console.log('\nSMOKE TEST: ALL OK');
  server.kill();
  process.exit(0);
}

main().catch((err) => {
  console.error('SMOKE TEST FAILED:', err.message);
  server.kill();
  process.exit(1);
});

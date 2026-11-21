// Integration test: starts the built MCP server over stdio with a real MCP
// client and calls every tool once against the live Pages data (falling back
// to the local repo copy if the network is unavailable).
// Run with: npm test

import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** Walk up from the compiled test file until the repo root (has data/index.min.json). */
function findRepoRoot(): string {
  let dir = resolve(__dirname);
  for (let i = 0; i < 6; i++) {
    if (existsSync(join(dir, 'data', 'index.min.json'))) return dir;
    dir = dirname(dir);
  }
  throw new Error('could not find the repo root (data/index.min.json)');
}

function toolText(result: unknown): string {
  const r = result as {
    content: { type: string; text?: string }[];
    isError?: boolean;
  };
  assert.equal(r.isError, undefined, `tool returned an error: ${JSON.stringify(r)}`);
  const text = r.content
    .filter((c) => c.type === 'text')
    .map((c) => c.text ?? '')
    .join('\n');
  return text;
}

test(
  'stdio server: every tool works against the live data',
  { timeout: 120_000 },
  async () => {
    const repoRoot = findRepoRoot();
    const cacheDir = await mkdtemp(join(tmpdir(), 'ui-lib-int-'));
    const serverPath = resolve(__dirname, '..', 'server.js');
    const transport = new StdioClientTransport({
      command: 'node',
      args: [serverPath],
      env: {
        UI_LIB_CACHE_DIR: cacheDir,
        UI_LIB_LOCAL_DATA: repoRoot,
      },
      stderr: 'pipe',
    });
    const client = new Client(
      { name: 'ui-lib-integration-test', version: '1.0.0' },
      { capabilities: {} },
    );
    try {
      await client.connect(transport);

      const tools = await client.listTools();
      const names = tools.tools.map((t) => t.name).sort();
      assert.deepEqual(names, [
        'get_element',
        'get_random',
        'get_similar',
        'list_categories',
        'search_elements',
      ]);

      // list_categories
      const cats = JSON.parse(
        toolText(await client.callTool({ name: 'list_categories', arguments: {} })),
      ) as { total: number; categories: { name: string; count: number }[] };
      assert.equal(cats.categories.length, 11);
      assert.equal(cats.total, 3805);
      assert.equal(
        cats.categories.find((c) => c.name === 'buttons')?.count,
        1232,
      );

      // search_elements (no code in the results)
      const search = JSON.parse(
        toolText(
          await client.callTool({
            name: 'search_elements',
            arguments: { query: 'button', limit: 3 },
          }),
        ),
      ) as {
        count: number;
        results: Record<string, unknown>[];
      };
      assert.equal(search.count, 3);
      assert.equal(search.results.length, 3);
      for (const r of search.results) {
        assert.equal(typeof r.id, 'string');
        assert.equal(typeof r.name, 'string');
        assert.equal(typeof r.category, 'string');
        assert.equal(typeof r.trigger, 'string');
        assert.equal(typeof r.description, 'string');
        assert.equal('html' in r, false);
        assert.equal('css' in r, false);
        assert.equal('combined' in r, false);
      }
      const firstId = search.results[0].id as string;

      // get_element (one element's code + author credit)
      const code = toolText(
        await client.callTool({
          name: 'get_element',
          arguments: { id: firstId, format: 'html' },
        }),
      );
      assert.match(code, /uiverse\.io\//);
      assert.match(code, /by /);

      // get_similar (no code)
      const similar = JSON.parse(
        toolText(
          await client.callTool({
            name: 'get_similar',
            arguments: { id: firstId, limit: 3 },
          }),
        ),
      ) as { count: number; results: Record<string, unknown>[] };
      assert.ok(similar.count >= 0);
      for (const r of similar.results) {
        assert.equal('html' in r, false);
        assert.equal('css' in r, false);
      }

      // get_random (summary only)
      const random = JSON.parse(
        toolText(
          await client.callTool({ name: 'get_random', arguments: {} }),
        ),
      ) as Record<string, unknown>;
      assert.equal(typeof random.id, 'string');
      assert.equal(typeof random.name, 'string');
      assert.equal('html' in random, false);

      // Resources: index + categories
      const resources = await client.listResources();
      const uris = resources.resources.map((r) => r.uri).sort();
      assert.deepEqual(uris, ['ui-lib://categories', 'ui-lib://index']);
      const catsRes = await client.readResource({ uri: 'ui-lib://categories' });
      const catsText = (catsRes.contents[0] as { text?: string }).text ?? '';
      assert.equal(JSON.parse(catsText).categories.length, 11);

      // Prompt: use-ui-element
      const prompts = await client.listPrompts();
      assert.ok(prompts.prompts.some((p) => p.name === 'use-ui-element'));
      const prompt = await client.getPrompt({
        name: 'use-ui-element',
        arguments: { request: 'a glowing hover button' },
      });
      const promptText = prompt.messages
        .map((m) => {
          const c = m.content as { type: string; text?: string };
          return c.text ?? '';
        })
        .join('\n');
      assert.match(promptText, /search_elements/);
      assert.match(promptText, /get_element/);
      assert.match(promptText, /author credit/);
    } finally {
      await client.close().catch(() => {});
      await rm(cacheDir, { recursive: true, force: true });
    }
  },
);

#!/usr/bin/env node
// MCP server for the UI Design Library (stdio transport).
// Exposes search_elements, list_categories, get_element, get_similar and
// get_random over the public data at https://mr-10.github.io/ui-design-library.
// No login, no accounts, no API keys. Run with: npx -y ui-design-library-mcp

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import {
  creditHeader,
  formatElement,
  getElement,
  getRandom,
  getSimilar,
  listCategories,
  loadCategories,
  loadIndex,
  searchElements,
  UiLibError,
} from './data.js';

const VERSION = '1.0.0';

const server = new McpServer(
  { name: 'ui-design-library', version: VERSION },
  {
    instructions:
      'Search the UI Design Library (3,805 free HTML+CSS elements) before ' +
      'fetching code. Use at most one element\'s code per answer and keep ' +
      'the author credit (author name + uiverse.io source link).',
  },
);

function textResult(text: string) {
  return { content: [{ type: 'text' as const, text }] };
}

function errorResult(err: unknown) {
  const message =
    err instanceof UiLibError
      ? err.toString()
      : err instanceof Error
        ? err.message
        : String(err);
  return { content: [{ type: 'text' as const, text: message }], isError: true };
}

server.registerTool(
  'search_elements',
  {
    description:
      'Search the UI Design Library by keyword. Returns only id, name, category, trigger and a one-line description per hit — never code. Search first, then fetch one element with get_element.',
    inputSchema: {
      query: z
        .string()
        .min(1)
        .describe('Keyword to search for, e.g. "glowing button" or "loader".'),
      category: z
        .string()
        .optional()
        .describe('Only elements in this category, e.g. "buttons".'),
      trigger: z
        .string()
        .optional()
        .describe('Only elements with this trigger, e.g. "hover".'),
      limit: z
        .number()
        .int()
        .min(1)
        .max(20)
        .optional()
        .default(8)
        .describe('Max results (default 8, max 20).'),
    },
  },
  async ({ query, category, trigger, limit }) => {
    try {
      const results = await searchElements(query, { category, trigger, limit });
      return textResult(
        JSON.stringify(
          { query, count: results.length, results },
          null,
          2,
        ),
      );
    } catch (err) {
      return errorResult(err);
    }
  },
);

server.registerTool(
  'list_categories',
  {
    description:
      'List the 11 element categories with their element counts.',
    inputSchema: {},
  },
  async () => {
    try {
      const categories = await listCategories();
      const total = categories.reduce((n, c) => n + c.count, 0);
      return textResult(
        JSON.stringify({ total, categories }, null, 2),
      );
    } catch (err) {
      return errorResult(err);
    }
  },
);

server.registerTool(
  'get_element',
  {
    description:
      'Get ONE element\'s code by id. Never more than one element per call. ' +
      'Formats: html (the markup), css (the stylesheet), all-in-one (a single-file HTML document), react (a small React component).',
    inputSchema: {
      id: z.string().min(1).describe('Element id, e.g. "afraid-baboon-7-by-portseif".'),
      format: z
        .enum(['html', 'css', 'all-in-one', 'react'])
        .optional()
        .default('all-in-one')
        .describe('Code format (default "all-in-one").'),
    },
  },
  async ({ id, format }) => {
    try {
      const el = await getElement(id);
      const code = formatElement(el, format);
      const header = creditHeader(el, format);
      return textResult(`${header}\n\n${code}`);
    } catch (err) {
      return errorResult(err);
    }
  },
);

server.registerTool(
  'get_similar',
  {
    description:
      'Find elements similar to one element, by shared tags. Returns id, name, category, trigger and description only — no code.',
    inputSchema: {
      id: z.string().min(1).describe('Element id to find similar elements for.'),
      limit: z
        .number()
        .int()
        .min(1)
        .max(20)
        .optional()
        .default(5)
        .describe('Max results (default 5, max 20).'),
    },
  },
  async ({ id, limit }) => {
    try {
      const results = await getSimilar(id, { limit });
      return textResult(
        JSON.stringify({ id, count: results.length, results }, null, 2),
      );
    } catch (err) {
      return errorResult(err);
    }
  },
);

server.registerTool(
  'get_random',
  {
    description:
      'Get one random element (id, name, category, trigger, description — no code). Use get_element to fetch its code.',
    inputSchema: {
      category: z
        .string()
        .optional()
        .describe('Only elements in this category, e.g. "cards".'),
      trigger: z
        .string()
        .optional()
        .describe('Only elements with this trigger, e.g. "hover".'),
    },
  },
  async ({ category, trigger }) => {
    try {
      const result = await getRandom({ category, trigger });
      return textResult(JSON.stringify(result, null, 2));
    } catch (err) {
      return errorResult(err);
    }
  },
);

server.registerResource(
  'ui-library-index',
  'ui-lib://index',
  {
    title: 'UI Design Library index',
    description:
      'Full index of all 3,805 elements: id, name, category, trigger, tags and description.',
    mimeType: 'application/json',
  },
  async (uri) => {
    const index = await loadIndex();
    return {
      contents: [
        {
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify(index),
        },
      ],
    };
  },
);

server.registerResource(
  'ui-library-categories',
  'ui-lib://categories',
  {
    title: 'UI Design Library categories',
    description: 'The 11 element categories with their element counts.',
    mimeType: 'application/json',
  },
  async (uri) => {
    const cats = await loadCategories();
    return {
      contents: [
        {
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify(cats),
        },
      ],
    };
  },
);

server.registerPrompt(
  'use-ui-element',
  {
    title: 'Use a UI element',
    description:
      'Add a UI element from the library to your project: search first, fetch one element, adapt its colours, keep the author credit.',
    argsSchema: {
      request: z
        .string()
        .optional()
        .describe('What you want to build, e.g. "a glowing hover button".'),
    },
  },
  async ({ request }) => {
    const want = request?.trim() || 'a UI element';
    return {
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text:
              `I want ${want}. Find a matching element from the UI Design Library and add it to my project.\n\n` +
              `How to do it:\n` +
              `1. Call search_elements with a keyword from the request (limit 5-8) and pick the best match.\n` +
              `2. Call get_element for that ONE element only (format "all-in-one" for a plain page, "react" for a React project).\n` +
              `3. Adapt the colours to my project, but keep the element's behaviour.\n` +
              `4. Keep the author credit: a comment with the author name and the uiverse.io source link, exactly as returned.\n` +
              `5. Never fetch more than one element's code per answer.`,
          },
        },
      ],
    };
  },
);

async function main(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error(`ui-design-library-mcp failed to start: ${err}`);
  process.exit(1);
});

#!/usr/bin/env node
// CLI for the UI Design Library: `ui-lib`
//   ui-lib search <query> [--category] [--trigger]
//   ui-lib get <id> [--format html|css|all-in-one|react] [--out file] [--copy]
//   ui-lib list
//   ui-lib random [--category] [--trigger]
//   ui-lib add <id> [--dir ./components] [--format html|react]
// Every command also accepts --json for machine-readable output.

import { spawnSync } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import {
  componentName,
  creditHeader,
  formatElement,
  getElement,
  getRandom,
  listCategories,
  searchElements,
  UiLibError,
  type ElementFormat,
  type ElementSummary,
} from './data.js';

const VERSION = '1.0.0';

interface ParsedArgs {
  command: string;
  positional: string[];
  flags: Record<string, string | boolean>;
}

function parseArgs(argv: string[]): ParsedArgs {
  const positional: string[] = [];
  const flags: Record<string, string | boolean> = {};
  let command = '';
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith('--')) {
      const name = arg.slice(2);
      const eq = name.indexOf('=');
      if (eq >= 0) {
        flags[name.slice(0, eq)] = name.slice(eq + 1);
      } else if (i + 1 < argv.length && !argv[i + 1].startsWith('--')) {
        flags[name] = argv[++i];
      } else {
        flags[name] = true;
      }
    } else if (!command) {
      command = arg;
    } else {
      positional.push(arg);
    }
  }
  return { command, positional, flags };
}

function usage(): string {
  return [
    'ui-lib — UI Design Library CLI (3,805 free copy-paste HTML+CSS elements)',
    '',
    'Usage:',
    '  ui-lib search <query> [--category <name>] [--trigger <name>]',
    '  ui-lib get <id> [--format html|css|all-in-one|react] [--out <file>] [--copy]',
    '  ui-lib list',
    '  ui-lib random [--category <name>] [--trigger <name>]',
    '  ui-lib add <id> [--dir <dir>] [--format html|react]',
    '',
    'Every command also accepts --json for machine-readable output.',
    'Data: https://mr-10.github.io/ui-design-library',
  ].join('\n');
}

function flag(args: ParsedArgs, name: string): string | undefined {
  const v = args.flags[name];
  return typeof v === 'string' ? v : undefined;
}

function hasFlag(args: ParsedArgs, name: string): boolean {
  return args.flags[name] === true;
}

function summaryLine(e: ElementSummary): string {
  return `${e.id} — ${e.name} [${e.category} · ${e.trigger}]\n  ${e.description}`;
}

function fail(err: unknown): never {
  if (err instanceof UiLibError) {
    console.error(`Error: ${err.message}`);
    console.error(`Try: ${err.suggestion}`);
  } else if (err instanceof Error) {
    console.error(`Error: ${err.message}`);
  } else {
    console.error(`Error: ${String(err)}`);
  }
  process.exit(1);
}

/** Copy text to the clipboard if a clipboard tool is available.
 *  Returns true on success; prints a clear message and returns false otherwise. */
function copyToClipboard(text: string): boolean {
  const candidates: { cmd: string; args: string[] }[] = [
    { cmd: 'pbcopy', args: [] },
    { cmd: 'wl-copy', args: [] },
    { cmd: 'xclip', args: ['-selection', 'clipboard'] },
    { cmd: 'xsel', args: ['--clipboard', '--input'] },
  ];
  for (const c of candidates) {
    const which = spawnSync('which', [c.cmd], { encoding: 'utf8' });
    if (which.status !== 0) continue;
    const run = spawnSync(c.cmd, c.args, { input: text, encoding: 'utf8' });
    if (run.status === 0) return true;
  }
  console.error(
    'Clipboard unavailable: no pbcopy, wl-copy, xclip or xsel found on this machine.',
  );
  return false;
}

async function cmdSearch(args: ParsedArgs): Promise<void> {
  const query = args.positional[0];
  if (!query) {
    console.error('Error: ui-lib search needs a query.');
    console.error('Try: ui-lib search "glowing button"');
    process.exit(1);
  }
  const results = await searchElements(query, {
    category: flag(args, 'category'),
    trigger: flag(args, 'trigger'),
  });
  if (hasFlag(args, 'json')) {
    console.log(JSON.stringify({ query, count: results.length, results }, null, 2));
    return;
  }
  if (results.length === 0) {
    console.log(`No elements found for "${query}".`);
    console.log('Try a different keyword, or run: ui-lib list');
    return;
  }
  console.log(
    results.map((r, i) => `${i + 1}. ${summaryLine(r)}`).join('\n'),
  );
  console.log(
    `\n${results.length} result(s). Get one with: ui-lib get <id>`,
  );
}

async function cmdGet(args: ParsedArgs): Promise<void> {
  const id = args.positional[0];
  if (!id) {
    console.error('Error: ui-lib get needs an element id.');
    console.error('Try: ui-lib search "button" — then ui-lib get <id>');
    process.exit(1);
  }
  const format = (flag(args, 'format') ?? 'all-in-one') as ElementFormat;
  if (!['html', 'css', 'all-in-one', 'react'].includes(format)) {
    console.error(`Error: unknown format "${format}".`);
    console.error('Try: ui-lib get <id> --format html|css|all-in-one|react');
    process.exit(1);
  }
  const el = await getElement(id);
  const code = formatElement(el, format);
  const header = creditHeader(el, format);
  const full = `${header}\n\n${code}`;
  if (hasFlag(args, 'json')) {
    console.log(
      JSON.stringify(
        {
          id: el.id,
          name: el.name,
          category: el.category,
          author: el.author,
          source: el.source,
          format,
          code,
        },
        null,
        2,
      ),
    );
    return;
  }
  const out = flag(args, 'out');
  if (out) {
    const path = resolve(out);
    await writeFile(path, full, 'utf8');
    console.log(`Wrote ${el.id} (${format}) to ${path}.`);
  } else {
    console.log(full);
  }
  if (hasFlag(args, 'copy')) {
    if (copyToClipboard(full)) {
      console.error('Copied to clipboard.');
    } else {
      console.error('The code is printed above — copy it from there.');
    }
  }
}

async function cmdList(args: ParsedArgs): Promise<void> {
  const categories = await listCategories();
  const total = categories.reduce((n, c) => n + c.count, 0);
  if (hasFlag(args, 'json')) {
    console.log(JSON.stringify({ total, categories }, null, 2));
    return;
  }
  for (const c of categories) {
    console.log(`${c.name} — ${c.count.toLocaleString('en-US')} elements`);
  }
  console.log(`\n${total.toLocaleString('en-US')} elements in ${categories.length} categories.`);
}

async function cmdRandom(args: ParsedArgs): Promise<void> {
  const result = await getRandom({
    category: flag(args, 'category'),
    trigger: flag(args, 'trigger'),
  });
  if (hasFlag(args, 'json')) {
    console.log(JSON.stringify(result, null, 2));
    return;
  }
  console.log(summaryLine(result));
  console.log(`\nGet it with: ui-lib get ${result.id}`);
}

async function cmdAdd(args: ParsedArgs): Promise<void> {
  const id = args.positional[0];
  if (!id) {
    console.error('Error: ui-lib add needs an element id.');
    console.error('Try: ui-lib search "button" — then ui-lib add <id>');
    process.exit(1);
  }
  const format = (flag(args, 'format') ?? 'html') as 'html' | 'react';
  if (!['html', 'react'].includes(format)) {
    console.error(`Error: ui-lib add supports --format html or react, not "${format}".`);
    console.error('Try: ui-lib add <id> --format react');
    process.exit(1);
  }
  const dir = resolve(flag(args, 'dir') ?? './components');
  const el = await getElement(id);
  const code = formatElement(el, format === 'react' ? 'react' : 'all-in-one');
  const fileName =
    format === 'react' ? `${componentName(el.id)}.jsx` : `${el.id}.html`;
  const path = join(dir, fileName);
  await mkdir(dir, { recursive: true });
  const header = creditHeader(el, format === 'react' ? 'react' : 'all-in-one');
  await writeFile(path, `${header}\n\n${code}\n`, 'utf8');
  if (hasFlag(args, 'json')) {
    console.log(
      JSON.stringify(
        { id: el.id, name: el.name, format, path, author: el.author, source: el.source },
        null,
        2,
      ),
    );
    return;
  }
  console.log(`Added ${el.name} (${el.id}) to ${path}.`);
  console.log(`Credit: by ${el.author} — ${el.source}`);
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  if (hasFlag(args, 'help') || args.command === 'help' || args.command === '') {
    console.log(usage());
    return;
  }
  if (hasFlag(args, 'version') || args.command === 'version') {
    console.log(`ui-lib ${VERSION}`);
    return;
  }
  try {
    switch (args.command) {
      case 'search':
        await cmdSearch(args);
        break;
      case 'get':
        await cmdGet(args);
        break;
      case 'list':
        await cmdList(args);
        break;
      case 'random':
        await cmdRandom(args);
        break;
      case 'add':
        await cmdAdd(args);
        break;
      default:
        console.error(`Error: unknown command "${args.command}".`);
        console.error(usage());
        process.exit(1);
    }
  } catch (err) {
    fail(err);
  }
}

main();

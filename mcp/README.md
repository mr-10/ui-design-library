# ui-design-library-mcp

MCP server and CLI for the [UI Design Library](https://mr-10.github.io/ui-design-library/) — 3,805 free copy-paste HTML+CSS UI elements (buttons, loaders, cards, forms, toggles, inputs, checkboxes, patterns, radio buttons, tooltips, notifications) from [Uiverse.io](https://uiverse.io), MIT licensed.

No login, no accounts, no API keys. The data is public static JSON on GitHub Pages; the server fetches it on demand and caches it locally.

## MCP server

Run it with any MCP client (Claude Desktop, Claude Code, Cursor, VS Code, Windsurf):

```json
{
  "mcpServers": {
    "ui-design-library": {
      "command": "npx",
      "args": ["-y", "ui-design-library-mcp"]
    }
  }
}
```

Or with Claude Code:

```sh
claude mcp add ui-design-library -- npx -y ui-design-library-mcp
```

### Tools

| Tool | What it does |
| --- | --- |
| `search_elements(query, category?, trigger?, limit?)` | Keyword search. Returns only id, name, category, trigger and a one-line description per hit — never code. Limit defaults to 8, max 20. |
| `list_categories()` | The 11 categories with element counts. |
| `get_element(id, format?)` | One element's code. Formats: `html`, `css`, `all-in-one` (default, a single-file HTML document), `react`. Never more than one element per call. Includes a one-line author credit + source link. |
| `get_similar(id, limit?)` | Elements sharing tags with one element. Summaries only, no code. |
| `get_random(category?, trigger?)` | One random element summary. |

### Resources and prompts

- `ui-lib://index` — the full element index (id, name, category, trigger, tags, description).
- `ui-lib://categories` — categories with counts.
- Prompt `use-ui-element` — search first, fetch one element, adapt its colours, keep the author credit.

### Example conversation

> **You:** Add a glowing hover button to my page.
>
> **Agent:** calls `search_elements({ query: "glowing button", limit: 5 })`, then `get_element({ id: "…", format: "all-in-one" })`, adapts the colours to your page and keeps the author credit comment.

## CLI

The same package ships a `ui-lib` command:

```sh
npx -y ui-design-library-mcp search "glowing button"
# or, once installed:  ui-lib search "glowing button"

ui-lib search <query> [--category <name>] [--trigger <name>]
ui-lib get <id> [--format html|css|all-in-one|react] [--out <file>] [--copy]
ui-lib list
ui-lib random [--category <name>] [--trigger <name>]
ui-lib add <id> [--dir ./components] [--format html|react]
```

Every command accepts `--json` for machine-readable output. `ui-lib add` writes the element into a directory (creating it if needed) as `<id>.html` or, for `--format react`, `<ComponentName>.jsx`, with the author credit at the top. `--copy` copies the code to the clipboard when `pbcopy`, `wl-copy`, `xclip` or `xsel` is available, and says so clearly when it is not.

## How the data is cached

- The index (`data/index.min.json`, ~800 KB) is fetched from the live site on each call and cached in memory and on disk (`~/.cache/ui-design-library-mcp`, or `$XDG_CACHE_HOME/ui-design-library-mcp`; override with `UI_LIB_CACHE_DIR`).
- When the live index version changes, the cached per-element files are discarded and re-fetched.
- Per-element files (`api/<category>/<id>.json`) are fetched on demand and cached the same way.
- If the network is down, the disk cache is used; if there is no disk cache, a local copy of the repo data is used when `UI_LIB_LOCAL_DATA` points at a clone root. Nothing is ever uploaded or logged — no analytics, no user data collected.

## The `react` format

`get_element` with `format: "react"` (and `ui-lib add --format react`) returns a small component that renders the element's HTML with `dangerouslySetInnerHTML` and its CSS in a `<style>` tag. This is deliberate: the elements' HTML uses plain `class` attributes, and a `class` → `className` rewrite is fragile (it would also have to rewrite `for` → `htmlFor` and every other HTML-only attribute). The HTML stays untouched inside a template literal, so the element renders exactly as designed.

## Development

```sh
npm install
npm run build   # tsc -> dist/
npm test        # node:test — unit tests + a stdio integration test
```

Tests use Node's built-in runner only. The integration test starts the built server with a real MCP client and calls every tool against the live Pages data (falling back to the local repo copy if the network is down).

## License

MIT. The elements themselves are from Uiverse.io under MIT — keep the author credit (author name + source link) on anything you reuse.

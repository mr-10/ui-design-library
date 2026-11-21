#!/usr/bin/env python3
"""Generate machine-readable data for the UI Design Library.

Reads the analysed metadata in data/<category>.json and the element source
in uiverse/<category>/<id>/, and writes:

  data/index.min.json   compact index: id, name, category, trigger,
                        tags (max 6), description (<100 chars) per element
  data/categories.json  category names + counts
  api/<category>/<id>.json  one file per element: metadata + html + css
                        (+ js only if present) + combined single-file version
  llms.txt              root file describing the library for LLMs

The `version` is a short hash of the element ids/triggers/tags and the
category counts, so it changes only when the data actually changes. The
MCP server caches the index and refreshes when this version changes.

Usage: python3 scripts/generate-api-data.py
Run from the repository root. Idempotent; safe to re-run.
"""

import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
UIVERSE = ROOT / "uiverse"
API = ROOT / "api"

CATEGORIES = [
    "buttons", "loaders", "cards", "toggle-switches", "inputs", "forms",
    "checkboxes", "patterns", "radio-buttons", "tooltips", "notifications",
]

BODY_RE = re.compile(r"<body[^>]*>(.*?)</body>", re.S | re.I)
SITE = "https://mr-10.github.io/ui-design-library"


def extract_body(index_html: str) -> str:
    """Return the markup inside <body> of an element's index.html."""
    m = BODY_RE.search(index_html)
    return (m.group(1).strip() if m else "")


def combined_doc(name: str, author: str, link: str, css: str, body: str) -> str:
    """Build a single-file HTML document from the element's CSS + markup.

    Faithful to the element's own code: no injected centering rule, so the
    file is exactly what the author published (plus attribution).
    """
    return (
        "<!DOCTYPE html>\n"
        "<html lang=\"en\">\n"
        "<head>\n"
        "<meta charset=\"utf-8\">\n"
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n"
        f"<title>{name}</title>\n"
        "<style>\n"
        f"/* From Uiverse.io by {author} - {link} */\n"
        f"{css.rstrip()}\n"
        "</style>\n"
        "</head>\n"
        "<body>\n"
        f"{body}\n"
        "</body>\n"
        "</html>\n"
    )


def main() -> int:
    index_entries = []
    categories_out = []
    hash_parts = []
    missing = []
    total = 0

    for cat in CATEGORIES:
        cat_file = DATA / f"{cat}.json"
        if not cat_file.exists():
            print(f"WARN: missing {cat_file}", file=sys.stderr)
            continue
        data = json.loads(cat_file.read_text())
        elements = data["elements"]
        count = 0
        api_dir = API / cat
        api_dir.mkdir(parents=True, exist_ok=True)

        for el in elements:
            eid = el["id"]
            folder = UIVERSE / cat / eid
            index_html = folder / "index.html"
            styles_css = folder / "styles.css"
            if not index_html.exists() or not styles_css.exists():
                missing.append(eid)
                continue
            html = extract_body(index_html.read_text())
            css = styles_css.read_text().rstrip() + "\n"
            # js only if the element actually ships a script (none do today)
            js = ""
            script = folder / "script.js"
            if script.exists():
                js = script.read_text().rstrip() + "\n"

            desc = " ".join(el.get("description", "").split())
            if len(desc) >= 100:
                desc = desc[:97].rstrip() + "…"
            tags = list(el.get("tags", []))[:6]

            rec = {
                "id": eid,
                "name": el["name"],
                "category": cat,
                "author": el["author"],
                "source": el["link"],
                "trigger": el["trigger"],
                "description": desc,
                "howItWorks": el.get("howItWorks", ""),
                "tags": tags,
                "html": html,
                "css": css,
                "combined": combined_doc(
                    el["name"], el["author"], el["link"], css, html),
            }
            if js:
                rec["js"] = js
            (api_dir / f"{eid}.json").write_text(
                json.dumps(rec, ensure_ascii=False, indent=1) + "\n")

            index_entries.append({
                "id": eid,
                "name": el["name"],
                "category": cat,
                "trigger": el["trigger"],
                "tags": tags,
                "description": desc,
            })
            hash_parts.append(f"{eid}|{el['trigger']}|{','.join(tags)}")
            count += 1

        categories_out.append({
            "name": cat,
            "count": count,
            "browse": f"{SITE}/#/browse?category={cat}",
        })
        total += count
        print(f"{cat}: {count} api files")

    version_src = "\n".join(hash_parts + [f"total={total}"]).encode()
    version = hashlib.sha256(version_src).hexdigest()[:12]

    (DATA / "index.min.json").write_text(json.dumps(
        {"version": version, "total": total, "elements": index_entries},
        ensure_ascii=False, separators=(",", ":")))
    (DATA / "categories.json").write_text(json.dumps(
        {"version": version, "total": total, "categories": categories_out},
        ensure_ascii=False, indent=1) + "\n")

    cat_lines = "\n".join(
        f"- {c['name']}: {c['count']} elements" for c in categories_out)
    (ROOT / "llms.txt").write_text(
        "# UI Design Library\n"
        "\n"
        "> 3,805 free copy-paste HTML+CSS UI elements (buttons, loaders, "
        "cards, forms, toggles, inputs, checkboxes, patterns, radio "
        "buttons, tooltips, notifications) from Uiverse.io, MIT licensed. "
        "Every element is pure HTML + CSS, no JavaScript, no login, no "
        "account, no API key. Browse, copy the code, paste it into your "
        "project, keep the author credit.\n"
        "\n"
        f"> Live site: {SITE}\n"
        f"> Data version: {version}\n"
        "\n"
        "## Categories\n"
        "\n"
        f"{cat_lines}\n"
        "\n"
        "## Machine-readable data\n"
        "\n"
        f"- Full index (id, name, category, trigger, tags, description): {SITE}/data/index.min.json\n"
        f"- Categories (names and counts): {SITE}/data/categories.json\n"
        "- One element (metadata, html, css, combined single-file version): "
        f"{SITE}/api/<category>/<id>.json\n"
        "- Element source on GitHub: "
        "https://github.com/mr-10/ui-design-library/tree/main/uiverse/<category>/<id>\n"
        "\n"
        "## Use with AI agents (MCP)\n"
        "\n"
        "An MCP server is available as the npm package "
        "`ui-design-library-mcp` (command `npx -y ui-design-library-mcp`). "
        "It exposes search_elements, list_categories, get_element, "
        "get_similar and get_random over this data. See the README section "
        "\"Use with AI agents\" for the config for Claude Desktop, Claude "
        "Code, Cursor, VS Code and Windsurf.\n"
        "\n"
        "## Rules for using an element\n"
        "\n"
        "- Use at most one element's code per answer; search first, then "
        "fetch that one element.\n"
        "- Keep the author credit (author name + uiverse.io source link).\n"
        "- Adapt colours to the project; keep the element's behaviour.\n"
    )

    print(f"\ntotal elements: {total}")
    print(f"version: {version}")
    if missing:
        print(f"missing source files, skipped: {len(missing)}: {missing[:10]}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

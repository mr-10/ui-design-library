#!/usr/bin/env python3
"""Enrich the UI Design Library metadata (data/<category>.json) with real,
specific descriptions, tags, triggers, colors and fonts, derived from each
element's actual HTML and CSS.

Reads the analysed metadata in data/<category>.json and the element source
in uiverse/<category>/<id>/, and rewrites the metadata in place:

  - description: specific 8-15 word description naming style, colors and
    effect (replaces generic "A button UI element." templates)
  - howItWorks: specific sentence(s) generated from the CSS (which property
    changes on hover/click/focus/checked, what the loop animation does)
  - tags: old tags kept, new style/color/shape/effect/use-case tags prepended
  - colors: real colors incl. CSS variables, inline styles, style tags and
    Tailwind classes (no longer just #ffffff/#000000 placeholders)
  - fonts: font-family values found in the CSS / Tailwind classes
  - tailwind: true where Tailwind utility classes are used
  - trigger: re-detected from real CSS + Tailwind pseudo variants
    (hover:, focus:, checked:, animate-*) — fixes "static" elements that
    actually react
  - issues: honest per-element issues (no-css, empty-body, ...)

Also rewrites data/manifest.json (honest trigger/tag/issue counts) and
writes docs/DATA-ISSUES.md listing elements with no usable CSS.

Usage: python3 scripts/enrich-metadata.py [--limit N] [--category CAT]
Run from the repository root. Idempotent; safe to re-run.
"""

import argparse
import json
import re
import sys
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
UIVERSE = ROOT / "uiverse"
DOCS = ROOT / "docs"

CATEGORIES = [
    "buttons", "loaders", "cards", "toggle-switches", "inputs", "forms",
    "checkboxes", "patterns", "radio-buttons", "tooltips", "notifications",
]

SINGULAR = {"buttons": "button", "loaders": "loader", "cards": "card",
            "toggle-switches": "toggle switch", "inputs": "input",
            "forms": "form", "checkboxes": "checkbox", "patterns": "pattern",
            "radio-buttons": "radio button", "tooltips": "tooltip",
            "notifications": "notification"}

# ---------------------------------------------------------------------------
# CSS parsing
# ---------------------------------------------------------------------------

def strip_css_comments(css: str) -> str:
    return re.sub(r"/\*.*?\*/", "", css, flags=re.S)


def _parse_block(text: str, rules, keyframes):
    """Parse a flat CSS chunk (no comments) into (selector, decls) rules
    and @keyframes entries. Handles @media by recursing."""
    i, n = 0, len(text)
    while i < n:
        # skip whitespace / stray semicolons / closing braces
        while i < n and text[i] in " \t\r\n;":
            i += 1
        if i >= n:
            break
        brace = text.find("{", i)
        if brace == -1:
            break
        selector = text[i:brace].strip()
        # find matching close brace
        depth, j = 1, brace + 1
        while j < n and depth:
            if text[j] == "{":
                depth += 1
            elif text[j] == "}":
                depth -= 1
            j += 1
        body = text[brace + 1:j - 1]
        i = j
        if not selector:
            continue
        low = selector.lower()
        if low.startswith("@keyframes") or low.startswith("@-webkit-keyframes"):
            name = selector.split(None, 1)[1].strip() if len(selector.split(None, 1)) > 1 else ""
            steps = []
            _parse_block(body, steps, {})
            keyframes[name] = steps
        elif low.startswith("@media") or low.startswith("@supports"):
            _parse_block(body, rules, keyframes)
        elif low.startswith("@"):
            continue
        else:
            decls = {}
            for part in body.split(";"):
                if ":" not in part:
                    continue
                prop, _, val = part.partition(":")
                prop = prop.strip().lower()
                val = val.strip()
                if prop and val:
                    decls[prop] = val
            if decls:
                rules.append((selector, decls))
    return rules, keyframes


def parse_css(css: str):
    """Return (rules, keyframes). rules: [(selector, {prop: value})].
    keyframes: {name: [(step-selector, {prop: value})]}."""
    rules, keyframes = _parse_block(strip_css_comments(css), [], {})
    return rules, keyframes


def collect_var_defs(rules):
    """CSS custom property definitions, last definition wins."""
    defs = {}
    for _, decls in rules:
        for prop, val in decls.items():
            if prop.startswith("--"):
                defs[prop] = val.strip()
    return defs


VAR_RE = re.compile(r"var\(\s*(--[\w-]+)\s*(?:,\s*([^)]*))?\)")


def resolve_vars(value: str, defs: dict, depth: int = 0) -> str:
    if depth > 4 or "var(" not in value:
        return value

    def repl(m):
        name = m.group(1)
        fallback = m.group(2)
        if name in defs:
            return defs[name]
        return fallback.strip() if fallback else ""

    return resolve_vars(VAR_RE.sub(repl, value), defs, depth + 1)


# ---------------------------------------------------------------------------
# Colours
# ---------------------------------------------------------------------------

HEX_RE = re.compile(r"#([0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{4}|[0-9a-fA-F]{3})\b")
RGB_RE = re.compile(r"rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*[\d.]+)?\s*\)")
HSL_RE = re.compile(r"hsla?\(\s*([\d.]+)\s*,?\s*([\d.]+)%\s*,?\s*([\d.]+)%")
NAMED_COLORS = {
    "black": "#000000", "white": "#ffffff", "red": "#ff0000",
    "green": "#008000", "blue": "#0000ff", "yellow": "#ffff00",
    "orange": "#ffa500", "purple": "#800080", "pink": "#ffc0cb",
    "cyan": "#00ffff", "magenta": "#ff00ff", "lime": "#00ff00",
    "teal": "#008080", "navy": "#000080", "maroon": "#800000",
    "olive": "#808000", "aqua": "#00ffff", "fuchsia": "#ff00ff",
    "silver": "#c0c0c0", "gray": "#808080", "grey": "#808080",
    "brown": "#a52a2a", "gold": "#ffd700", "beige": "#f5f5dc",
    "ivory": "#fffff0", "coral": "#ff7f50", "salmon": "#fa8072",
    "khaki": "#f0e68c", "lavender": "#e6e6fa", "indigo": "#4b0082",
    "violet": "#ee82ee", "crimson": "#dc143c", "tomato": "#ff6347",
    "turquoise": "#40e0d0", "skyblue": "#87ceeb", "hotpink": "#ff69b4",
    "deeppink": "#ff1493", "orangered": "#ff4500", "dodgerblue": "#1e90ff",
    "royalblue": "#4169e1", "steelblue": "#4682b4", "seagreen": "#2e8b57",
    "darkgreen": "#006400", "darkblue": "#00008b", "darkred": "#8b0000",
    "lightblue": "#add8e6", "lightgreen": "#90ee90", "lightgray": "#d3d3d3",
    "lightgrey": "#d3d3d3", "darkgray": "#a9a9a9", "darkgrey": "#a9a9a9",
    "dimgray": "#696969", "dimgrey": "#696969", "transparent": None,
}


def _rgb_to_hex(r, g, b):
    return "#%02x%02x%02x" % (max(0, min(255, int(round(float(r))))),
                             max(0, min(255, int(round(float(g))))),
                             max(0, min(255, int(round(float(b))))))


def _hsl_to_hex(h, s, l):
    import colorsys
    r, g, b = colorsys.hls_to_rgb((float(h) % 360) / 360.0,
                                  float(l) / 100.0, float(s) / 100.0)
    return _rgb_to_hex(r * 255, g * 255, b * 255)


def norm_hex(h):
    h = h.lower()
    if len(h) == 8:  # #rrggbbaa -> drop alpha
        h = h[:6]
    elif len(h) == 4:
        h = h[:3]
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    return "#" + h


def hex_to_hsl(hexstr):
    import colorsys
    h = hexstr.lstrip("#")
    r, g, b = (int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))
    hh, ll, ss = colorsys.rgb_to_hls(r, g, b)
    return hh * 360, ss, ll


def color_name(hexstr):
    """Nearest everyday colour name for a hex value (base hue only)."""
    h, s, l = hex_to_hsl(hexstr)
    if s < 0.08:
        if l >= 0.93:
            return "white"
        if l <= 0.08:
            return "black"
        if l >= 0.62:
            return "light-gray"
        if l >= 0.35:
            return "gray"
        return "dark-gray"
    if h < 12 or h >= 348:
        return "red"
    if h < 30:
        return "orange"
    if h < 48:
        return "amber"
    if h < 65:
        return "yellow"
    if h < 85:
        return "lime"
    if h < 155:
        return "green"
    if h < 172:
        return "emerald"
    if h < 190:
        return "teal"
    if h < 205:
        return "cyan"
    if h < 225:
        return "sky-blue"
    if h < 250:
        return "blue"
    if h < 265:
        return "indigo"
    if h < 285:
        return "violet"
    if h < 305:
        return "purple"
    if h < 325:
        return "fuchsia"
    if h < 348:
        return "pink"
    return "red"


def color_display_name(hexstr):
    """Human name with a light/dark modifier, for descriptions.
    'Neon' is NOT added here — it only applies as a style word when the
    element actually has a glow shadow (see detect_glow)."""
    h, s, l = hex_to_hsl(hexstr)
    base = color_name(hexstr)
    if base in ("white", "black", "gray", "light-gray", "dark-gray"):
        return base
    if l < 0.30:
        return "dark " + base
    if l > 0.78:
        return "light " + base
    return base


def extract_colors_from_value(value, defs, counts):
    value = resolve_vars(value, defs)
    for h in HEX_RE.findall(value):
        counts[norm_hex(h)] += 1
    for r, g, b in RGB_RE.findall(value):
        counts[_rgb_to_hex(r, g, b)] += 1
    for hh, s, l in HSL_RE.findall(value):
        counts[_hsl_to_hex(hh, s, l)] += 1
    for word in re.findall(r"[a-zA-Z]+", value):
        lw = word.lower()
        if lw in NAMED_COLORS and NAMED_COLORS[lw]:
            counts[NAMED_COLORS[lw]] += 1


# Standard Tailwind CSS v3 palette (hex per hue/shade).
TAILWIND_PALETTE = {
    "slate": {"50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a", "950": "#020617"},
    "gray": {"50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827", "950": "#030712"},
    "zinc": {"50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b", "950": "#09090b"},
    "neutral": {"50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717", "950": "#0a0a0a"},
    "stone": {"50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917", "950": "#0c0a09"},
    "red": {"50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d", "950": "#450a0a"},
    "orange": {"50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12", "950": "#431407"},
    "amber": {"50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f", "950": "#451a03"},
    "yellow": {"50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12", "950": "#422006"},
    "lime": {"50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314", "950": "#1a2e05"},
    "green": {"50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d", "950": "#052e16"},
    "emerald": {"50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b", "950": "#022c22"},
    "teal": {"50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a", "950": "#042f2e"},
    "cyan": {"50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63", "950": "#083344"},
    "sky": {"50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e", "950": "#082f49"},
    "blue": {"50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554"},
    "indigo": {"50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81", "950": "#1e1b4b"},
    "violet": {"50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95", "950": "#2e1065"},
    "purple": {"50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87", "950": "#3b0764"},
    "fuchsia": {"50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75", "950": "#4a044e"},
    "pink": {"50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843", "950": "#500724"},
    "rose": {"50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337", "950": "#4c0519"},
}

TW_COLOR_RE = re.compile(
    r"(?:^|:)(?:bg|text|border|ring|divide|from|via|to|accent|caret|fill|stroke|shadow|outline|decoration)-"
    r"(black|white|transparent|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)"
    r"(?:-(\d{2,3}))?(?:/|$)")

# ---------------------------------------------------------------------------
# Tailwind class analysis
# ---------------------------------------------------------------------------

# Tokens that are almost certainly Tailwind utilities (not author class names).
TW_UTIL_RE = re.compile(
    r"^(?:"
    r"(?:hover|focus|active|checked|disabled|visited|group-hover|dark|sm|md|lg|xl|2xl):.+"
    r"|(?:bg|text|border|ring|from|via|to|shadow|rounded|p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|w|h|min-w|min-h|max-w|flex|grid|gap|col|row|font|tracking|leading|uppercase|lowercase|capitalize|italic|underline|opacity|backdrop|blur|transition|duration|ease|scale|rotate|translate|skew|origin|animate|cursor|select|outline|overflow|z|order|basis|shrink|grow|items|justify|content|self|place|inset|top|right|bottom|left|block|inline-block|inline|hidden|relative|absolute|fixed|sticky|static|table|border|divide|space|sr-only|not-sr-only|truncate|whitespace|break|list|appearance|pointer-events|resize|scroll|snap|touch|will-change|fill|stroke|object|aspect)-"
    r"|flex|grid|hidden|block|relative|absolute|fixed|sticky|rounded|shadow|transition|transform|antialiased|cursor-pointer|select-none|outline-none|overflow-hidden"
    r")$"
)

TW_ANIMATE = {"animate-spin": "spin", "animate-ping": "ping",
              "animate-pulse": "pulse", "animate-bounce": "bounce",
              "animate-none": None}

USE_CASE_WORDS = {
    "login": "login", "signin": "login", "sign-in": "login",
    "signup": "signup", "sign-up": "signup", "register": "signup",
    "search": "search", "submit": "submit", "download": "download",
    "upload": "upload", "menu": "menu", "profile": "profile",
    "pricing": "pricing", "price": "pricing", "newsletter": "newsletter",
    "subscribe": "newsletter", "contact": "contact", "password": "password",
    "settings": "settings", "social": "social", "google": "google",
    "github": "github", "facebook": "facebook", "twitter": "twitter",
    "play": "play", "pause": "pause", "like": "like", "share": "share",
    "cart": "cart", "checkout": "checkout", "close": "close",
    "send": "send", "save": "save", "delete": "delete", "edit": "edit",
    "add": "add", "next": "next", "back": "back", "home": "home",
    "email": "email", "phone": "phone", "chat": "chat", "comment": "comment",
    "follow": "follow", "heart": "like", "star": "rating", "rating": "rating",
}


def analyse_tailwind(class_tokens):
    """Return (is_tailwind, tw_colors Counter, tw_variants set, tw_animates set,
    tw_fonts set). class_tokens: all class attribute tokens in the element."""
    is_tw = False
    tw_hits = 0
    colors = Counter()
    variants = set()
    animates = set()
    fonts = set()
    for tok in class_tokens:
        # split variant prefixes: hover:bg-blue-500 -> variants {hover}, core bg-blue-500
        parts = tok.split(":")
        core = parts[-1]
        for v in parts[:-1]:
            variants.add(v)
        m = TW_COLOR_RE.match(tok)
        if m:
            hue, shade = m.group(1), m.group(2)
            if hue in ("black",):
                colors["#000000"] += 1
            elif hue in ("white",):
                colors["#ffffff"] += 1
            elif hue == "transparent":
                pass
            else:
                shade = shade or "500"
                hexv = TAILWIND_PALETTE.get(hue, {}).get(shade)
                if hexv:
                    colors[hexv] += 1
            tw_hits += 1
        if core in TW_ANIMATE:
            if TW_ANIMATE[core]:
                animates.add(TW_ANIMATE[core])
            tw_hits += 1
        if core.startswith("font-"):
            fam = core[5:]
            if fam in ("sans", "serif", "mono"):
                fonts.add(fam)
            tw_hits += 1
        if TW_UTIL_RE.match(core) or ":" in tok:
            tw_hits += 1
    if tw_hits >= 3:
        is_tw = True
    return is_tw, colors, variants, animates, fonts


def tailwind_state_effects(class_tokens):
    """Derive interaction effects and styles from Tailwind variant classes.
    Returns (state_changes, effect_words, style_words) where state_changes
    is {variant: [plain-language change, ...]} for hover/focus/active/checked.
    """
    state_changes = {}
    effect_words = []
    style_words = set()
    for tok in class_tokens:
        parts = tok.split(":")
        if len(parts) < 2:
            core = tok
            variant = None
        else:
            variant = parts[-2] if parts[-1] else None
            core = parts[-1]
        # style words from plain (non-variant) classes
        if core.startswith("bg-gradient-to-"):
            style_words.add("gradient")
        if core == "rounded-full":
            style_words.add("pill")
            style_words.add("rounded")
        elif core.startswith("rounded"):
            style_words.add("rounded")
        if core.startswith("shadow-") and core != "shadow-none":
            style_words.add("shadowed")
        if not variant:
            continue
        if variant not in ("hover", "focus", "active", "checked", "group-hover"):
            continue
        v = "hover" if variant == "group-hover" else variant
        changes = state_changes.setdefault(v, [])
        if core.startswith("bg-"):
            changes.append("background changes")
            effect_words.append("changes-color")
        elif core.startswith("text-"):
            changes.append("text colour changes")
            effect_words.append("changes-color")
        elif core.startswith("ring"):
            changes.append("a ring appears")
            effect_words.append("rings")
        elif core.startswith("scale-"):
            changes.append("it scales")
            effect_words.append("scales-up")
        elif core.startswith("shadow"):
            changes.append("shadow grows")
            effect_words.append("glows")
        elif core.startswith("translate-"):
            changes.append("it shifts position")
            effect_words.append("slides")
        elif core.startswith("opacity-"):
            changes.append("opacity changes")
            effect_words.append("fades")
        elif core.startswith("border-"):
            changes.append("border changes")
            effect_words.append("changes-color")
        elif core.startswith("rotate-"):
            changes.append("it rotates")
            effect_words.append("rotates")
    return state_changes, list(dict.fromkeys(effect_words)), style_words


# ---------------------------------------------------------------------------
# Trigger detection
# ---------------------------------------------------------------------------

def detect_trigger(rules, keyframes, html, category, tw_variants, tw_animates):
    css_text = " ".join(sel for sel, _ in rules)
    has_checked = ":checked" in css_text or "checked" in tw_variants
    has_js_click = ("<script" in html.lower()
                    and ("click" in html.lower() or "addEventListener" in html))
    has_hover = (":hover" in css_text or "hover" in tw_variants
                 or "group-hover" in tw_variants)
    has_focus = (":focus" in css_text or "focus" in tw_variants)
    has_active = (":active" in css_text or "active" in tw_variants)
    has_infinite = False
    for _, decls in rules:
        anim = decls.get("animation", "") + " " + decls.get("-webkit-animation", "")
        if "infinite" in anim:
            has_infinite = True
            break
    if not has_infinite and keyframes and tw_animates:
        has_infinite = True
    if not has_infinite:
        for _, decls in rules:
            if decls.get("animation-name") or decls.get("-webkit-animation-name"):
                if "infinite" in (decls.get("animation-iteration-count", "")
                                  + decls.get("animation", "")):
                    has_infinite = True
    has_scroll = ("animation-timeline" in css_text or "scroll-snap" in css_text)
    if has_checked:
        return "checked"
    if has_js_click:
        return "click"
    if has_hover:
        return "hover"
    if has_focus:
        return "focus"
    if has_infinite:
        return "auto-loop"
    if has_active:
        return "active"
    if has_scroll:
        return "scroll"
    if category == "inputs":
        return "focus"
    if category in ("checkboxes", "radio-buttons", "toggle-switches"):
        return "checked"
    return "static"


# ---------------------------------------------------------------------------
# Style / effect detection from parsed CSS
# ---------------------------------------------------------------------------

def _decls_text(rules):
    return " ".join(f"{p}:{v}" for _, d in rules for p, v in d.items())


def state_rules(rules, pseudo):
    """Declarations of rules whose selector contains the pseudo-class,
    keyed by the base selector (pseudo stripped)."""
    out = {}
    for sel, decls in rules:
        if pseudo in sel:
            base = sel.replace(pseudo, "").strip()
            out.setdefault(base, {}).update(decls)
    return out


def base_rules(rules):
    out = {}
    for sel, decls in rules:
        if ":" not in sel and "::" not in sel:
            out.setdefault(sel, {}).update(decls)
    return out


def detect_styles(rules, keyframes, all_css_text):
    """Return a set of style words: glass, neon, gradient, 3d, minimal,
    dark, outlined, rounded, pill, flat."""
    styles = set()
    base = base_rules(rules)
    text = all_css_text
    if "backdrop-filter" in text and re.search(
            r"background[^;]*rgba?\([^;]*,\s*0\.[0-9]", text):
        styles.add("glass")
    if "linear-gradient" in text or "radial-gradient" in text or "conic-gradient" in text:
        styles.add("gradient")
    if ("perspective" in text or "translatez" in text.lower()
            or "rotatex" in text.lower() or "rotatey" in text.lower()):
        styles.add("3d")
    # dark main background: a base rule with a dark background-color
    for _, decls in base.items():
        bg = decls.get("background-color") or decls.get("background", "")
        for h in HEX_RE.findall(bg):
            _, _, l = hex_to_hsl(norm_hex(h))
            if l < 0.22:
                styles.add("dark")
                break
    # outlined: transparent background + visible border on a base rule
    for _, decls in base.items():
        bg = (decls.get("background-color") or decls.get("background", "")).lower()
        if ("transparent" in bg or bg in ("none", "")
                and "border" in decls):
            styles.add("outlined")
            break
    # rounded / pill from border-radius
    max_radius = 0.0
    pill = False
    for m in re.finditer(r"border-radius\s*:\s*([^;]+)", text):
        v = m.group(1)
        if "999" in v or "50%" in v:
            pill = True
        for num in re.findall(r"([\d.]+)(px|rem|em)", v):
            val = float(num[0]) * (16 if num[1] in ("rem", "em") else 1)
            max_radius = max(max_radius, val)
    if pill:
        styles.add("pill")
        styles.add("rounded")
    elif max_radius >= 8:
        styles.add("rounded")
    # minimal: very few declarations and no strong effects
    total_decls = sum(len(d) for _, d in rules)
    if total_decls <= 12 and not (styles & {"gradient", "neon", "glass", "3d"}):
        styles.add("minimal")
    if "box-shadow" not in text:
        styles.add("flat")
    return styles


def detect_glow(rules, top_hexes):
    """True when a vivid colour is used with a blurred glow shadow."""
    text = _decls_text(rules)
    if not re.search(r"box-shadow[^;]*0\s+0\s+\d+", text) and \
            not re.search(r"text-shadow[^;]*0\s+0\s+\d+", text):
        return False
    for hx in top_hexes:
        _, s, l = hex_to_hsl(hx)
        if s > 0.6 and 0.3 <= l <= 0.7:
            return True
    return False


def norm_value_colors(value, defs):
    """Normalise any rgb()/named colour inside a CSS value to hex, so
    how-it-works text is consistent."""
    value = resolve_vars(value, defs)

    def rgb_repl(m):
        return _rgb_to_hex(m.group(1), m.group(2), m.group(3))

    value = RGB_RE.sub(rgb_repl, value)
    for word in set(re.findall(r"[a-zA-Z]+", value)):
        lw = word.lower()
        if lw in NAMED_COLORS and NAMED_COLORS[lw]:
            value = re.sub(rf"\b{lw}\b", NAMED_COLORS[lw], value)
    return value


def describe_hover_change(hover_decls, base_decls, defs=None, kf_desc=None):
    """Human-readable list of what changes on hover, e.g.
    ['background-color #111827 → #f9fafb', 'transform scales to 1.05']."""
    defs = defs or {}
    changes = []
    for prop, val in hover_decls.items():
        val = norm_value_colors(val, defs)
        if prop in ("background", "background-color"):
            old = base_decls.get(prop) or base_decls.get("background-color") or base_decls.get("background")
            old = norm_value_colors(old, defs) if old else None
            changes.append(f"{prop} changes" + (f" from {old} to {val}" if old else f" to {val}"))
        elif prop == "transform":
            changes.append(f"transform becomes {val}")
        elif prop == "box-shadow":
            changes.append(f"box-shadow becomes {val}")
        elif prop == "color":
            old = base_decls.get("color")
            old = norm_value_colors(old, defs) if old else None
            changes.append("text color changes" + (f" from {old} to {val}" if old else f" to {val}"))
        elif prop == "opacity":
            changes.append(f"opacity becomes {val}")
        elif prop in ("border-color", "border"):
            changes.append(f"{prop} becomes {val}")
        elif prop == "letter-spacing":
            changes.append(f"letter-spacing becomes {val}")
        elif prop in ("width", "height", "padding", "gap"):
            changes.append(f"{prop} becomes {val}")
        elif prop == "filter":
            changes.append(f"filter becomes {val}")
        elif prop in ("animation", "-webkit-animation"):
            m = re.search(r"([\w-]+)", val)
            anim = m.group(1) if m else "an animation"
            desc = ""
            if kf_desc and anim in kf_desc:
                desc = f" ({kf_desc[anim]})"
            changes.append(f"starts the {anim} animation{desc}")
        elif prop == "outline":
            changes.append("the outline is removed" if val == "none"
                           else f"outline becomes {val}")
        elif prop in ("border-radius", "border-top", "border-right",
                      "border-bottom", "border-left", "font-size",
                      "font-weight", "text-shadow", "outline-color",
                      "outline-width", "top", "left", "right", "bottom",
                      "scale", "rotate", "translate", "margin", "z-index"):
            changes.append(f"{prop} becomes {val}")
    return changes


def hover_effect_words(hover_decls):
    """Short effect verbs for the hover state: scale, lift, slide, glow,
    color, fade, rotate, expand."""
    words = []
    tr = hover_decls.get("transform", "")
    m = re.search(r"scale\(\s*([\d.]+)", tr)
    if m:
        words.append("scales-up" if float(m.group(1)) > 1 else "shrinks")
    my = re.search(r"translateY\(\s*(-?[\d.]+)", tr)
    if my:
        words.append("lifts" if float(my.group(1)) < 0 else "drops")
    mx = re.search(r"translateX\(\s*(-?[\d.]+)", tr)
    if mx:
        words.append("slides")
    if re.search(r"rotate\(\s*(-?[\d.]+)deg", tr):
        words.append("rotates")
    if "box-shadow" in hover_decls:
        words.append("glows")
    if "background" in hover_decls or "background-color" in hover_decls:
        words.append("changes-color")
    if "color" in hover_decls:
        words.append("changes-color")
    if "opacity" in hover_decls:
        words.append("fades")
    if "letter-spacing" in hover_decls or "width" in hover_decls:
        words.append("expands")
    if "filter" in hover_decls:
        words.append("shifts")
    if "animation" in hover_decls or "-webkit-animation" in hover_decls:
        words.append("animates")
    return words


def describe_keyframes(keyframes):
    """Describe each loop animation: name -> (duration unknown here,
    motion words, one-line summary). Returns {name: summary}."""
    out = {}
    for name, steps in keyframes.items():
        motions = set()
        for _, decls in steps:
            tr = decls.get("transform", "")
            if "rotate" in tr:
                motions.add("rotating")
            if "translatey" in tr.lower():
                motions.add("bouncing")
            if "translatex" in tr.lower():
                motions.add("sliding")
            if "scale" in tr:
                motions.add("pulsing")
            if "opacity" in decls:
                motions.add("fading")
            if "background-position" in decls:
                motions.add("shimmering")
            if "border-radius" in decls:
                motions.add("morphing")
        if not motions:
            # keyframes that only change colour/width etc.
            for _, decls in steps:
                if "background" in decls or "background-color" in decls:
                    motions.add("changing colour")
                if "width" in decls or "height" in decls:
                    motions.add("growing and shrinking")
        summary = ", ".join(sorted(motions)) if motions else "animating"
        out[name] = summary
    return out

# ---------------------------------------------------------------------------
# Noun / description / how-it-works / tags
# ---------------------------------------------------------------------------

def detect_noun(category, html_body, class_tokens, text_content):
    """Short noun phrase for the element, e.g. 'login form', 'spinner loader'."""
    text = text_content.lower()
    classes = " ".join(class_tokens).lower()
    if category == "forms":
        if re.search(r'type\s*=\s*["\']password["\']', html_body):
            if "login" in text or "sign in" in text or "log in" in text:
                return "login form"
            if "sign up" in text or "register" in text or "signup" in text:
                return "signup form"
            return "login form"
        if re.search(r'type\s*=\s*["\']search["\']', html_body) or "search" in text:
            return "search form"
        if "newsletter" in text or "subscribe" in text:
            return "newsletter form"
        if "contact" in text:
            return "contact form"
        if "checkout" in text or "payment" in text or "card number" in text:
            return "checkout form"
        return "form"
    if category == "loaders":
        if "spin" in classes or "ring" in classes or "circle" in classes:
            return "spinner loader"
        if "dot" in classes:
            return "dots loader"
        if "bar" in classes:
            return "bars loader"
        if "cube" in classes or "square" in classes:
            return "cube loader"
        if "wave" in classes:
            return "wave loader"
        return "loader"
    if category == "cards":
        if "profile" in text or "avatar" in classes or "profile" in classes:
            return "profile card"
        if "pricing" in text or "price" in classes or "$" in text:
            return "pricing card"
        if "product" in text or "product" in classes:
            return "product card"
        if "login" in text:
            return "login card"
        return "card"
    if category == "inputs":
        m = re.search(r'type\s*=\s*["\'](\w+)["\']', html_body)
        t = m.group(1) if m else ""
        if t == "search" or "search" in text:
            return "search input"
        if t == "password":
            return "password input"
        if t == "email":
            return "email input"
        if t in ("text", ""):
            return "text input"
        return f"{t} input"
    if category == "tooltips":
        return "tooltip"
    if category == "notifications":
        return "toast notification" if "toast" in classes else "notification"
    if category == "buttons":
        # short meaningful button text becomes the use-case noun
        words = [w for w in re.split(r"\s+", text.strip()) if w]
        if 1 <= len(words) <= 2:
            joined = " ".join(words).lower()
            if joined in ("login", "sign in", "log in", "sign up", "submit",
                          "download", "upload", "search", "menu", "play",
                          "send", "save", "subscribe", "get started",
                          "learn more", "buy now", "add to cart", "scroll"):
                return joined + " button"
        return "button"
    return SINGULAR.get(category, category)


def _words(s):
    return s.split()


def fit_words(words, lo=8, hi=15):
    """Trim or pad a word list into the 8-15 word window. Padding uses
    neutral filler words; trimming drops the least important modifiers."""
    words = list(words)
    drop = ["smooth", "subtle", "simple", "modern", "sleek", "clean"]
    while len(words) > hi:
        # drop a filler word first, else drop the second style word
        for d in drop:
            if d in words:
                words.remove(d)
                break
        else:
            # drop the word before the noun if it is a second adjective
            if len(words) > hi:
                words.pop(1)
            else:
                break
    pad = ["with a smooth transition", "with soft edges", "with a clean look"]
    i = 0
    while len(words) < lo and i < len(pad):
        words.extend(_words(pad[i]))
        i += 1
    return words


def build_description(category, noun, styles, top_hexes, trigger,
                      hover_words, kf_summary, base_decls):
    """Specific 8-15 word description naming style, colours and effect."""
    # colour word: top vivid colour (saturated and not near-black/white),
    # else the tone
    colour = None
    for hx in top_hexes:
        _, s, l = hex_to_hsl(hx)
        if s < 0.25 or l < 0.15 or l > 0.92:
            continue
        name = color_name(hx)
        if name not in ("white", "black", "gray", "light-gray", "dark-gray"):
            colour = color_display_name(hx)
            break
    if colour is None:
        # genuinely monochrome: name the base background tone
        bg_hex = None
        for _, decls in base_decls.items():
            bg = decls.get("background-color") or decls.get("background", "")
            m = HEX_RE.search(bg)
            if m:
                bg_hex = norm_hex(m.group(1))
                break
        if bg_hex:
            _, _, l = hex_to_hsl(bg_hex)
            colour = "black" if l <= 0.12 else ("white" if l >= 0.9 else "gray")
        else:
            for hx in top_hexes:
                _, _, l = hex_to_hsl(hx)
                colour = "black" if l <= 0.12 else ("white" if l >= 0.9 else "gray")
                break
            if colour is None:
                colour = "monochrome"
    style_words = []
    if "glass" in styles:
        style_words.append("glass")
    if "neon" in styles:
        style_words.append("neon")
    if "gradient" in styles:
        style_words.append("gradient")
    if "3d" in styles:
        style_words.append("3D")
    if "dark" in styles and "neon" not in styles:
        style_words.append("dark")
    if "minimal" in styles and not style_words:
        style_words.append("minimal")
    if "outlined" in styles and not style_words:
        style_words.append("outlined")
    if "pill" in styles:
        style_words.append("pill")
    elif "rounded" in styles and "rounded" not in style_words:
        style_words.append("rounded")

    if trigger == "auto-loop" and kf_summary:
        motion = kf_summary.split(", ")[0]
        words = _words(f"{' '.join(style_words)} {colour} {noun} with {motion} motion in a loop".strip())
        words = [w for w in words if w]
        # make the motion read naturally: "spinning", "bouncing", ...
        return " ".join(fit_words(words)).capitalize() + "."
    if trigger == "static":
        feature = []
        if "box-shadow" in _decls_text_from(base_decls):
            feature.append("soft shadow")
        if "rounded" in styles or "pill" in styles:
            feature.append("rounded corners")
        if "gradient" in styles:
            feature.append("gradient fill")
        feat = " and ".join(feature) if feature else "clean lines"
        words = _words(f"{' '.join(style_words)} {colour} {noun} with {feat}".strip())
        return " ".join(fit_words(words)).capitalize() + "."
    # interactive triggers
    effect = ""
    if trigger == "hover":
        if "animates" in hover_words:
            effect = "that starts animating"
        elif "scales-up" in hover_words and "glows" in hover_words:
            effect = "that glows and scales up"
        elif "scales-up" in hover_words:
            effect = "that scales up"
        elif "lifts" in hover_words and "glows" in hover_words:
            effect = "that lifts and glows"
        elif "lifts" in hover_words:
            effect = "that lifts"
        elif "glows" in hover_words:
            effect = "that glows"
        elif "slides" in hover_words:
            effect = "that slides"
        elif "rotates" in hover_words:
            effect = "that rotates"
        elif "changes-color" in hover_words:
            effect = "that changes colour"
        elif "fades" in hover_words:
            effect = "that fades"
        elif "expands" in hover_words:
            effect = "that expands"
        elif "rings" in hover_words:
            effect = "that shows a ring"
        else:
            effect = "that reacts"
        words = _words(f"{' '.join(style_words)} {colour} {noun} {effect} on hover".strip())
        return " ".join(fit_words(words)).capitalize() + "."
    if trigger == "checked":
        words = _words(f"{' '.join(style_words)} {colour} {noun} that toggles on and off when clicked".strip())
        return " ".join(fit_words(words)).capitalize() + "."
    if trigger == "focus":
        words = _words(f"{' '.join(style_words)} {colour} {noun} that lights up when focused".strip())
        return " ".join(fit_words(words)).capitalize() + "."
    if trigger == "click":
        words = _words(f"{' '.join(style_words)} {colour} {noun} that reacts when clicked".strip())
        return " ".join(fit_words(words)).capitalize() + "."
    if trigger == "active":
        words = _words(f"{' '.join(style_words)} {colour} {noun} that responds while pressed down".strip())
        return " ".join(fit_words(words)).capitalize() + "."
    words = _words(f"{' '.join(style_words)} {colour} {noun}".strip())
    return " ".join(fit_words(words)).capitalize() + "."


def _decls_text_from(base_decls):
    return " ".join(f"{p}:{v}" for d in base_decls.values() for p, v in d.items())


def build_how_it_works(trigger, rules, keyframes, kf_desc, noun, defs=None,
                       tw_state=None):
    """Specific how-it-works from the CSS, 1-3 sentences."""
    defs = defs or {}
    tw_state = tw_state or {}
    base = base_rules(rules)
    sentences = []

    def state_sentence(pseudo, intro):
        """Collect the property changes from EVERY rule with this
        pseudo-class (not just the first) and phrase them."""
        rules_for = state_rules(rules, pseudo)
        if not rules_for:
            return None
        bdecls = {}
        for _, d in base.items():
            bdecls.update(d)
        seen, changes = set(), []
        for _, decls in rules_for.items():
            for c in describe_hover_change(decls, bdecls, defs, kf_desc):
                if c not in seen:
                    seen.add(c)
                    changes.append(c)
        if not changes:
            return None
        return intro + ", ".join(changes[:3]) + "."

    hover = state_rules(rules, ":hover")
    if hover:
        s = state_sentence(":hover", "On hover, ")
        if s:
            sentences.append(s)
    elif tw_state.get("hover"):
        sentences.append("On hover, " + " and ".join(
            list(dict.fromkeys(tw_state["hover"]))) + ".")
    if tw_state.get("focus") and not state_rules(rules, ":focus"):
        sentences.append("On focus, " + " and ".join(
            list(dict.fromkeys(tw_state["focus"]))) + ".")
    s = state_sentence(":checked", "Clicking it toggles it: ")
    if s:
        sentences.append(s)
    elif trigger == "checked" and not state_rules(rules, ":checked"):
        sentences.append("Clicking it switches it on or off and it holds that state.")
    s = state_sentence(":focus", "On focus, ")
    if s:
        sentences.append(s)
    if trigger == "active":
        s = state_sentence(":active", "While pressed, ")
        if s:
            sentences.append(s)
    if keyframes and trigger == "auto-loop":
        # find the animation duration from the rules
        dur = ""
        for _, decls in rules:
            anim = decls.get("animation", "") or decls.get("-webkit-animation", "")
            m = re.search(r"([\d.]+s)\b", anim)
            if m:
                dur = m.group(1)
                break
        descs = sorted(set(kf_desc.values()))
        sentences.append(
            f"It loops a {dur + ' ' if dur else ''}animation "
            f"({'; '.join(descs)}).")
    if not sentences:
        if trigger == "static":
            sentences.append(
                f"It has no hover, click, focus or animation states; "
                f"the {noun} is a fixed design.")
        elif trigger == "hover":
            sentences.append(
                "Its CSS has no :hover rule that changes a visible property; "
                "hovering it shows no change.")
        elif trigger == "checked":
            sentences.append(
                "Clicking it switches it on or off; its CSS has no :checked "
                "rule that changes a visible property.")
        elif trigger == "focus":
            sentences.append(
                f"It has no :focus rule in its CSS; focusing the {noun} "
                f"shows only the browser default.")
        elif trigger == "click":
            sentences.append(
                "Clicking it runs its JavaScript; its CSS has no visible "
                "click state.")
        elif trigger == "active":
            sentences.append(
                "Its CSS has no :active rule that changes a visible property; "
                "pressing it shows no change.")
        elif trigger == "auto-loop":
            sentences.append("It animates on its own in a loop; no interaction needed.")
    return " ".join(sentences)


TRIGGER_TAGS = {"hover", "click", "focus", "checked", "active", "auto-loop",
                "scroll", "static"}


def build_tags(old_tags, styles, top_hexes, hover_words, kf_words,
               noun, text_content, class_tokens, trigger, category,
               old_trigger=None):
    """New descriptive tags first, then old tags (dedup, cap 10).
    Drops stale trigger tags (e.g. 'static' when the trigger is now 'hover')."""
    new = []
    # colour tags (top 2 vivid colours; near-black/white/gray do not count)
    for hx in top_hexes:
        _, s, l = hex_to_hsl(hx)
        if s < 0.25 or l < 0.15 or l > 0.92:
            continue
        name = color_name(hx)
        if name not in ("white", "black", "gray", "light-gray", "dark-gray"):
            tag = name.replace("sky-blue", "blue")
            if tag not in new:
                new.append(tag)
        if len(new) >= 2:
            break
    # style tags
    for s in ("neon", "glass", "gradient", "3d", "minimal", "dark",
              "outlined", "rounded", "pill", "flat"):
        if s in styles and s not in new:
            new.append("glassmorphism" if s == "glass" else s)
    # effect tags
    eff_map = {"scales-up": "scale", "lifts": "lift", "slides": "slide",
               "rotates": "rotate", "glows": "glow",
               "changes-color": "color-change", "fades": "fade",
               "expands": "expand", "shrinks": "shrink", "drops": "drop",
               "animates": "animated", "rings": "ring"}
    for w in hover_words:
        t = eff_map.get(w)
        if t and t not in new:
            new.append(t)
    for w in kf_words:
        t = {"rotating": "spin", "bouncing": "bounce", "sliding": "slide",
             "pulsing": "pulse", "fading": "fade",
             "shimmering": "shimmer", "morphing": "morph"}.get(w)
        if t and t not in new:
            new.append(t)
    # use-case tags from text / classes
    hay = (text_content + " " + " ".join(class_tokens)).lower()
    for word, tag in USE_CASE_WORDS.items():
        if re.search(r"\b" + re.escape(word) + r"\b", hay):
            if tag not in new:
                new.append(tag)
    # noun-derived tag (e.g. "login-form" for a login form)
    noun_tag = noun.replace(" ", "-")
    if noun_tag not in new and noun_tag not in ("button", "loader", "card",
                                                "input", "form", "tooltip"):
        new.append(noun_tag)
    # old tags after the new ones (minus stale trigger tags)
    out = []
    for t in new + list(old_tags):
        t = t.strip().lower()
        if not t or t in out:
            continue
        if t in TRIGGER_TAGS and t != trigger:
            continue
        out.append(t)
    return out[:10]

# ---------------------------------------------------------------------------
# Main enrichment
# ---------------------------------------------------------------------------

BODY_RE = re.compile(r"<body[^>]*>(.*?)</body>", re.S | re.I)
STYLE_RE = re.compile(r"<style[^>]*>(.*?)</style>", re.S | re.I)
CLASS_RE = re.compile(r'class\s*=\s*"([^"]*)"', re.I)
INLINE_STYLE_RE = re.compile(r'style\s*=\s*"([^"]*)"', re.I)
TAG_RE = re.compile(r"<[^>]+>")


def read_text(path):
    try:
        return Path(path).read_text(encoding="utf-8", errors="replace")
    except OSError:
        return ""


def enrich_element(cat, el, folder):
    """Return (updated record, stats dict). Reads the element source."""
    index_html = read_text(folder / "index.html")
    css_file = read_text(folder / "styles.css")
    inline_css = "\n".join(STYLE_RE.findall(index_html))
    css_all = css_file + "\n" + inline_css
    rules, keyframes = parse_css(css_all)
    defs = collect_var_defs(rules)

    body_m = BODY_RE.search(index_html)
    body = body_m.group(1).strip() if body_m else ""
    text_content = TAG_RE.sub(" ", body)
    text_content = re.sub(r"\s+", " ", text_content).strip()
    class_tokens = []
    for m in CLASS_RE.findall(index_html):
        class_tokens.extend(m.split())
    inline_styles = INLINE_STYLE_RE.findall(index_html)

    # --- colours: CSS declarations + inline styles + Tailwind classes ---
    counts = Counter()
    colour_props = ("color", "background", "background-color", "border",
                    "border-color", "border-top-color", "border-right-color",
                    "border-bottom-color", "border-left-color", "box-shadow",
                    "text-shadow", "outline", "outline-color", "fill",
                    "stroke", "caret-color", "accent-color",
                    "text-decoration-color")
    for _, decls in rules:
        for prop, val in decls.items():
            if prop in colour_props or prop.startswith("--"):
                extract_colors_from_value(val, defs, counts)
    for st in inline_styles:
        for part in st.split(";"):
            if ":" in part:
                _, _, val = part.partition(":")
                extract_colors_from_value(val, defs, counts)
    is_tw, tw_colors, tw_variants, tw_animates, tw_fonts = analyse_tailwind(class_tokens)
    for hx, n in tw_colors.items():
        counts[hx] += n
    ranked = [c for c, _ in counts.most_common()
              if c not in ("#ffffff", "#000000")]
    # drop near-duplicate hexes (same colour, different rounding)
    deduped = []
    for c in ranked:
        r1, g1, b1 = (int(c[i:i + 2], 16) for i in (1, 3, 5))
        if any(abs(r1 - int(d[i:i + 2], 16)) + abs(g1 - int(d[j:j + 2], 16)) + abs(b1 - int(d[k:k + 2], 16)) < 12
               for d in deduped for i, j, k in [(1, 3, 5)]):
            continue
        deduped.append(c)
    ranked = deduped
    for filler in ("#ffffff", "#000000"):
        if filler in counts and filler not in ranked:
            ranked.append(filler)
    colors = ranked[:3]
    while len(colors) < 2:
        colors.append("#ffffff" if "#ffffff" not in colors else "#000000")
    placeholder = set(colors) <= {"#ffffff", "#000000"}

    # --- fonts ---
    fonts = []
    for _, decls in rules:
        fam = decls.get("font-family")
        if fam:
            first = fam.split(",")[0].strip().strip("\"'")
            if first and first not in fonts and first.lower() not in (
                    "sans-serif", "serif", "monospace", "cursive", "fantasy"):
                fonts.append(first)
            elif first and first not in fonts:
                fonts.append(first)
    for f in sorted(tw_fonts):
        if f not in fonts:
            fonts.append(f)
    fonts = fonts[:3]

    # --- trigger (re-detected from real CSS + Tailwind) ---
    trigger = detect_trigger(rules, keyframes, index_html, cat,
                             tw_variants, tw_animates)

    # --- styles / effects ---
    styles = detect_styles(rules, keyframes, css_all)
    if detect_glow(rules, colors):
        styles.add("neon")
    hover = state_rules(rules, ":hover")
    hover_words = []
    for _, hdecls in hover.items():
        hover_words.extend(hover_effect_words(hdecls))
    # Tailwind: derive hover/focus effects + styles from variant classes
    tw_state, tw_effect_words, tw_style_words = tailwind_state_effects(class_tokens)
    hover_words.extend(tw_effect_words)
    hover_words = list(dict.fromkeys(hover_words))
    if is_tw:
        # CSS-declaration-based "minimal"/"flat" do not apply: the styling
        # lives in the classes, not in a stylesheet
        styles.discard("minimal")
        styles.discard("flat")
        if "gradient" in tw_style_words:
            styles.add("gradient")
        if "pill" in tw_style_words:
            styles.add("pill")
            styles.add("rounded")
        elif "rounded" in tw_style_words:
            styles.add("rounded")
        if "shadowed" in tw_style_words:
            styles.discard("flat")
    kf_desc = describe_keyframes(keyframes)
    kf_words = []
    for s in kf_desc.values():
        kf_words.extend([w.strip() for w in s.split(",")])
    kf_words = list(dict.fromkeys(kf_words))

    # --- noun, description, how-it-works, tags ---
    noun = detect_noun(cat, body, class_tokens, text_content)
    kf_summary = "; ".join(sorted(set(kf_desc.values()))) if kf_desc else ""
    base = base_rules(rules)
    description = build_description(cat, noun, styles, colors, trigger,
                                    hover_words, kf_summary, base)
    how = build_how_it_works(trigger, rules, keyframes, kf_desc, noun,
                             defs, tw_state)
    tags = build_tags(el.get("tags", []), styles, colors, hover_words,
                      kf_words, noun, text_content, class_tokens,
                      trigger, cat, old_trigger=el.get("trigger"))

    # --- usable-CSS check ---
    # The reshape added a centring reset rule (body { display:flex; ... })
    # to every index.html; that is not the element's own CSS, so it does
    # not count as usable CSS.
    RESET_BODY = {"display": "flex", "min-height": "100vh",
                  "align-items": "center", "justify-content": "center",
                  "margin": "0"}
    own_decls = 0
    for sel, decls in rules:
        if sel.strip() == "body" and all(
                decls.get(k) == v for k, v in RESET_BODY.items()):
            continue
        own_decls += len(decls)
    has_usable_css = bool(own_decls or keyframes or is_tw or inline_styles)
    issues = []
    if not has_usable_css:
        issues.append("no-css")
    if not body.strip():
        issues.append("empty-body")
    if not (folder / "index.html").exists():
        issues.append("missing-index")

    rec = dict(el)
    rec["description"] = description
    rec["howItWorks"] = how
    rec["trigger"] = trigger
    rec["tags"] = tags
    rec["colors"] = colors
    if fonts:
        rec["fonts"] = fonts
    if is_tw:
        rec["tailwind"] = True
    elif "tailwind" in rec:
        del rec["tailwind"]
    rec["issues"] = issues
    stats = {
        "static_fixed": el.get("trigger") == "static" and trigger != "static",
        "placeholder_fixed": set(el.get("colors", [])) <= {"#ffffff", "#000000"} and not placeholder,
        "tailwind": is_tw,
        "no_css": not has_usable_css,
        "placeholder": placeholder,
        "trigger_changed": el.get("trigger") != trigger,
    }
    return rec, stats


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--category", default="")
    args = ap.parse_args()

    cats = [args.category] if args.category else CATEGORIES
    total = 0
    rewritten = 0
    static_fixed = 0
    placeholder_fixed = 0
    tailwind_count = 0
    no_css = []
    placeholder_left = 0
    trigger_counts = Counter()
    tag_counts = Counter()
    broken, empty, js_dep = [], [], []

    for cat in cats:
        cat_file = DATA / f"{cat}.json"
        data = json.loads(cat_file.read_text())
        elements = data["elements"]
        new_elements = []
        done = 0
        for el in elements:
            folder = UIVERSE / cat / el["id"]
            rec, st = enrich_element(cat, el, folder)
            new_elements.append(rec)
            total += 1
            done += 1
            if rec["description"] != el.get("description"):
                rewritten += 1
            if st["static_fixed"]:
                static_fixed += 1
            if st["placeholder_fixed"]:
                placeholder_fixed += 1
            if st["tailwind"]:
                tailwind_count += 1
            if st["no_css"]:
                no_css.append(f"uiverse/{cat}/{el['id']}/")
            if st["placeholder"]:
                placeholder_left += 1
            trigger_counts[rec["trigger"]] += 1
            for t in rec["tags"]:
                tag_counts[t] += 1
            if rec.get("needsJs"):
                js_dep.append(rec["path"])
            if "empty-body" in rec["issues"]:
                empty.append(rec["path"])
            if any(i in rec["issues"] for i in ("missing-index", "empty-body", "no-css")):
                broken.append((rec["path"], ",".join(rec["issues"])))
            if args.limit and done >= args.limit:
                # keep the rest untouched
                new_elements.extend(elements[done:])
                break
        data["elements"] = new_elements
        data["count"] = len(new_elements)
        cat_file.write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n")
        print(f"{cat}: {len(new_elements)} enriched")

    # manifest (only when processing all categories)
    if not args.category and not args.limit:
        manifest = {
            "generatedAt": datetime.now(timezone.utc).isoformat(),
            "total": total,
            "categories": [
                {"name": c,
                 "count": len(json.loads((DATA / f"{c}.json").read_text())["elements"]),
                 "file": f"data/{c}.json"} for c in CATEGORIES],
            "triggers": dict(trigger_counts.most_common()),
            "topTags": [{"tag": t, "count": n}
                        for t, n in tag_counts.most_common(30)],
            "issues": {"broken": len(broken), "empty": len(empty),
                       "jsDependent": len(js_dep),
                       "noUsableCss": len(no_css),
                       "placeholderColors": placeholder_left},
        }
        (DATA / "manifest.json").write_text(
            json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")

        lines = ["# Data Issues\n",
                 "Elements whose source has no usable CSS at all (empty "
                 "stylesheet, no `<style>` block, no Tailwind utilities and "
                 "no inline styles). These render as unstyled browser-default "
                 "markup. Counts in `data/manifest.json` are recomputed from "
                 "this same pass.\n",
                 f"Total elements checked: {total}. "
                 f"No usable CSS: {len(no_css)}. "
                 f"Still placeholder-only colours (#ffffff/#000000): {placeholder_left}.\n",
                 "## No usable CSS\n"]
        if no_css:
            for p in no_css:
                lines.append(f"- `{p}`")
        else:
            lines.append("None — every element has usable CSS.\n")
        lines.append("")
        lines.append("## Method\n")
        lines.append("- Colours are extracted from stylesheets, `<style>` blocks, "
                     "inline `style` attributes and Tailwind colour classes "
                     "(standard Tailwind v3 palette), with CSS variables resolved.")
        lines.append("- Trigger is re-detected from real CSS and Tailwind "
                     "pseudo variants (`hover:`, `focus:`, `checked:`, "
                     "`animate-*`): `:checked` → JS click → `:hover` → "
                     "`:focus` → infinite animation → `:active` → scroll, "
                     "with category fallbacks.")
        lines.append("- Descriptions (8–15 words) and “how it works” are "
                     "generated from the element's CSS: which property changes "
                     "on hover/click/focus/checked, and what the loop animation does.")
        (DOCS / "DATA-ISSUES.md").write_text("\n".join(lines))

    print(f"\ntotal: {total}")
    print(f"descriptions rewritten: {rewritten}")
    print(f"static fixed: {static_fixed}")
    print(f"placeholder colours fixed: {placeholder_fixed}")
    print(f"tailwind elements: {tailwind_count}")
    print(f"no usable CSS: {len(no_css)}")
    print(f"placeholder colours left: {placeholder_left}")
    print(f"triggers: {dict(trigger_counts)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

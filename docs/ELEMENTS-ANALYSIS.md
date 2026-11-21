# Elements Analysis

Generated 2026-11-21 from `uiverse/` — **3805 elements** in 11 categories. Every element folder was read (README, index.html, styles.css) and classified by trigger, tags, colors, and files present. Data files carry no code; see `data/manifest.json` and `data/<category>.json`.

## Counts per category

| Category | Elements |
| --- | ---: |
| buttons | 1232 |
| loaders | 718 |
| cards | 726 |
| toggle-switches | 260 |
| inputs | 226 |
| forms | 181 |
| checkboxes | 172 |
| patterns | 103 |
| radio-buttons | 102 |
| tooltips | 62 |
| notifications | 23 |
| **Total** | **3805** |

## Counts per trigger

| Trigger | Elements | What it means |
| --- | ---: | --- |
| hover | 1648 | reacts when the mouse is over it |
| auto-loop | 765 | animates on its own, continuously |
| static | 585 | no animation or interaction |
| checked | 572 | switches on/off when clicked (checkbox/radio) |
| focus | 178 | reacts when focused / clicked into |
| active | 53 | reacts while pressed down |
| scroll | 4 | reacts to page scrolling |
| click | 0 | reacts when clicked (JavaScript) — no element uses JS |

## Top tags

| Tag | Elements |
| --- | ---: |
| css | 1520 |
| hover | 1437 |
| button | 1100 |
| loader | 675 |
| auto-loop | 654 |
| card | 572 |
| static | 554 |
| checked | 467 |
| simple | 364 |
| animation | 345 |
| switch | 230 |
| toggle-switches | 223 |
| input | 206 |
| hover-effect | 191 |
| animated | 191 |
| checkbox | 177 |
| buttons | 172 |
| gradient | 162 |
| focus | 156 |
| cards | 152 |
| form | 133 |
| material-design | 115 |
| minimalist | 114 |
| 3d | 109 |
| neumorphism | 107 |
| icon | 102 |
| pattern | 102 |
| active | 95 |
| dark | 92 |
| radio | 91 |

## Broken elements

0 element(s) are missing `index.html`, have an empty body, or have no CSS at all.

None — every element has an `index.html` with content and CSS.


## Empty elements

0 element(s) have no files or an empty body.

None.


## JavaScript-dependent elements

0 element(s) contain a `<script>` or a `.js` file and need JavaScript to run.

None — every element is pure HTML + CSS.


## Method

- Trigger is detected from the element's CSS/HTML in this order: `:checked` → JS click handler → `:hover` → `:focus` → `infinite` animation → `:active` → scroll-driven → static, with category fallbacks (inputs → focus; checkboxes / radios / toggles → checked).
- Tags come from the element README's `Tags:` line, plus its category and trigger (3–6 tags each).
- Colors are the most frequent colors in the element's CSS (hex, rgb()/rgba(), and hsl() — including hsl() values set through CSS variables), white/black only used as fillers.
- Descriptions and “how it works” are one-sentence templates per category and trigger.
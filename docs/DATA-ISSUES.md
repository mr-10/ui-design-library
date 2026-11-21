# Data Issues

Elements whose source has no usable CSS at all (empty stylesheet, no `<style>` block, no Tailwind utilities and no inline styles). These render as unstyled browser-default markup. Counts in `data/manifest.json` are recomputed from this same pass.

Total elements checked: 3805. No usable CSS: 1. Still placeholder-only colours (#ffffff/#000000): 401.

## No usable CSS

- `uiverse/buttons/yellow-dolphin-39-by-kandalgaonkarshubham/`

## Method

- Colours are extracted from stylesheets, `<style>` blocks, inline `style` attributes and Tailwind colour classes (standard Tailwind v3 palette), with CSS variables resolved.
- Trigger is re-detected from real CSS and Tailwind pseudo variants (`hover:`, `focus:`, `checked:`, `animate-*`): `:checked` → JS click → `:hover` → `:focus` → infinite animation → `:active` → scroll, with category fallbacks.
- Descriptions (8–15 words) and “how it works” are generated from the element's CSS: which property changes on hover/click/focus/checked, and what the loop animation does.
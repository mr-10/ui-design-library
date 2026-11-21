# Fluffy Bear 71

A pattern UI element from Uiverse.io by BadlyWrittenStylesheet.

Source: https://uiverse.io/BadlyWrittenStylesheet/fluffy-bear-71

Author: BadlyWrittenStylesheet

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, gradient, modern, light&dark, clean, pattern

Colors: #000, #0000

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by BadlyWrittenStylesheet  - Tags: simple, gradient, modern, light&dark, clean, pattern */
.container {
  --bg: radial-gradient(#000 5%, #0000 6%);
  --size: 3rem;
  width: 100%;
  height: 100%;
  /* Add your background pattern here */
  /* background-color: lightblue; */
  background-image: radial-gradient(#000 5%, #0000 6%),
    radial-gradient(#000 5%, #0000 6%);
  background-position: 0 0, calc(var(--size) / 2) calc(var(--size) / 2);
  background-size: var(--size) var(--size);
}
```

# Serious Cobra 89

A pattern UI element from Uiverse.io by csemszepp.

Source: https://uiverse.io/csemszepp/serious-cobra-89

Author: csemszepp

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, minimalist, pattern

Colors: #0000, #366

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by csemszepp  - Tags: simple, minimalist, pattern */
.container {
  width: 100%;
  height: 100%;
  --s: 100px; /* control the size */

  --_g: #0000 90deg, #366 0;
  background: conic-gradient(from 90deg at 2px 2px, var(--_g)),
    conic-gradient(from 90deg at 1px 1px, var(--_g));
  background-size: var(--s) var(--s), calc(var(--s) / 5) calc(var(--s) / 5);
}
```

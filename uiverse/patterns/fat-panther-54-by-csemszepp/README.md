# Fat Panther 54

A pattern UI element from Uiverse.io by csemszepp.

Source: https://uiverse.io/csemszepp/fat-panther-54

Author: csemszepp

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, minimalist, pattern

Colors: #0000, #2fb8ac, #ecbe13

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
  --s: 37px; /* control the size */

  --c: #0000, #2fb8ac 0.5deg 119.5deg, #0000 120deg;
  --g1: conic-gradient(from 60deg at 56.25% calc(425% / 6), var(--c));
  --g2: conic-gradient(from 180deg at 43.75% calc(425% / 6), var(--c));
  --g3: conic-gradient(from -60deg at 50% calc(175% / 12), var(--c));
  background: var(--g1), var(--g1) var(--s) calc(1.73 * var(--s)), var(--g2),
    var(--g2) var(--s) calc(1.73 * var(--s)), var(--g3) var(--s) 0,
    var(--g3) 0 calc(1.73 * var(--s)) #ecbe13;
  background-size: calc(2 * var(--s)) calc(3.46 * var(--s));
}
```

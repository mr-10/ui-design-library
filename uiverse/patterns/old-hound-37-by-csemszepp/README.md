# Old Hound 37

A pattern UI element from Uiverse.io by csemszepp.

Source: https://uiverse.io/csemszepp/old-hound-37

Author: csemszepp

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, minimalist, pattern

Colors: #0000, #125c65, #bc4a33, #dc9d37, #fed450, #fff

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
  --s: 200px; /* control the size */

  --_g: #dc9d37 25%, #fed450 0 50%, #0000 0;
  --_l1: #fff 0 1px, #0000 0 calc(25% - 1px), #fff 0 25%;
  --_l2: #fff 0 1px, #0000 0 calc(50% - 1px), #fff 0 50%;
  background: repeating-linear-gradient(45deg, var(--_l1)),
    repeating-linear-gradient(-45deg, var(--_l1)),
    repeating-linear-gradient(0deg, var(--_l2)),
    repeating-linear-gradient(90deg, var(--_l2)),
    conic-gradient(from 135deg at 25% 75%, var(--_g)),
    conic-gradient(from 225deg at 25% 25%, var(--_g)),
    conic-gradient(from 45deg at 75% 75%, var(--_g)),
    conic-gradient(from -45deg at 75% 25%, var(--_g)),
    repeating-conic-gradient(#125c65 0 45deg, #bc4a33 0 90deg);
  background-size: var(--s) var(--s);
}
```

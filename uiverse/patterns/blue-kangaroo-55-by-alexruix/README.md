# Blue Kangaroo 55

A pattern UI element from Uiverse.io by alexruix.

Source: https://uiverse.io/alexruix/blue-kangaroo-55

Author: alexruix

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, green, arrow, pattern

Colors: #0000, #606c38, #fefae0

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by alexruix  - Tags: simple, green, arrow, pattern */
.container {
  width: 100%;
  height: 100%;
  /* Add your background pattern here */
  --size: 80px; /* control the size */
  --color: #fefae0;

  --l: var(--color) 20%, #0000 0;
  --bg: 35%, #606c38 0 45%, var(--color) 0;
  background: linear-gradient(45deg, var(--l) 45%, var(--color) 0 70%, #0000 0),
    linear-gradient(-45deg, var(--l) var(--bg) 70%, #0000 0),
    linear-gradient(45deg, var(--color) var(--bg));
  background-size: var(--size) var(--size);
}
```

# Stale Chicken 35

A pattern UI element from Uiverse.io by uiverse-astronaut.

Source: https://uiverse.io/uiverse-astronaut/stale-chicken-35

Author: uiverse-astronaut

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: pink, pattern, stripes

Colors: #e5e5f7, #faa7d8

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by uiverse-astronaut - Tags: pink, pattern, stripes */
.container {
  width: 100%;
  height: 100%;
  --color: #faa7d8;
  background: linear-gradient(45deg, var(--color) 25%, transparent 25%) -50px 0,
        linear-gradient(-45deg, var(--color) 25%, transparent 25%) -50px 0,
        linear-gradient(45deg, transparent 75%, var(--color) 75%) -50px 0,
        linear-gradient(-45deg, transparent 75%, var(--color) 75%) -50px 0;
  background-color: #e5e5f7;
  background-size: 10px 40px;
}
```

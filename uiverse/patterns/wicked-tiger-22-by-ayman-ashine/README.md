# Wicked Tiger 22

A pattern UI element from Uiverse.io by ayman-ashine.

Source: https://uiverse.io/ayman-ashine/wicked-tiger-22

Author: ayman-ashine

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: 3d, creative, pattern

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by ayman-ashine  - Tags: 3d, creative, pattern */
.container {
  width: 100%;
  height: 100%;
  /* Add your background pattern here */
  --color: rgb(255, 50, 50, 0.8);
  background-color: rgb(0, 0, 0);
  background-size: 40px 40px;
  background-image: linear-gradient(45deg, var(--color), transparent 40%),
    linear-gradient(-90deg, var(--color), transparent 20%);
}
```

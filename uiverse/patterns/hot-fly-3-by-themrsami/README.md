# Hot Fly 3

A pattern UI element from Uiverse.io by themrsami.

Source: https://uiverse.io/themrsami/hot-fly-3

Author: themrsami

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: material design, black, themrsami, pattern

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
/* From Uiverse.io by themrsami - Tags: material design, black, themrsami, pattern */
.container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, black 10%, transparent 10%);
  background-size: 30px 30px;
}
```

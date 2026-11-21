# Rare Cow 19

A pattern UI element from Uiverse.io by PriyanshuGupta28.

Source: https://uiverse.io/PriyanshuGupta28/rare-cow-19

Author: PriyanshuGupta28

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, pattern

Colors: #e74c3c, #f39c12

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by PriyanshuGupta28  - Tags: simple, material design, pattern */
.container {
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
      45deg,
      #e74c3c,
      #e74c3c 10px,
      transparent 10px,
      transparent 20px
    ),
    repeating-linear-gradient(
      -45deg,
      #f39c12,
      #f39c12 10px,
      transparent 10px,
      transparent 20px
    );
  background-size: 100% 100%, 100% 100%, 10px 10px, 10px 10px;
  background-position: center center, center center, center center,
    center center;
}
```

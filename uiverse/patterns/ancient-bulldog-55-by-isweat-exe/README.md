# Ancient Bulldog 55

A pattern UI element from Uiverse.io by iSweat-exe.

Source: https://uiverse.io/iSweat-exe/ancient-bulldog-55

Author: iSweat-exe

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: material design, glassmorphism, success, pattern, background, 3D

Colors: #0000, #474bff, #47d3ff, #adafff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by iSweat-exe  - Tags: material design, glassmorphism, success, pattern, background, 3D */
.container {
  width: 100%;
  height: 100%;
  /* Add your background pattern here */
  background: conic-gradient(at 50% 25%, #0000 75%, #47d3ff 0),
    conic-gradient(at 50% 25%, #0000 75%, #47d3ff 0) 60px 60px,
    conic-gradient(at 50% 25%, #0000 75%, #47d3ff 0) calc(2 * 60px)
      calc(2 * 60px),
    conic-gradient(at 50% 25%, #0000 75%, #47d3ff 0) calc(3 * 60px)
      calc(3 * 60px),
    repeating-linear-gradient(135deg, #adafff 0 12.5%, #474bff 0 25%);
  background-size: calc(4 * 60px) calc(4 * 60px);
}
```

# Fresh Cow 100

A pattern UI element from Uiverse.io by SmookyDev.

Source: https://uiverse.io/SmookyDev/fresh-cow-100

Author: SmookyDev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: glassmorphism, animation, transition, css, css effect, pattern

Colors: #753

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by SmookyDev  - Tags: glassmorphism, animation, transition, css, css effect, pattern */
.container {
  width: 100%;
  height: 100%;
  background: linear-gradient(
      45deg,
      white 12%,
      transparent 0,
      transparent 88%,
      wheat 0
    ),
    linear-gradient(135deg, transparent 37%, #753 0, #753 63%, transparent 0),
    linear-gradient(45deg, transparent 37%, white 0, white 63%, transparent 0)
      wheat;
  background-size: 80px 80px;
  animation: ani 10s linear infinite;
  position: relative;
  z-index: 10;
  overflow: hidden;
}
```

# Modern Skunk 55

A pattern UI element from Uiverse.io by Efrain2112.

Source: https://uiverse.io/Efrain2112/modern-skunk-55

Author: Efrain2112

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, white, pattern

Colors: #1111, #d1bdbd

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by Efrain2112  - Tags: simple, white, pattern */
.container {
  width: 100%;
  height: 100%;
  --size: 150px; /* control the size */
  --color: #d1bdbd;

  background: radial-gradient(
      circle at 15% 30%,
      transparent 40%,
      var(--color) 41%
    ),
    radial-gradient(circle at 85% 30%, transparent 40%, var(--color) 41%),
    radial-gradient(circle at 50% 70%, transparent 40%, var(--color) 41%),
    radial-gradient(circle at 15% 70%, transparent 40%, var(--color) 41%),
    radial-gradient(circle at 85% 70%, transparent 40%, var(--color) 41%),
    linear-gradient(
      45deg,
      var(--color) 25%,
      rgba(0, 0, 0, 0.067) 0,
      rgba(0, 0, 0, 0.067) 50%,
      var(--color) 0,
      var(--color) 75%,
      #1111 0,
      #1111 100%,
      var(--color) 0
    );
  background-size: var(--size) var(--size);
}
```

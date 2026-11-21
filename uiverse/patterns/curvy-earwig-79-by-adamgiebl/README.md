# Curvy Earwig 79

A pattern UI element from Uiverse.io by adamgiebl.

Source: https://uiverse.io/adamgiebl/curvy-earwig-79

Author: adamgiebl

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: grid, pattern, checkered, chess

Colors: #191a1a

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by adamgiebl - Tags: grid, pattern, checkered, chess */
.container {
  width: 100%;
  height: 100%;
  --color: rgba(114, 114, 114, 0.3);
  background-color: #191a1a;
  background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent),
      linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent);
  background-size: 50px 50px;
}
```

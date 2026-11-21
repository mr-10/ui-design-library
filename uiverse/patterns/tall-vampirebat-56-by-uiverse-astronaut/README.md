# Tall Vampirebat 56

A pattern UI element from Uiverse.io by uiverse-astronaut.

Source: https://uiverse.io/uiverse-astronaut/tall-vampirebat-56

Author: uiverse-astronaut

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: colorful, grid, pattern, checkered, boxes

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
/* From Uiverse.io by uiverse-astronaut - Tags: colorful, grid, pattern, checkered, boxes */
.container {
  width: 100%;
  height: 100%;
  --color1: rgb(108, 231, 221);
  --color2: rgb(250, 255, 178);
  background-color: var(--color1);
  background-image: linear-gradient(45deg, var(--color2) 25%, transparent 25%, transparent 75%, var(--color2) 75%, var(--color2)), 
                    linear-gradient(45deg, var(--color2) 25%, var(--color1) 25%, var(--color1) 75%, var(--color2) 75%, var(--color2));
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
}
```

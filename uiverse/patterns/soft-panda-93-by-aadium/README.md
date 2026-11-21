# Soft Panda 93

A pattern UI element from Uiverse.io by aadium.

Source: https://uiverse.io/aadium/soft-panda-93

Author: aadium

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: dual-tone, pattern, mosaic

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
/* From Uiverse.io by aadium - Tags: dual-tone, pattern, mosaic */
.container {
  --color1: rgb(0, 3, 49);
  --color2: rgb(248, 255, 182);
  width: 100%;
  height: 100%;
  background-image: linear-gradient(45deg, var(--color2) 25%, transparent 25%, transparent 75%, var(--color2) 75%, var(--color2)), 
                    linear-gradient(135deg, var(--color2) 25%, var(--color1) 25%, var(--color1) 75%, var(--color2) 75%, var(--color2));
  background-size: 90px 90px;
  background-position: 0 0, 135px 135px;
}
```

# Sour Earwig 21

A loader UI element from Uiverse.io by elijahgummer.

Source: https://uiverse.io/elijahgummer/sour-earwig-21

Author: elijahgummer

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, animation, green, loader, smooth, modern, animated, css

Colors: #43cb85

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<svg class="container"><rect class="boxes"></rect></svg>
```

### styles.css

```css
/* From Uiverse.io by elijahgummer  - Tags: simple, animation, green, loader, smooth, modern, animated, css */
.container {
  width: 50px;
  height: 50px;
}

.container .boxes {
  width: 50px;
  height: 50px;
  fill: none;
  stroke-width: 50px;
  stroke: #43cb85;
  stroke-dasharray: 50;
  stroke-dashoffset: 50%;
  animation: animate 2s linear infinite;
}

@keyframes animate {
  to {
    stroke-dashoffset: 250%;
  }
}
```

# Curly Monkey 15

A loader UI element from Uiverse.io by JaydipPrajapati1910.

Source: https://uiverse.io/JaydipPrajapati1910/curly-monkey-15

Author: JaydipPrajapati1910

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, loader, infinite

Colors: #0000, #766df4

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by JaydipPrajapati1910 - Tags: animation, loader, infinite */
.loader {
  width: calc(160px / 0.707);
  height: 28px;
  background: repeating-linear-gradient(-45deg, #766DF4 0 30px,#0000 0 40px) left/200% 100%;
  animation: i3 2s infinite linear;
  border-radius: 10px;
  border: 1px solid #766DF4;
}

@keyframes i3 {
  100% {
    background-position: right
  }
}
```

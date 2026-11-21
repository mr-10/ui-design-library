# Witty Robin 88

A loader UI element from Uiverse.io by Bodyhc.

Source: https://uiverse.io/Bodyhc/witty-robin-88

Author: Bodyhc

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, car loader, 3d loader, 3d cude loader

Colors: #0000, #766df4

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Bodyhc - Tags: loader, car loader, 3d loader, 3d cude loader */
.loader {
  width: calc(90px / 0.707);
  height: 20px;
  background: repeating-linear-gradient(135deg, #766DF4 0 15px,#0000 0 20px) left top,
    repeating-linear-gradient( 45deg, #766DF4 0 15px,#0000 0 20px) left bottom;
  background-size: 300% 50%;
  background-repeat: no-repeat;
  animation: i4 2s infinite linear;
}

@keyframes i4 {
  100% {
    background-position: top right,bottom right
  }
}
```

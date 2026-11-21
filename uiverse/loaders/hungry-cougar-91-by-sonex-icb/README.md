# Hungry Cougar 91

A loader UI element from Uiverse.io by sonex-ICB.

Source: https://uiverse.io/sonex-ICB/hungry-cougar-91

Author: sonex-ICB

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, animation, loader, rotate, animated, creative, spin, loading animation

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by sonex-ICB  - Tags: simple, animation, loader, rotate, animated, creative, spin, loading animation */
.loader {
  border: 10px inset tomato;
  padding: 12px;
  transform: rotate(45deg);
  animation: loader1 1s ease-in-out infinite;
}
@keyframes loader1 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
  100% {
    opacity: 0;
  }
}
```

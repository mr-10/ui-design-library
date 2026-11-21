# Tough Seahorse 89

A loader UI element from Uiverse.io by adilsarfraz02.

Source: https://uiverse.io/adilsarfraz02/tough-seahorse-89

Author: adilsarfraz02

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, spinner, smooth, custom, transition, effect loader, loading animation

Colors: #0000, #f000b4

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="custom-loader"></div>
```

### styles.css

```css
/* From Uiverse.io by adilsarfraz02  - Tags: loader, spinner, smooth, custom, transition, effect loader, loading animation */
.custom-loader {
  width: 40px;
  height: 10px;
  color: #f000b4;
  background: radial-gradient(farthest-side, currentColor 90%, #0000) left /
      10px 10px,
    radial-gradient(farthest-side, currentColor 90%, #0000) center/10px 10px,
    radial-gradient(farthest-side, currentColor 90%, #0000) right / 10px 10px,
    linear-gradient(currentColor 0 0) center/100% 4px;
  background-repeat: no-repeat;
  position: relative;
  animation: s6 2s infinite linear;
}
.custom-loader:before,
.custom-loader:after {
  content: "";
  position: absolute;
  inset: 0;
  background: inherit;
  animation: inherit;
  --s: calc(50% - 5px);
  animation-direction: reverse;
}
.custom-loader:after {
  --s: calc(5px - 50%);
}

@keyframes s6 {
  0% {
    transform: translate(var(--s, 0)) rotate(0);
  }
  100% {
    transform: translate(var(--s, 0)) rotate(1turn);
  }
}
```

# Friendly Donkey 60

A loader UI element from Uiverse.io by preshpi.

Source: https://uiverse.io/preshpi/friendly-donkey-60

Author: preshpi

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, spinner, css

Colors: #0000, #474bff, #dbdcef

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="spinner"></div>
```

### styles.css

```css
/* From Uiverse.io by preshpi  - Website: https://10015.io/tools/css-loader-generator - Name: 10015 - Tags: loader, spinner, css */
.spinner {
  width: 46px;
  height: 46px;
  display: grid;
  animation: spinner-plncf9 3s infinite;
}

.spinner::before,
.spinner::after {
  content: "";
  grid-area: 1/1;
  border: 9px solid;
  border-radius: 50%;
  border-color: #474bff #474bff #0000 #0000;
  mix-blend-mode: darken;
  animation: spinner-plncf9 1s infinite linear;
}

.spinner::after {
  border-color: #0000 #0000 #dbdcef #dbdcef;
  animation-direction: reverse;
}

@keyframes spinner-plncf9 {
  100% {
    transform: rotate(1turn);
  }
}
```

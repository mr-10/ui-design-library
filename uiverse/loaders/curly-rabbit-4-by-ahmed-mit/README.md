# Curly Rabbit 4

A loader UI element from Uiverse.io by AHMED-MIT.

Source: https://uiverse.io/AHMED-MIT/curly-rabbit-4

Author: AHMED-MIT

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

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
/* From Uiverse.io by AHMED-MIT - Tags: loader */
.spinner {
  width: 56px;
  height: 56px;
  display: grid;
  border: 4.5px solid #0000;
  border-radius: 50%;
  border-color: #dbdcef #0000;
  animation: spinner-e04l1k 1s infinite linear;
}

.spinner::before,
.spinner::after {
  content: "";
  grid-area: 1/1;
  margin: 2.2px;
  border: inherit;
  border-radius: 50%;
}

.spinner::before {
  border-color: #474bff #0000;
  animation: inherit;
  animation-duration: 0.5s;
  animation-direction: reverse;
}

.spinner::after {
  margin: 8.9px;
}

@keyframes spinner-e04l1k {
  100% {
    transform: rotate(1turn);
  }
}
```

# Dry Wolverine 85

A loader UI element from Uiverse.io by AHMED-MIT.

Source: https://uiverse.io/AHMED-MIT/dry-wolverine-85

Author: AHMED-MIT

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, accept, account

Colors: #474bff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by AHMED-MIT - Tags: loader, accept, account */
.spinner {
  position: relative;
  width: 33.6px;
  height: 33.6px;
  perspective: 67.2px;
}

.spinner div {
  width: 100%;
  height: 100%;
  background: #474bff;
  position: absolute;
  left: 50%;
  transform-origin: left;
  animation: spinner-16s03x 2s infinite;
}

.spinner div:nth-child(1) {
  animation-delay: 0.15s;
}

.spinner div:nth-child(2) {
  animation-delay: 0.3s;
}

.spinner div:nth-child(3) {
  animation-delay: 0.45s;
}

.spinner div:nth-child(4) {
  animation-delay: 0.6s;
}

.spinner div:nth-child(5) {
  animation-delay: 0.75s;
}

@keyframes spinner-16s03x {
  0% {
    transform: rotateY(0deg);
  }

  50%, 80% {
    transform: rotateY(-180deg);
  }

  90%, 100% {
    opacity: 0;
    transform: rotateY(-180deg);
  }
}
```

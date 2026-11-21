# Modern Quail 99

A loader UI element from Uiverse.io by jack0237.

Source: https://uiverse.io/jack0237/modern-quail-99

Author: jack0237

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: —

Colors: #16b0c1, #661e92, #e8e8e8

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by jack0237  - Tags:  */
.loader {
  display: flex;
}

.loader .dot {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 2px solid #e8e8e8;
  background: #16b0c1;
  animation: jump 0.8s ease-in-out infinite alternate;
}

@keyframes jump {
  100% {
    background: #661e92;
    transform: translateY(-3rem) scale(1.9);
  }
}

.loader .dot:nth-child(1) {
  animation-delay: 0.1s;
}

.loader .dot:nth-child(2) {
  animation-delay: 0.2s;
}

.loader .dot:nth-child(3) {
  animation-delay: 0.3s;
}

.loader .dot:nth-child(4) {
  animation-delay: 0.4s;
}

.loader .dot:nth-child(5) {
  animation-delay: 0.5s;
}
```

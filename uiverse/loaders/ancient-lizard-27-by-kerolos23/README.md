# Ancient Lizard 27

A loader UI element from Uiverse.io by kerolos23.

Source: https://uiverse.io/kerolos23/ancient-lizard-27

Author: kerolos23

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #c517f0

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by kerolos23 - Tags: loader */
.loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.loader div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #c517f0;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.loader div:nth-child(1) {
  left: 8px;
  animation: flip1 0.6s infinite;
}

.loader div:nth-child(2) {
  left: 8px;
  animation: flip2 0.6s infinite;
}

.loader div:nth-child(3) {
  left: 32px;
  animation: flip2 0.6s infinite;
}

.loader div:nth-child(4) {
  left: 56px;
  animation: flip3 0.6s infinite;
}

@keyframes flip1 {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes flip3 {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}

@keyframes flip2 {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(24px, 0);
  }
}
```

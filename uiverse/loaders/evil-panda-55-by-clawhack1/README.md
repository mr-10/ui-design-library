# Evil Panda 55

A loader UI element from Uiverse.io by ClawHack1.

Source: https://uiverse.io/ClawHack1/evil-panda-55

Author: ClawHack1

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #007aff, #34c759, #ff2d55, #ff9500

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader">
  <div class="loader__circle"></div>
  <div class="loader__circle"></div>
  <div class="loader__circle"></div>
  <div class="loader__circle"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by ClawHack1 - Tags: loader */
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.loader__circle {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin: 0 4px;
  animation: loader_901 1s ease-in-out infinite;
}

.loader__circle:nth-of-type(1) {
  background-color: #007aff;
  animation-delay: 0;
}

.loader__circle:nth-of-type(2) {
  background-color: #ff2d55;
  animation-delay: 0.25s;
}

.loader__circle:nth-of-type(3) {
  background-color: #34c759;
  animation-delay: 0.5s;
}

.loader__circle:nth-of-type(4) {
  background-color: #ff9500;
  animation-delay: 0.75s;
}

@keyframes loader_901 {
  0% {
    transform: scale(1);
  }

  20% {
    transform: scale(1.2);
  }

  40% {
    transform: scale(1);
  }
}
```

# Terrible Dingo 32

A loader UI element from Uiverse.io by SouravBandyopadhyay.

Source: https://uiverse.io/SouravBandyopadhyay/terrible-dingo-32

Author: SouravBandyopadhyay

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, spinner, colorful

Colors: #00bfff, #80ff00, #ff0080, #ffbf00

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader">
  <div class="circle outer"></div>
  <div class="circle inner"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by SouravBandyopadhyay - Tags: loader, spinner, colorful */
.loader {
  width: 8em;
  height: 4em;
  position: relative;
  margin: 0 auto;
}

.circle {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  border: 0.4em solid transparent;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.outer {
  border-top-color: #ff0080;
  border-right-color: #ffbf00;
  border-bottom-color: #00bfff;
  border-left-color: #80ff00;
  animation-name: rotate-outer;
}

.inner {
  border-top-color: #80ff00;
  border-right-color: #00bfff;
  border-bottom-color: #ffbf00;
  border-left-color: #ff0080;
  animation-name: rotate-inner;
}

@keyframes rotate-outer {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate-inner {
  0% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0);
  }
}
```

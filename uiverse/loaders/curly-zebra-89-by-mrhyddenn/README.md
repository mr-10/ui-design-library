# Curly Zebra 89

A loader UI element from Uiverse.io by mrhyddenn.

Source: https://uiverse.io/mrhyddenn/curly-zebra-89

Author: mrhyddenn

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #d1d1d1, #fff, #ffffff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader loader_bubble"></div>
```

### styles.css

```css
/* From Uiverse.io by mrhyddenn - Tags: loader */
.loader {
  position: relative;
  display: block;
  width: 44px;
  height: 44px;
  font-size: 15px;
  box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
}

.loader::before,
.loader::after {
  content: '';
  position: absolute;
  display: block;
}

.loader_bubble::before {
  top: 10px;
  left: 10px;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
}

.loader_bubble {
  background: linear-gradient(180deg, rgb(0, 91, 228) 10%, rgb(75, 127, 240) 100%);
  border-radius: 50%;
  transform-origin: 50% 50%;
  animation: bubble7234 1200ms cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
}

@keyframes bubble7234 {
  0% {
    transform: translate3d(0,0,0) rotate(0);
  }

  100% {
    transform: translate3d(0,0,0) rotate(360deg);
  }
}
```

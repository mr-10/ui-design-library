# Moody Mole 33

A loader UI element from Uiverse.io by vikramsinghnegi.

Source: https://uiverse.io/vikramsinghnegi/moody-mole-33

Author: vikramsinghnegi

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, heart, smooth

Colors: #0004

Fonts: See styles.css

Spacing and radius: 50px 50px 0 0

## Source Code

### index.html

```html
<span class="loader"></span>
```

### styles.css

```css
/* From Uiverse.io by vikramsinghnegi  - Tags: loader, heart, smooth */
.loader {
  position: relative;
  width: 40px;
  height: 60px;
  animation: heartBeat 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}

.loader:before,
.loader:after {
  content: "";
  background: red;
  width: 40px;
  height: 60px;
  border-radius: 50px 50px 0 0;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: rotate(45deg);
  transform-origin: 50% 68%;
  box-shadow: 5px 4px 5px #0004 inset;
}
.loader:after {
  transform: rotate(-45deg);
}
@keyframes heartBeat {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}
```

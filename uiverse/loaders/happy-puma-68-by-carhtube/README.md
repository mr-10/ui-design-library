# Happy Puma 68

A loader UI element from Uiverse.io by carhtube.

Source: https://uiverse.io/carhtube/happy-puma-68

Author: carhtube

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, loading, loader, circle loader, click animation, effect loader, bounce animation, 3d loader

Colors: #00aaff, #2cc92c, #6f22ff

Fonts: See styles.css

Spacing and radius: 50%, 5px

## Source Code

### index.html

```html
<div class="loader">
  <div class="worm"></div>
  <div class="circleMiddle"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by carhtube  - Tags: animation, loading, loader, circle loader, click animation, effect loader, bounce animation, 3d loader */
.loader {
  background: linear-gradient(
    90deg,
    #6f22ff,
    #00aaff,
    #2cc92c,
    #00aaff,
    #6f22ff
  );
  background-size: 600% 600%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: neonRotate 10s linear infinite;
  position: relative;
}
.circleMiddle {
  background-color: rgb(255, 255, 255);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  z-index: 99;
}
.worm {
  position: absolute;
  width: 20px;
  height: 105px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 5px;
  animation: rotateWorm 4s linear infinite;
  z-index: 80;
}
@keyframes neonRotate {
  0%,
  100% {
    background-position: 0% 0%;
  }
  25%,
  75% {
    background-position: 100% 0%;
  }
  50% {
    background-position: 0% 100%;
  }
}
@keyframes rotateWorm {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

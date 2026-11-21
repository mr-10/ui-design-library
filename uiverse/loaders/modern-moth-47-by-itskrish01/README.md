# Modern Moth 47

A loader UI element from Uiverse.io by Itskrish01.

Source: https://uiverse.io/Itskrish01/modern-moth-47

Author: Itskrish01

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #ff4c5a

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader">
  <div class="pattern-1">
    <div class="pattern-1-shade"></div>
  </div>
  <div class="pattern-2"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Itskrish01  - Tags: loader */
.loader {
  position: relative;
  width: 200px;
  height: 200px;
}

.loader .pattern-1 {
  position: absolute;
  background-color: #ff4c5a;
  width: 200px;
  height: 200px;
  clip-path: polygon(0 10%, 70% 90%, 40% 90%, 0 45%);
}

.loader .pattern-2 {
  position: absolute;
  background-color: #ff4c5a;
  width: 220px;
  height: 190px;
  clip-path: polygon(100% 10%, 100% 45%, 83% 65%, 55% 65%);
}

.loader .pattern-1 .pattern-1-shade {
  position: absolute;
  transform: translateX(-20px);
  opacity: 0.7;
  z-index: 10;
  background-color: white;
  width: 20px;
  height: 200px;
  animation: shiny 1s infinite;
}

@keyframes shiny {
  0% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(140px);
  }
}
```

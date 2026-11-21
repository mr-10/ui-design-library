# Fast Bear 60

A loader UI element from Uiverse.io by mrhyddenn.

Source: https://uiverse.io/mrhyddenn/fast-bear-60

Author: mrhyddenn

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="mover"></div>
```

### styles.css

```css
/* From Uiverse.io by mrhyddenn - Tags: loader */
.mover {
  background: rgba(248, 25, 25, 0.979);
  height: 10px;
  width: 80px;
  border-radius: 10px;
  position: relative;
  animation: mover5 2s ease-in-out infinite;
}

.mover::before,
.mover::after {
  content: '';
  position: absolute;
  height: 10px;
  border-radius: 10px;
  left: 20px;
  animation: mover5 2s ease-in-out infinite;
}

.mover::before {
  background: rgb(201, 1, 1);
  top: 20px;
  width: 50px;
}

.mover::after {
  background: rgb(255, 116, 106);
  top: -20px;
  width: 60px;
}

@keyframes mover5 {
  0% {
    transform: translateX(30px) scale(1);
  }

  50% {
    transform: translateX(-30px) scale(1.1);
  }

  100% {
    transform: translateX(30px) scale(1);
  }
}
```

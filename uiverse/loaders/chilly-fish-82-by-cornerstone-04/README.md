# Chilly Fish 82

A loader UI element from Uiverse.io by Cornerstone-04.

Source: https://uiverse.io/Cornerstone-04/chilly-fish-82

Author: Cornerstone-04

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #75e2ff, #ff8496

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Cornerstone-04 - Tags: loader */
.loader {
  width: 50px;
  height: 50px;
  position: relative;
  z-index: 1;
  transform: translateX(-50%);
}

.loader::before, 
.loader::after {
  content: '';
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: 50%;
  mix-blend-mode: multiply;
  animation: rotate92523 2s infinite cubic-bezier(0.77, 0, 0.175, 1);
}

.loader::before {
  background-color: #75e2ff;
}

.loader::after {
  background-color: #ff8496;
  animation-delay: 1s;
}

@keyframes rotate92523 {
  0%, 100% {
    left: 35px;
  }

  25% {
    transform: scale(.3);
  }

  50% {
    left: 0%;
  }

  75% {
    transform: scale(1);
  }
}
```

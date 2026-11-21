# Lucky Cobra 80

A loader UI element from Uiverse.io by Ankesh2002.

Source: https://uiverse.io/Ankesh2002/lucky-cobra-80

Author: Ankesh2002

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #00bd26

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Ankesh2002 - Tags: loader */
.loader {
  position: relative;
  width: 164px;
  height: 164px;
}

.loader::before , .loader::after {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #00bd26;
  left: 50%;
  top: 50%;
  animation: rotate 1s ease-in infinite;
}

.loader::after {
  width: 20px;
  height: 20px;
  background-color: #00bd26;
  animation: rotate 1s ease-in infinite, moveY 1s ease-in infinite;
}

@keyframes moveY {
  0% , 100% {
    top: 10%
  }

  45% , 55% {
    top: 59%
  }

  60% {
    top: 40%
  }
}

@keyframes rotate {
  0% {
    transform: translate(-50%, -100%) rotate(0deg) scale(1 , 1)
  }

  25% {
    transform: translate(-50%, 0%) rotate(180deg) scale(1 , 1)
  }

  45% , 55% {
    transform: translate(-50%, 100%) rotate(180deg) scale(3 , 0.5)
  }

  60% {
    transform: translate(-50%, 100%) rotate(180deg) scale(1, 1)
  }

  75% {
    transform: translate(-50%, 0%) rotate(270deg) scale(1 , 1)
  }

  100% {
    transform: translate(-50%, -100%) rotate(360deg) scale(1 , 1)
  }
}
```

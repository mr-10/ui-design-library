# Empty Fish 42

A loader UI element from Uiverse.io by FWDJc.

Source: https://uiverse.io/FWDJc/empty-fish-42

Author: FWDJc

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, animation, loader, heart, bounce animation, css animation

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 5em 5em 0 0

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by FWDJc - Tags: simple, animation, loader, heart, bounce animation, css animation */
.loader {
  width: 7em;
  height: 5em;
  position: relative;
  animation: beat 1s infinite;
}

.loader::before,
.loader::after {
  content: "";
  position: absolute;
  top: 0;
  width: 50px;
  height: 80px;
  border-radius: 5em 5em 0 0;
  animation: coldblue 1s infinite;
}

.loader::before {
  left: 50px;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}

.loader::after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}

@keyframes beat {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes coldblue {
  0%, 100% {
    background-color: rgb(255, 255, 255);
  }

  50% {
    background-color: rgb(91, 91, 241);
  }
}
```

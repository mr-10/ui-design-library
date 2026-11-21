# Polite Bat 25

A loader UI element from Uiverse.io by Gautammsharma.

Source: https://uiverse.io/Gautammsharma/polite-bat-25

Author: Gautammsharma

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader-container">
  <div class="loader"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Gautammsharma - Tags: loader */
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20em;
}

.loader {
  position: relative;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background-color: rgb(208, 208, 208);
  box-shadow: 0 0em 4em rgba(23, 190, 250, 0.5);
  animation: loader-rotate 1s linear infinite;
}

.loader::before,
.loader::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1em solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.loader::before {
  animation: loader-pulse 1s ease-out infinite;
}

.loader::after {
  animation: loader-pulse 1s ease-out infinite 0.5s;
}

@keyframes loader-rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```

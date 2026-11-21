# Unlucky Wolverine 27

A loader UI element from Uiverse.io by JaydipPrajapati1910.

Source: https://uiverse.io/JaydipPrajapati1910/unlucky-wolverine-27

Author: JaydipPrajapati1910

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: green, loader, circle loader, loader circle

Colors: #2cc16f, #fafafa

Fonts: See styles.css

Spacing and radius: 100%, 100% 0 0 100% / 50% 0 0 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by JaydipPrajapati1910 - Tags: green, loader, circle loader, loader circle */
.loader {
  background: linear-gradient(to right, #2cc16f 50%, #fafafa 50%);
  border-radius: 100%;
  height: 70px;
  width: 70px;
  animation: loader-circle-time 8s steps(800, start) infinite;
}

.loader:after {
  content: "";
  border-radius: 100% 0 0 100% / 50% 0 0 50%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 50%;
  animation: loader-circle-mask 8s steps(250, start) infinite;
  transform-origin: 100% 50%;
}

@keyframes loader-circle-time {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-circle-mask {
  0% {
    background: #fafafa;
    transform: rotate(0deg);
  }

  50% {
    background: #fafafa;
    transform: rotate(-180deg);
  }

  50.01% {
    background: #2cc16f;
    transform: rotate(0deg);
  }

  100% {
    background: #2cc16f;
    transform: rotate(-180deg);
  }
}
```

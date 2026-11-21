# Green Insect 40

A loader UI element from Uiverse.io by MbaziiraRonald.

Source: https://uiverse.io/MbaziiraRonald/green-insect-40

Author: MbaziiraRonald

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by MbaziiraRonald - Tags: loader */
.loader {
  height: 50px;
  width: 50px;
  background: transparent;
  border: red 3px solid;
  border-top: transparent;
  border-radius: 50%;
  animation: animate81323 0.8s linear infinite;
}

@keyframes animate81323 {
  0% {
    border: 3px solid rgb(255, 75, 75);
    border-top: transparent;
    border-left: transparent;
    transform: rotate(0deg);
  }

  50% {
    border: 3px dashed rgb(240, 41, 240);
    border-top: transparent;
    border-left: transparent;
    transform: rotate(270deg);
  }

  100% {
    border: 3px dotted rgb(28, 228, 28);
    border-top: transparent;
    border-left: transparent;
    transform: rotate(360deg);
  }
}
```

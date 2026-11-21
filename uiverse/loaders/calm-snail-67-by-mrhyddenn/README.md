# Calm Snail 67

A loader UI element from Uiverse.io by mrhyddenn.

Source: https://uiverse.io/mrhyddenn/calm-snail-67

Author: mrhyddenn

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, spinner

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
/* From Uiverse.io by mrhyddenn - Tags: loader, spinner */
.loader {
  width: 50px;
  height: 50px;
  display: inline-block;
  border: 5px solid rgb(255, 17, 0);
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: rot5 1s infinite;
}

@keyframes rot5 {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(180deg);
    border-top-color: rgb(139, 46, 46);
    border-bottom-color: rgb(243, 92, 33);
    border-right-color: transparent;
    border-left-color: transparent;
  }

  100% {
    transform: rotate(360deg);
  }
}
```

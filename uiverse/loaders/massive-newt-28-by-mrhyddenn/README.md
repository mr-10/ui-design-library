# Massive Newt 28

A loader UI element from Uiverse.io by mrhyddenn.

Source: https://uiverse.io/mrhyddenn/massive-newt-28

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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid rgb(255,255,255,.2);
  border-top-color: transparent;
  animation: rot1 1.2s linear infinite;
}

@keyframes rot1 {
  to {
    transform: rotate(360deg);
  }
}
```

# Cowardly Ladybug 61

A loader UI element from Uiverse.io by mrhyddenn.

Source: https://uiverse.io/mrhyddenn/cowardly-ladybug-61

Author: mrhyddenn

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
/* From Uiverse.io by mrhyddenn - Tags: loader */
.loader {
  width: 50px;
  height: 50px;
  border: 5px solid rgb(0,0,0,0.11);
  border-radius: 50%;
  border-top-color: rgb(235, 169, 47);
  border-left-color: rgb(43, 145, 87);
  border-right-color: rgb(20, 102, 226);
  border-bottom-color: rgb(224, 71, 71);
  animation: loader1776 2s linear infinite;
}

@keyframes loader1776 {
  to {
    transform: rotate(360deg);
  }
}
```

# Massive Impala 29

A loader UI element from Uiverse.io by Cornerstone-04.

Source: https://uiverse.io/Cornerstone-04/massive-impala-29

Author: Cornerstone-04

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #1cd425, #1cd42550

Fonts: See styles.css

Spacing and radius: 100%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Cornerstone-04 - Tags: loader */
.loader {
  width: 60px;
  height: 60px;
  border: 10px solid #1cd42550;
  border-top-color: #1cd425;
  animation: spin013151 1s linear infinite;
  border-radius: 100%;
}

@keyframes spin013151 {
  to {
    transform: rotate(360deg);
  }
}
```

# Afraid Stingray 62

A loader UI element from Uiverse.io by eslam-hany.

Source: https://uiverse.io/eslam-hany/afraid-stingray-62

Author: eslam-hany

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, circle loader

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
/* From Uiverse.io by eslam-hany - Tags: loader, circle loader */
.loader {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  animation: rotate 2.0s infinite linear;
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}
```

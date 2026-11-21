# Stupid Starfish 42

A loader UI element from Uiverse.io by dhruv465.

Source: https://uiverse.io/dhruv465/stupid-starfish-42

Author: dhruv465

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, animated, circle loader

Colors: #3498db, #f3f3f3

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by dhruv465 - Tags: loader, animated, circle loader */
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

/* Add some glow effect */
.loader::after {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  box-shadow: inset 0px 0px 20px #3498db;
}

/* Rotate the circle */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
```

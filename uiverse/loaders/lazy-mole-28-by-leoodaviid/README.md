# Lazy Mole 28

A loader UI element from Uiverse.io by Leoodaviid.

Source: https://uiverse.io/Leoodaviid/lazy-mole-28

Author: Leoodaviid

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
/* From Uiverse.io by Leoodaviid - Tags: loader */
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
    box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.4);
  }

  50% {
    transform: rotate(180deg);
    box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.4);
  }

  100% {
    transform: rotate(360deg);
    box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.4);
  }
}
```

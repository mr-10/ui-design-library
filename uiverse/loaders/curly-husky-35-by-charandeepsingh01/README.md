# Curly Husky 35

A loader UI element from Uiverse.io by CharandeepSingh01.

Source: https://uiverse.io/CharandeepSingh01/curly-husky-35

Author: CharandeepSingh01

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loading, loader, loading animation, 3d loader

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
/* From Uiverse.io by CharandeepSingh01 - Tags: loading, loader, loading animation, 3d loader */
/*View in dark mode for good effects*/
.loader {
  border: 4px solid red;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-right-color: transparent;
  animation: rot 1s linear infinite;
  box-shadow: 0px 0px 20px red inset;
}

@keyframes rot {
  100% {
    transform: rotate(360deg);
  }
}
```

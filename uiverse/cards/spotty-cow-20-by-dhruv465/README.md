# Spotty Cow 20

A card UI element from Uiverse.io by dhruv465.

Source: https://uiverse.io/dhruv465/spotty-cow-20

Author: dhruv465

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animated, spin, loader circle

Colors: #8c8eff, #fff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="one-div"></div>
```

### styles.css

```css
/* From Uiverse.io by dhruv465 - Tags: animated, spin, loader circle */
.one-div {
  width: 40px;
  height: 40px;
  border: 8px solid #fff;
  border-top-color: #8c8eff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
```

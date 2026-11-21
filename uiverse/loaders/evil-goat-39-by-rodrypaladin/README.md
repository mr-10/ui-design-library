# Evil Goat 39

A loader UI element from Uiverse.io by Rodrypaladin.

Source: https://uiverse.io/Rodrypaladin/evil-goat-39

Author: Rodrypaladin

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, red, loading, loader, modern, creative, multicolor, bounce animation

Colors: #ff5500, #ff6600, #ff9100, #ffa600, #ffcc00

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Rodrypaladin - Tags: animation, red, loading, loader, modern, creative, multicolor, bounce animation */
.loader {
  width: 100px;
  height: 100px;
  background-color: orange;
  border-radius: 50%;
  box-shadow: -15px -15px 15px #ff6600, 15px -15px 15px #ff9100, 15px 15px 15px #ff5500, -15px 15px 15px #ffa600, -15px 0 15px #ff6600, 15px 0 15px #ffcc00;
  animation: rotate 1s infinite;
  transform: rotate(0) scale(0.8);
}

@keyframes rotate {
  0% {
    transform: rotate(360deg) scale(0.8);
  }

  50% {
    transform: rotate(0) scale(1.2);
  }
}
```

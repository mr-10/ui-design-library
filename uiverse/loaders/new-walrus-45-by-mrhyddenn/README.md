# New Walrus 45

A loader UI element from Uiverse.io by mrhyddenn.

Source: https://uiverse.io/mrhyddenn/new-walrus-45

Author: mrhyddenn

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, loader

Colors: #444, #6359f8, #9c32e2, #f36896, #ff0b0b, #ff5500, #ff9500, #ffb700

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="spinner">
    <div class="spinnerin"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by mrhyddenn - Tags: gradient, loader */
.spinner {
  width: 3em;
  height: 3em;
  cursor: not-allowed;
  border-radius: 50%;
  border: 2px solid #444;
  box-shadow: -10px -10px 10px #6359f8, 0px -10px 10px 0px #9c32e2, 10px -10px 10px #f36896, 10px 0 10px #ff0b0b, 10px 10px 10px 0px#ff5500, 0 10px 10px 0px #ff9500, -10px 10px 10px 0px #ffb700;
  animation: rot55 0.7s linear infinite;
}

.spinnerin {
  border: 2px solid #444;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes rot55 {
  to {
    transform: rotate(360deg);
  }
}
```

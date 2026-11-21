# Plastic Panther 51

A loader UI element from Uiverse.io by mrhyddenn.

Source: https://uiverse.io/mrhyddenn/plastic-panther-51

Author: mrhyddenn

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, loader, spinner

Colors: #222, #333399, #ff00cc

Fonts: See styles.css

Spacing and radius: 50%, inherit

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by mrhyddenn - Tags: gradient, loader, spinner */
.loader {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.loader::before,
.loader::after {
  content: "";
  position: absolute;
  border-radius: inherit;
}

.loader::before {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, #ff00cc 0%, #333399 100%);
  animation: load012323 .5s infinite linear;
}

.loader::after {
  width: 85%;
  height: 85%;
  background-color: #222;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes load012323 {
  to {
    transform: rotate(360deg);
  }
}
```

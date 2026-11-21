# Bright Lion 66

A loader UI element from Uiverse.io by aadium.

Source: https://uiverse.io/aadium/bright-lion-66

Author: aadium

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, glow, neon

Colors: #212121, #4cffb4, #7fe8ff, #99ff33

Fonts: See styles.css

Spacing and radius: 7em

## Source Code

### index.html

```html
<div class="loader">
  <div class="cover"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by aadium - Tags: loader, glow, neon */
.loader {
  width: 100px;
  height: 100px;
  background-image: #212121;
  box-shadow: 0px 5px 10px #7fe8ff, 0px -5px 10px #99ff33, 5px 0px 10px#4cffb4, -5px 0px 10px #4cffb4,
  inset 0px 5px 10px #99ff33, inset 0px -5px 10px #7fe8ff, inset 5px 0px 10px#4cffb4, inset -5px 0px 10px #4cffb4;
  border-radius: 7em;
  position: relative;
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
```

# Shy Yak 36

A loader UI element from Uiverse.io by tilakjain123.

Source: https://uiverse.io/tilakjain123/shy-yak-36

Author: tilakjain123

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #454ade

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader">
    <div></div>

    <div></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by tilakjain123 - Tags: loader */
.loader {
  position: relative;
  width: 64px;
  height: 64px;
}

.loader div {
  position: absolute;
  border: 4px solid #454ade;
  border-radius: 50%;
  animation: loader8435 1s ease-out infinite;
}

.loader div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes loader8435 {
  0% {
    top: 32px;
    left: 32px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    opacity: 0;
  }
}
```

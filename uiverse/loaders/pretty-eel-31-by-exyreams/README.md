# Pretty Eel 31

A loader UI element from Uiverse.io by exyreams.

Source: https://uiverse.io/exyreams/pretty-eel-31

Author: exyreams

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loading, loader, loading animation

Colors: #004dff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="spinner">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by exyreams - Tags: loading, loader, loading animation */
.spinner {
  position: relative;
  width: 80px;
 /* Adjust the width accordingly */
  height: 16px;
 /* Keep the height the same */
}

.spinner div {
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #004dff;
  border-radius: 50%;
  animation: spinner-4t3wzl 2s infinite linear;
}

.spinner div:nth-child(1) {
  left: 0;
  animation-delay: 0.15s;
  background-color: rgba(0, 77, 255, 0.9);
}

.spinner div:nth-child(2) {
  left: 25%;
  animation-delay: 0.3s;
  background-color: rgba(0, 77, 255, 0.8);
}

.spinner div:nth-child(3) {
  left: 50%;
  animation-delay: 0.45s;
  background-color: rgba(0, 77, 255, 0.7);
}

.spinner div:nth-child(4) {
  left: 75%;
  animation-delay: 0.6s;
  background-color: rgba(0, 77, 255, 0.6);
}

.spinner div:nth-child(5) {
  left: 100%;
  animation-delay: 0.75s;
  background-color: rgba(0, 77, 255, 0.5);
}

@keyframes spinner-4t3wzl {
  0% {
    transform: rotate(0deg) translateX(-100%);
  }

  100% {
    transform: rotate(360deg) translateX(-100%);
  }
}
```

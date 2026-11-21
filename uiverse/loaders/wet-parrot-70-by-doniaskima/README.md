# Wet Parrot 70

A loader UI element from Uiverse.io by doniaskima.

Source: https://uiverse.io/doniaskima/wet-parrot-70

Author: doniaskima

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, loader

Colors: #000, #0000, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by doniaskima - Tags: simple, material design, loader */
/* HTML: <div class="loader"></div> */
.loader {
  width: 80px;
  height: 70px;
  border: 5px solid #000;
  padding: 0 8px;
  box-sizing: border-box;
  background: linear-gradient(#fff 0 0) 0    0/8px 20px,
    linear-gradient(#fff 0 0) 100% 0/8px 20px,
    radial-gradient(farthest-side,#fff 90%,#0000) 0 5px/8px 8px content-box,
    #000;
  background-repeat: no-repeat;
  animation: l3 2s infinite linear;
}

@keyframes l3 {
  25% {
    background-position: 0 0   ,100% 100%,100% calc(100% - 5px)
  }

  50% {
    background-position: 0 100%,100% 100%,0    calc(100% - 5px)
  }

  75% {
    background-position: 0 100%,100%    0,100% 5px
  }
}
```

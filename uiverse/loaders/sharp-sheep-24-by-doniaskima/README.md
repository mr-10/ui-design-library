# Sharp Sheep 24

A loader UI element from Uiverse.io by doniaskima.

Source: https://uiverse.io/doniaskima/sharp-sheep-24

Author: doniaskima

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, loader

Colors: #000, #0000

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
  width: 60px;
  height: 30px;
  display: grid;
  --c: #0000 calc(100% - 5px),#000 calc(100% - 4px) 96%,#0000;
  background: radial-gradient(farthest-side at bottom,var(--c)) 0 0,
    radial-gradient(farthest-side at top   ,var(--c)) 100% 100%;
  background-size: calc(50% + 2px) 50%;
  background-repeat: no-repeat;
  animation: l14 1.5s infinite linear;
}

.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
  background: inherit;
  animation: inherit;
  animation-duration: 2s;
}

.loader:after {
  --s: -1;
}

@keyframes l14 {
  100% {
    transform: rotate(calc(var(--s,1)*1turn))
  }
}
```

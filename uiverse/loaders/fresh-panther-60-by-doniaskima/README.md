# Fresh Panther 60

A loader UI element from Uiverse.io by doniaskima.

Source: https://uiverse.io/doniaskima/fresh-panther-60

Author: doniaskima

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, loader

Colors: #0000, #020308, #9eddfe, #ecfefe, #ffd738

Fonts: See styles.css

Spacing and radius: 100px 100px 0 0

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
  height: 40px;
  border-radius: 100px 100px 0 0;
  position: relative;
  overflow: hidden;
}

.loader:before {
  content: "";
  position: absolute;
  inset: 0 0 -100%;
  background: radial-gradient(farthest-side,#ffd738 80%,#0000) left 70% top    20%/15px 15px,
    radial-gradient(farthest-side,#020308 92%,#0000) left 65% bottom 19%/12px 12px,
    radial-gradient(farthest-side,#ecfefe 92%,#0000) left 70% bottom 20%/15px 15px,
    linear-gradient(#9eddfe 50%,#020308 0);
  background-repeat: no-repeat;
  animation: l5 2s infinite;
}

@keyframes l5 {
  0%,20% {
    transform: rotate(0)
  }

  40%,60% {
    transform: rotate(.5turn)
  }

  80%,100% {
    transform: rotate(1turn)
  }
}
```

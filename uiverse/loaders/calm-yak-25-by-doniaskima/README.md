# Calm Yak 25

A loader UI element from Uiverse.io by doniaskima.

Source: https://uiverse.io/doniaskima/calm-yak-25

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
  width: 50px;
  aspect-ratio: 1;
  --g: #0000 calc(100% - 5px),#000 calc(100% - 3px) 93%,#0000;
  background: radial-gradient(farthest-side at bottom,var(--g)) top                  /100% 50%,
    radial-gradient(farthest-side at top   ,var(--g)) bottom 18% right  0  /80%  40%,
    radial-gradient(farthest-side at bottom,var(--g)) left   50% top    30%/60%  30%,
    radial-gradient(farthest-side at top   ,var(--g)) right  34% bottom 37%/40%  20%,
    radial-gradient(farthest-side at bottom,var(--g)) left   52% top    43%/24%  12%;
  background-repeat: no-repeat;
  animation: l20 1s infinite linear;
}

@keyframes l20 {
  100% {
    transform: rotate(1turn)
  }
}
```

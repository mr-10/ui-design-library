# Pretty Dolphin 47

A loader UI element from Uiverse.io by doniaskima.

Source: https://uiverse.io/doniaskima/pretty-dolphin-47

Author: doniaskima

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, neumorphism, loader

Colors: #000, #0000, #0008, #ddd, #f93318, #fff, #fffb

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by doniaskima - Tags: simple, material design, neumorphism, loader */
/* HTML: <div class="loader"></div> */
.loader {
  height: 60px;
  aspect-ratio: 1;
  position: relative;
}

.loader::before,
.loader::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  transform-origin: bottom;
}

.loader::after {
  background: radial-gradient(at 75% 15%,#fffb,#0000 35%),
    radial-gradient(at 80% 40%,#0000,#0008),
    radial-gradient(circle  5px,#fff 94%,#0000),
    radial-gradient(circle 10px,#000 94%,#0000),
    linear-gradient(#F93318 0 0) top   /100% calc(50% - 5px),
    linear-gradient(#fff    0 0) bottom/100% calc(50% - 5px)
    #000;
  background-repeat: no-repeat;
  animation: l20 1s infinite cubic-bezier(0.5,120,0.5,-120);
}

.loader::before {
  background: #ddd;
  filter: blur(8px);
  transform: scaleY(0.4) translate(-13px, 0px);
}

@keyframes l20 {
 
  30%,70% {
    transform: rotate(0deg)
  }

  49.99% {
    transform: rotate(0.2deg)
  }

  50% {
    transform: rotate(-0.2deg)
  }
}
```

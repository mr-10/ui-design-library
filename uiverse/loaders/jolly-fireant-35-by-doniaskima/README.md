# Jolly Fireant 35

A loader UI element from Uiverse.io by doniaskima.

Source: https://uiverse.io/doniaskima/jolly-fireant-35

Author: doniaskima

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, neumorphism, success, loader

Colors: #000, #0000, #fff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by doniaskima - Tags: simple, neumorphism, success, loader */
.loader {
  display: inline-flex;
  gap: 10px;
}

.loader:before,
.loader:after {
  content: "";
  height: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side,#000 95%,#0000) 35% 35%/6px 6px no-repeat
    #fff;
  transform: scaleX(var(--s,1)) rotate(0deg);
  animation: l6 1s infinite linear;
}

.loader:after {
  --s: -1;
  animation-delay: -0.1s;
}

@keyframes l6 {
  100% {
    transform: scaleX(var(--s,1)) rotate(360deg);
  }
}
```

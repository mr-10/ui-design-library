# Shy Newt 25

A loader UI element from Uiverse.io by benjimich.

Source: https://uiverse.io/benjimich/shy-newt-25

Author: benjimich

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, color

Colors: #004643, #f9bc60

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<div class="loader">
  <div class="inner_loader"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by benjimich - Tags: loader, color */
.loader {
  width: 200px;
  height: 10px;
  background: #004643;
  border-radius: 50px;
  overflow: hidden;
}

.inner_loader {
  width: 60%;
  height: 100%;
  background: #f9bc60;
  border-radius: 50px;
  animation: moveLeftRight 3s ease-in-out infinite;
}

@keyframes moveLeftRight {
  0% {
    transform: translateX(calc(-100% + 10px));
  }

  50% {
    transform: translateX(calc(200px - 10px));
  }

  100% {
    transform: translateX(calc(-100% + 10px));
  }
}
```

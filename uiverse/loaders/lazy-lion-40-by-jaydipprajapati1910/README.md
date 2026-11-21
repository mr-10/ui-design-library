# Lazy Lion 40

A loader UI element from Uiverse.io by JaydipPrajapati1910.

Source: https://uiverse.io/JaydipPrajapati1910/lazy-lion-40

Author: JaydipPrajapati1910

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loading, loader, square

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by JaydipPrajapati1910 - Tags: loading, loader, square */
.loader {
  width: 100px;
  height: 100px;
  display: grid;
  color: hsl(204, 86%, 69%);
}

.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
  --c1: linear-gradient(90deg,rgb(247, 247, 247) calc(100%/3),currentColor 0 calc(2*100%/3),rgb(247, 247, 247) 0);
  --c2: linear-gradient( 0deg,rgb(247, 247, 247) calc(100%/3),currentColor 0 calc(2*100%/3),rgb(247, 247, 247) 0);
  background: var(--c1),
    var(--c2),
    var(--c1),
    var(--c2);
  background-size: 300% 8px,8px 300%;
  background-repeat: no-repeat;
  animation: l1 1s infinite linear;
}

.loader:after {
  margin: 10px;
  transform: scaleX(-1);
  animation-delay: -.25s;
}

@keyframes l1 {
  0% {
    background-position: 50%  0,100% 100%,0    100%,0 0
  }

  25% {
    background-position: 0    0,100% 50% ,0    100%,0 0
  }

  50% {
    background-position: 0    0,100% 0   ,50%  100%,0 0
  }

  75% {
    background-position: 0    0,100% 0   ,100% 100%,0 50%
  }

  75.01% {
    background-position: 100% 0,100% 0   ,100% 100%,0 50%
  }

  100% {
    background-position: 50%  0,100% 0   ,100% 100%,0 100%
  }
}
```

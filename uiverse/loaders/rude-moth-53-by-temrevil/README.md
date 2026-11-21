# Rude Moth 53

A loader UI element from Uiverse.io by TemRevil.

Source: https://uiverse.io/TemRevil/rude-moth-53

Author: TemRevil

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, action, loading, loader, smooth, code, neon, game

Colors: #ff5100

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loading-box">
  <div class="WH animation color"></div>
  <div class="WH animation color"></div>
  <div class="WH animation color"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by TemRevil  - Tags: simple, action, loading, loader, smooth, code, neon, game */
.loading-box {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.WH {
  width: 20px;
  height: 70px;
}
.color {
  background-color: #ff5100;
}
.animation {
  animation: Loading 1s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

@keyframes Loading {
  0% {
    height: 0;
  }
  25% {
    height: 70px;
  }
  50% {
    height: 70px;
    transform: rotate(10deg);
  }
  75% {
    height: 70px;
    transform: rotate(0deg);
  }
  100% {
    height: 0;
  }
}
```

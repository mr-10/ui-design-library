# Tricky Wolverine 48

A loader UI element from Uiverse.io by PriyanshuGupta28.

Source: https://uiverse.io/PriyanshuGupta28/tricky-wolverine-48

Author: PriyanshuGupta28

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, 3d loader, 3d cude loader

Colors: #1976d2, #2196f3

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader-container">
    <div class="loader">
      <div class="face front"></div>
      <div class="face back"></div>
      <div class="face left"></div>
      <div class="face right"></div>
      <div class="face top"></div>
      <div class="face bottom"></div>
    </div>
  </div>
```

### styles.css

```css
/* From Uiverse.io by PriyanshuGupta28 - Tags: loader, 3d loader, 3d cude loader */
.loader-container {
  perspective: 800px;
}

.loader {
  position: relative;
  width: 80px;
  height: 80px;
  transform-style: preserve-3d;
  animation: spin 3s linear infinite;
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #2196F3;
  border: 2px solid #1976D2;
}

.front {
  transform: translateZ(40px);
}

.back {
  transform: rotateY(180deg) translateZ(40px);
}

.left {
  transform: rotateY(-90deg) translateZ(40px);
}

.right {
  transform: rotateY(90deg) translateZ(40px);
}

.top {
  transform: rotateX(90deg) translateZ(40px);
}

.bottom {
  transform: rotateX(-90deg) translateZ(40px);
}

@keyframes spin {
  0% {
    transform: rotateX(0) rotateY(0) rotateZ(0);
  }

  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}
```

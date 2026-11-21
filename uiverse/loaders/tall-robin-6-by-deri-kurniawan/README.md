# Tall Robin 6

A loader UI element from Uiverse.io by Deri-Kurniawan.

Source: https://uiverse.io/Deri-Kurniawan/tall-robin-6

Author: Deri-Kurniawan

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, gradient, loading, loader, cube, rotate, box, loading animation

Colors: #3498db, #e74c3c, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader">
    <div class="cube">
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
        <div class="face"></div>
    </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Deri-Kurniawan - Tags: animation, gradient, loading, loader, cube, rotate, box, loading animation */
.loader {
  perspective: 600px;
  width: 100px;
  height: 100px;
}

.cube {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: rotate 4s linear infinite;
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #3498db, #e74c3c);
  opacity: 0.8;
  border: 0.5px solid #fff;
}

.face:nth-child(1) {
  transform: rotateX(90deg) translateZ(50px);
}

.face:nth-child(2) {
  transform: rotateX(-90deg) translateZ(50px);
}

.face:nth-child(3) {
  transform: translateZ(50px);
}

.face:nth-child(4) {
  transform: rotateY(90deg) translateZ(50px);
}

.face:nth-child(5) {
  transform: rotateY(-90deg) translateZ(50px);
}

.face:nth-child(6) {
  transform: rotateY(180deg) translateZ(50px);
}

@keyframes rotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }

  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
```

# Horrible Ape 25

A loader UI element from Uiverse.io by ChaudaryHammad.

Source: https://uiverse.io/ChaudaryHammad/horrible-ape-25

Author: ChaudaryHammad

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: neumorphism, loader, spinner, circle loader, spin, css, cool loader, 3d loader

Colors: #2ecc71, #3498db, #9b59b6, #e67e22, #e74c3c, #f39c12

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader">
    <div class="cube">
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
/* From Uiverse.io by ChaudaryHammad - Tags: neumorphism, loader, spinner, circle loader, spin, css, cool loader, 3d loader */
.loader {
  perspective: 800px;
}

.cube {
  width: 40px;
  height: 40px;
  position: relative;
  transform-style: preserve-3d;
  animation: spin 3s linear infinite;
}

.face {
  width: 40px;
  height: 40px;
  position: absolute;
  opacity: 0.8;
}

.front {
  transform: translateZ(20px);
  background-color: #3498db;
}

.back {
  transform: translateZ(-20px);
  background-color: #e74c3c;
}

.left {
  transform: rotateY(90deg) translateZ(20px);
  background-color: #2ecc71;
}

.right {
  transform: rotateY(-90deg) translateZ(20px);
  background-color: #f39c12;
}

.top {
  transform: rotateX(90deg) translateZ(20px);
  background-color: #9b59b6;
}

.bottom {
  transform: rotateX(-90deg) translateZ(20px);
  background-color: #e67e22;
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

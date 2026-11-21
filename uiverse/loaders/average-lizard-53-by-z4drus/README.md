# Average Lizard 53

A loader UI element from Uiverse.io by Z4drus.

Source: https://uiverse.io/Z4drus/average-lizard-53

Author: Z4drus

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, animation, blue, loading, loader, dark, animated, gradients

Colors: #003366, #003399, #0066cc, #0099ff, #336699, #3366cc, #3399ff, #33ccff, #66ccff, #66ffff

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="container">
  <div class="loader">
    <div class="crystal"></div>
    <div class="crystal"></div>
    <div class="crystal"></div>
    <div class="crystal"></div>
    <div class="crystal"></div>
    <div class="crystal"></div>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Z4drus  - Tags: simple, animation, blue, loading, loader, dark, animated, gradients */
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  position: relative;
  width: 200px;
  height: 200px;
  perspective: 800px;
}

.crystal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  opacity: 0;
  transform-origin: bottom center;
  transform: translate(-50%, -50%) rotateX(45deg) rotateZ(0deg);
  animation: spin 4s linear infinite, emerge 2s ease-in-out infinite alternate,
    fadeIn 0.3s ease-out forwards;
  border-radius: 10px;
  visibility: hidden;
}

@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotateX(45deg) rotateZ(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotateX(45deg) rotateZ(360deg);
  }
}

@keyframes emerge {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}

@keyframes fadeIn {
  to {
    visibility: visible;
    opacity: 0.8;
  }
}

.crystal:nth-child(1) {
  background: linear-gradient(45deg, #003366, #336699);
  animation-delay: 0s;
}

.crystal:nth-child(2) {
  background: linear-gradient(45deg, #003399, #3366cc);
  animation-delay: 0.3s;
}

.crystal:nth-child(3) {
  background: linear-gradient(45deg, #0066cc, #3399ff);
  animation-delay: 0.6s;
}

.crystal:nth-child(4) {
  background: linear-gradient(45deg, #0099ff, #66ccff);
  animation-delay: 0.9s;
}

.crystal:nth-child(5) {
  background: linear-gradient(45deg, #33ccff, #99ccff);
  animation-delay: 1.2s;
}

.crystal:nth-child(6) {
  background: linear-gradient(45deg, #66ffff, #ccffff);
  animation-delay: 1.5s;
}
```

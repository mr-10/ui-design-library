# Slimy Dodo 36

A loader UI element from Uiverse.io by Nawsome.

Source: https://uiverse.io/Nawsome/slimy-dodo-36

Author: Nawsome

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #efefef

Fonts: See styles.css

Spacing and radius: 12px

## Source Code

### index.html

```html
<div class="loading">
  <div class="side front"></div>
  <div class="side back"></div>
  <div class="side top"></div>
  <div class="side bottom"></div>
  <div class="side left"></div>
  <div class="side right"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Nawsome - Tags: loader */
.loading {
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 12px;
  position: relative;
  transform-style: preserve-3d;
  animation: loading_4123 2s linear infinite;
}

.side {
  background: white;
  border-radius: 12px;
}

.front, .back {
  width: 100px;
  height: 100px;
}

.front, .back {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.back {
  transform: translateZ(-10px);
}

.left, .right {
  width: 10px;
  height: calc(100% - 12px);
  top: 6px;
  position: absolute;
  background: #efefef;
}

.left {
  left: 0;
  transform-origin: 0;
  transform: rotateY(90deg);
}

.right {
  right: 0;
  transform-origin: 100%;
  transform: rotateY(-90deg);
}

.top, .bottom {
  width: calc(100% - 12px);
  height: 10px;
  position: absolute;
  left: 6px;
  background: #efefef;
}

.top {
  top: -10px;
  transform-origin: 0 100%;
  transform: rotateX(90deg);
}

.bottom {
  bottom: -10px;
  transform-origin: 0 0;
  transform: rotateX(-90deg);
}

@keyframes loading_4123 {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(180deg) rotateX(-180deg);
  }
}
```

# Sour Goose 62

A loader UI element from Uiverse.io by vikas7754.

Source: https://uiverse.io/vikas7754/sour-goose-62

Author: vikas7754

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: 3d, loader, 3d cube

Colors: #00ff2f, #151515, #222, #3aff5e, #51fd71

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="glowing-cube">
  <div class="top">❤</div>
  <div>
    <span style="--i:0;"></span>
    <span style="--i:1;"></span>
    <span style="--i:2;"></span>
    <span style="--i:3;"></span>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by vikas7754 - Source: https://freecodez.com/post/iiygefu - Tags: 3d, loader, 3d cube */
.glowing-cube {
  position: relative;
  width: 150px;
  height: 150px;
  transform-style: preserve-3d;
  animation: cube-rotate 4s linear infinite;
}

@keyframes cube-rotate {
  0% {
    transform: rotatex(-30deg) rotatey(0deg);
  }

  100% {
    transform: rotatex(-30deg) rotatey(360deg);
  }
}

.glowing-cube div {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
}

.glowing-cube div span {
  position: absolute;
  inset: 0;
  background: linear-gradient(#151515, #3aff5e);
  transform: rotatey(calc(90deg * var(--i))) translatez(calc(150px / 2));
}

.glowing-cube .top {
  position: absolute;
  inset: 0;
  background: #222;
  transform: rotatex(90deg) translatez(calc(150px / 2));
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--top-font-color);
  font-size: 7rem;
}

.glowing-cube .top::before {
  content: '';
  position: absolute;
  background: #3aff5e;
  inset: 0;
  transform: translatez(calc(0px - calc(150px + 100px)));
  filter: blur(30px);
  box-shadow: 0 0 120px rgba(58, 134, 255, 0.2),
    0 0 200px rgba(58, 134, 255, 0.4),
    0 0 300px #00ff2f,
    0 0 400px #51fd71,
    0 0 500px #3aff5e;
}
```

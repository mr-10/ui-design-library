# Giant Dodo 93

A loader UI element from Uiverse.io by JkHuger.

Source: https://uiverse.io/JkHuger/giant-dodo-93

Author: JkHuger

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #e0e0e0, #fff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader">
  <span></span>
  <span></span>
  <span></span>
</div>
```

### styles.css

```css
/* From Uiverse.io by JkHuger - Tags: loader */
.loader {
  position: relative;
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transform: perspective(500px) rotateX(45deg);
}

.loader span {
  position: absolute;
  display: block;
  border: 15px solid #fff;
  box-sizing: border-box;
  border-radius: 50%;
  box-shadow: 0 10px 0 #e0e0e0, inset 0 10px 0 #e0e0e0;
  animation: animate_5013 4.5s ease-in-out infinite;
}

.loader span:nth-child(1) {
  animation-delay: 0s;
}

.loader span:nth-child(2) {
  animation-delay: 1.5s;
}

.loader span:nth-child(3) {
  animation-delay: 3s;
}

@keyframes animate_5013 {
  0% {
    transform: translateZ(-100px);
    width: 100%;
    height: 100%;
  }

  25% {
    transform: translateZ(100px);
    width: 100%;
    height: 100%;
  }

  50% {
    transform: translateZ(100px);
    width: 35%;
    height: 35%;
  }

  75% {
    transform: translateZ(-100px);
    width: 35%;
    height: 35%;
  }

  100% {
    transform: translateZ(-100px);
    width: 100%;
    height: 100%;
  }
}
```

# Swift Penguin 59

A loader UI element from Uiverse.io by vikramsinghnegi.

Source: https://uiverse.io/vikramsinghnegi/swift-penguin-59

Author: vikramsinghnegi

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loading, loader, html, css

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 3px

## Source Code

### index.html

```html
<div class="center-body">
  <div class="loader-spanne-20">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by vikramsinghnegi  - Tags: loading, loader, html, css */
.loader-spanne-20 {
  position: relative;
  width: 100px;
  height: 30px;
  padding: 0;
}
.loader-spanne-20 > span {
  position: absolute;
  right: 0;
  width: 3px;
  height: 30px;
  background-color: rgb(116, 204, 197);
  display: block;
  border-radius: 3px;
  transform-origin: 50% 100%;
  animation: move 2.8s linear infinite;
}
.loader-spanne-20 > span:nth-child(1) {
  animation-delay: -0.4s;
}
.loader-spanne-20 > span:nth-child(2) {
  animation-delay: -0.8s;
}
.loader-spanne-20 > span:nth-child(3) {
  animation-delay: -1.2s;
}
.loader-spanne-20 > span:nth-child(4) {
  animation-delay: -1.6s;
}
.loader-spanne-20 > span:nth-child(5) {
  animation-delay: -2s;
}
.loader-spanne-20 > span:nth-child(6) {
  animation-delay: -2.4s;
}
.loader-spanne-20 > span:nth-child(7) {
  animation-delay: -2.8s;
}
@keyframes move {
  0% {
    opacity: 0;
    transform: translateX(0px) rotate(0deg);
  }
  20% {
    opacity: 1;
  }
  40% {
    transform: translateX(-40px) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: translateX(-50px) rotate(22deg);
  }
  85% {
    opacity: 1;
    transform: translateX(-85px) rotate(60deg);
  }
  100% {
    opacity: 0;
    transform: translateX(-100px) rotate(65deg);
  }
}
```

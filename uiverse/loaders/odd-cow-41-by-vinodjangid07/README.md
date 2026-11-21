# Odd Cow 41

A loader UI element from Uiverse.io by vinodjangid07.

Source: https://uiverse.io/vinodjangid07/odd-cow-41

Author: vinodjangid07

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, loading, loader, multicolor, loading animation

Colors: #ef5d2e, #ff9d0089, #ff9e02

Fonts: Whitney, -apple-system, Helvetica

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader">
  <div class="wrapper">
    <div class="text">LOADING</div>
    <div class="box"></div>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by vinodjangid07  - Tags: animation, loading, loader, multicolor, loading animation */
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper {
  width: 180px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.text {
  z-index: 3;
  font-family: Whitney, -apple-system, Helvetica;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 20px;
  color: white;
  filter: drop-shadow(2px 2px 0px #ff9e02);
}
.box {
  width: 100%;
  height: 100%;
  background-color: #ef5d2e;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: loading ease-in-out 0.9s infinite alternate-reverse;
}
@keyframes loading {
  0% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(20px);
  }
}
.box::before {
  content: "";
  width: 20px;
  height: 170%;
  background-color: #ff9d0089;
  position: absolute;
  z-index: 1;
  animation: loading2 ease-in-out 0.9s infinite alternate-reverse;
}
@keyframes loading2 {
  0% {
    transform: translateX(-50px);
  }
  100% {
    transform: translateX(50px);
  }
}
```

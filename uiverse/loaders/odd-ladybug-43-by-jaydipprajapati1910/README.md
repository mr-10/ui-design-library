# Odd Ladybug 43

A loader UI element from Uiverse.io by JaydipPrajapati1910.

Source: https://uiverse.io/JaydipPrajapati1910/odd-ladybug-43

Author: JaydipPrajapati1910

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, loading, loader, animated, circle loader, loader circle

Colors: #00f260, #0575e6, #e9e93e

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="spinner">
  <div class="outer">
    <div class="inner tl"></div>
    <div class="inner tr"></div>
    <div class="inner br"></div>
    <div class="inner bl"></div>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by JaydipPrajapati1910 - Tags: animation, loading, loader, animated, circle loader, loader circle */
.spinner {
  position: absolute;
  width: 128px;
  height: 128px;
  top: calc(50% - 64px);
  left: calc(50% - 64px);
  transform: perspective(206px) rotateX(45deg);
}

.outer {
  box-sizing: border-box;
  animation: spin 3s linear infinite;
  height: 100%;
}

.inner {
  position: absolute;
  border-radius: 50%;
  width: 64px;
  height: 64px;
}

.tl {
  top: 0;
  left: 0;
  border-top: 8px solid red;
  border-left: 10px solid red;
  animation: spin 1s ease-in-out infinite;
}

.tr {
  top: 0;
  right: 0;
  border-top: 8px solid #0575E6;
  border-right: 10px solid #0575E6;
  animation: spin 1s ease-in-out infinite;
}

.br {
  bottom: 0;
  right: 0;
  border-bottom: 8px solid  #00F260;
  border-right: 10px solid  #00F260;
  animation: spin 1s ease-in-out infinite;
}

.bl {
  bottom: 0;
  left: 0;
  border-bottom: 8px solid  #e9e93e;
  border-left: 10x solid #e9e93e;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
```

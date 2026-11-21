# Rude Moth 27

A loader UI element from Uiverse.io by aadil-01.

Source: https://uiverse.io/aadil-01/rude-moth-27

Author: aadil-01

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #5acef2, #fefefe, #ff8062

Fonts: See styles.css

Spacing and radius: 12px, 16px, 8px

## Source Code

### index.html

```html
<div id="box-outer">
  <div id="box-inner">
    <div id="box"></div>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by aadil-01 - Tags: loader */
#box-outer {
  width: 80px;
  height: 80px;
  border-radius: 16px;
  animation: rotate_29 5s infinite;
  background-color: #5ACEF2;
}

#box-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  rotate: 45deg;
  animation: revolve_29 5s infinite;
  background-color: #FF8062;
}

#box {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  animation: rotate_29 5s infinite;
  background-color: #FEFEFE;
}

@keyframes revolve_29 {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateY(100%);
  }

  50% {
    transform: translateX(100%) translateY(100%);
  }

  75% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes rotate_29 {
  0% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(90deg);
  }

  40% {
    transform: rotate(180deg);
  }

  60% {
    transform: rotate(270deg);
  }

  80% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
```

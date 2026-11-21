# Dangerous Sheep 53

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/dangerous-sheep-53

Author: Shoh2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #fff

Fonts: See styles.css

Spacing and radius: 20px

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Shoh2008 - Tags: loader */
.loader {
  display: block;
  position: relative;
  height: 32px;
  width: 140px;
  border: 3px solid #fff;
  border-radius: 20px;
  box-sizing: border-box;
  animation: balancing 2s linear infinite alternate;
  transform-origin: center center;
}

.loader:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 52px;
  height: 26px;
  border-radius: 20px;
  background: gold;
  animation: ballbns 2s linear infinite alternate;
}

@keyframes ballbns {
  0% {
    left: 0;
    transform: translateX(0%);
  }

  100% {
    left: 100%;
    transform: translateX(-100%);
  }
}

@keyframes balancing {
  0% {
    transform: rotate(-25deg);
  }

  50% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(25deg);
  }
}
```

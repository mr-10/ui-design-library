# Perfect Fireant 0

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/perfect-fireant-0

Author: Shoh2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #ff3d00, #fff

Fonts: See styles.css

Spacing and radius: 10px, 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Shoh2008 - Tags: loader */
.loader {
  width: 16px;
  height: 16px;
  position: relative;
  left: -32px;
  border-radius: 50%;
  color: #fff;
  background: currentColor;
  box-shadow: 32px 0 , -32px 0 ,  64px 0;
}

.loader::after {
  content: '';
  position: absolute;
  left: -32px;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 10px;
  background: #FF3D00;
  animation: move_351 3s linear infinite alternate;
}

@keyframes move_351 {
  0% , 5% {
    left: -32px;
    width: 16px;
  }

  15% , 20% {
    left: -32px;
    width: 48px;
  }

  30% , 35% {
    left: 0px;
    width: 16px;
  }

  45% , 50% {
    left: 0px;
    width: 48px;
  }

  60% , 65% {
    left: 32px;
    width: 16px;
  }

  75% , 80% {
    left: 32px;
    width: 48px;
  }

  95%, 100% {
    left: 64px;
    width: 16px;
  }
}
```

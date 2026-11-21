# Witty Falcon 85

A loader UI element from Uiverse.io by Codecite.

Source: https://uiverse.io/Codecite/witty-falcon-85

Author: Codecite

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, loading, loader

Colors: #fff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="ld-ripple">
  <div></div>
  <div></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Codecite - Tags: animation, loading, loader */
.ld-ripple {
  position: relative;
  width: 80px;
  height: 80px;
}

.ld-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: ld-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.ld-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes ld-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }

  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }

  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
```

# Bad Earwig 19

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/bad-earwig-19

Author: Shoh2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Shoh2008 - Tags: loader */
.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  background: #FFF;
  box-sizing: border-box;
  animation: zeroRotation 1s ease infinite alternate-reverse;
}

@keyframes zeroRotation {
  0% {
    transform: scale(1) rotate(0deg);
  }

  100% {
    transform: scale(0.3) rotate(360deg);
  }
}
```

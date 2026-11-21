# Quick Fox 3

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/quick-fox-3

Author: Shoh2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #fff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Shoh2008 - Tags: loader */
.loader {
  width: 8px;
  height: 8px;
  position: relative;
  border-radius: 50%;
  background: #fff;
  animation: wave_14 1s ease-in infinite;
}

@keyframes wave_14 {
  0% {
    box-shadow: 0 0 0 0px rgba(255, 255,255, 1),
  0 0 0 20px rgba(255, 255,255, 0.2),
  0 0 0 40px rgba(255, 255,255, 0.6),
  0 0 0 60px rgba(255, 255,255, 0.4),
  0 0 0 80px rgba(255, 255,255, 0.2)
  }

  100% {
    box-shadow: 0 0 0 80px rgba(255, 255,255, 0),
    0 0 0 60px rgba(255, 255,255, 0.2),
    0 0 0 40px rgba(255, 255,255, 0.4),
    0 0 0 20px rgba(255, 255,255, 0.6),
    0 0 0 0px rgba(255, 255,255, 1)
  }
}
```

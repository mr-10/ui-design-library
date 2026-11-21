# Little Falcon 22

A loader UI element from Uiverse.io by JkHuger.

Source: https://uiverse.io/JkHuger/little-falcon-22

Author: JkHuger

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #8f44fd

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="item">
    <div class="loader-pulse"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by JkHuger - Tags: loader */
.loader-pulse {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #8f44fd;
  animation: load-pulse 0.85s infinite linear;
}

@keyframes load-pulse {
  0% {
    transform: scale(0.15);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}
```

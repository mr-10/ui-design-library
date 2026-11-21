# Thin Turkey 8

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/thin-turkey-8

Author: Shoh2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #0000, #fff

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
  width: 70px;
  height: 35px;
  position: relative;
  overflow: hidden;
}

.loader:before {
  content: "";
  width: 70px;
  height: 70px;
  position: absolute;
  left: 0;
  top: 0;
  border: 5px solid #0000;
  border-color: #fff #fff #0000 #0000;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotate_5131 3s ease-in-out infinite;
  transform: rotate(-200deg);
}

@keyframes rotate_5131 {
  0% {
    border-width: 10px;
  }

  25% {
    border-width: 3px;
  }

  50% {
    transform: rotate(115deg);
    border-width: 10px;
  }

  75% {
    border-width: 3px;
  }

  100% {
    border-width: 10px;
  }
}
```

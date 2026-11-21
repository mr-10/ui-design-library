# Quiet Rat 63

A loader UI element from Uiverse.io by zebra76966.

Source: https://uiverse.io/zebra76966/quiet-rat-63

Author: zebra76966

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, multicolor

Colors: #1fff7c, #3a9efd, #f55951

Fonts: See styles.css

Spacing and radius: 0% 0% 0% 0%, 0% 100% 0% 0%, 100%, 100% 100% 100% 100%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by zebra76966 - Tags: loader, multicolor */
.loader {
  border-top: 8px solid hotpink;
  border-bottom: 8px solid #f55951;
  border-left: 8px solid #3a9efd;
  border-right: 8px solid #1fff7c;
  border-radius: 100%;
  height: 100px;
  width: 100px;
  animation: looper 5s infinite ease-in-out;
}

@keyframes looper {
  0% {
    border-radius: 100% 100% 100% 100%;
    border-color: hotpink #3a9efd #1fff7c #f55951;
  }

  10% {
    border-radius: 0% 100% 0% 0%;
    border-color: #f55951;
    transform: rotate(150deg);
  }

  20% {
    border-radius: 0% 0% 0% 0%;
    border-color: #3a9efd;
  }

  30% {
    border-radius: 0% 0% 0% 0%;
    border-color: #1fff7c;
  }

  40% {
    border-radius: 0% 0% 0% 0%;
    border-color: #3a9efd;
  }

  50% {
    border-radius: 100%;
    border-color: #f55951;
  }

  90% {
    border-radius: 100%;
    transform: rotate(360deg);
    border-style: dashed;
  }

  100% {
    transform: rotate(0deg);
    border-radius: 100% 100% 100% 100%;
    border-color: hotpink #3a9efd #1fff7c #f55951;
  }
}
```

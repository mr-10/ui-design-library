# Fuzzy Tiger 54

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/fuzzy-tiger-54

Author: Shoh2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, pong

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
/* From Uiverse.io by Shoh2008 - Tags: loader, pong */
.loader {
  position: relative;
  height: 40px;
  width: 6px;
  color: #FFF;
  animation: paddles 0.75s ease-out infinite;
}

.loader:before {
  content: "";
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 15px;
  width: 12px;
  height: 12px;
  background-color: greenyellow;
  border-radius: 50%;
  animation: ballbounce 0.6s ease-out infinite;
}

@keyframes paddles {
  0% {
    box-shadow: -25px -10px, 25px 10px
  }

  50% {
    box-shadow: -25px 8px, 25px -10px
  }

  100% {
    box-shadow: -25px -10px, 25px 10px
  }
}

@keyframes ballbounce {
  0% {
    transform: translateX(-20px) scale(1, 1.2)
  }

  25% {
    transform: scale(1.2, 1)
  }

  50% {
    transform: translateX(15px) scale(1, 1.2)
  }

  75% {
    transform: scale(1.2, 1)
  }

  100% {
    transform: translateX(-20px)
  }
}
```

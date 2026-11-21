# Yellow Hound 47

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/yellow-hound-47

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
  width: 0;
  height: 4.8px;
  display: inline-block;
  position: relative;
  background: #FFF;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  animation: animFw 8s linear infinite;
}

.loader::after,
  .loader::before {
  content: '';
  width: 10px;
  height: 1px;
  background: #FFF;
  position: absolute;
  top: 9px;
  right: -2px;
  opacity: 0;
  transform: rotate(-45deg) translateX(0px);
  box-sizing: border-box;
  animation: coli1 0.3s linear infinite;
}

.loader::before {
  top: -4px;
  transform: rotate(45deg);
  animation: coli2 0.3s linear infinite;
}

@keyframes animFw {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}

@keyframes coli1 {
  0% {
    transform: rotate(-45deg) translateX(0px);
    opacity: 0.7;
  }

  100% {
    transform: rotate(-45deg) translateX(-45px);
    opacity: 0;
  }
}

@keyframes coli2 {
  0% {
    transform: rotate(45deg) translateX(0px);
    opacity: 1;
  }

  100% {
    transform: rotate(45deg) translateX(-45px);
    opacity: 0.7;
  }
}
```

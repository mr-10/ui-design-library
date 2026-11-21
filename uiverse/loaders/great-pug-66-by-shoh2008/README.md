# Great Pug 66

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/great-pug-66

Author: Shoh2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #fff

Fonts: See styles.css

Spacing and radius: 4px

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
  box-shadow: 0 30px, 0 -30px;
  border-radius: 4px;
  background: currentColor;
  display: block;
  position: relative;
  transform: translate(-150%, -20px);
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 2s ease infinite;
}

.loader::after,
.loader::before {
  content: '';
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  box-shadow: 0 30px, 0 -30px;
  border-radius: 4px;
  background: currentColor;
  color: #FFF;
  position: absolute;
  left: 30px;
  top: 0;
  animation: animloader 2s 0.2s ease infinite;
}

.loader::before {
  animation-delay: 0.4s;
  left: 60px;
}

@keyframes animloader {
  0% {
    top: 0;
    color: white;
  }

  50% {
    top: 30px;
    color: rgba(255, 255, 255, 0.2);
  }

  100% {
    top: 0;
    color: white;
  }
}
```

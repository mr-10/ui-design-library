# Terrible Fireant 25

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/terrible-fireant-25

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
  width: 100px;
  height: 46px;
  position: relative;
  border-bottom: 5px solid #FFF;
  border-top: 5px solid #FFF;
  box-sizing: border-box;
}

.loader:before , .loader:after {
  content: "";
  position: absolute;
  left: 0;
  top: -20px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: orange;
  border: 5px solid #FFF;
  box-sizing: border-box;
  animation: slide_391 1s infinite ease-in-out alternate;
}

.loader:after {
  top: 20px;
  animation-direction: alternate-reverse;
}

@keyframes slide_391 {
  0% , 20% {
    transform: translateX(70px)
  }

  80% , 100% {
    transform: translateX(-1px)
  }
}
```

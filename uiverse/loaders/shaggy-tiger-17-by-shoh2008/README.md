# Shaggy Tiger 17

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/shaggy-tiger-17

Author: Shoh2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #000, #aaa, #ddd, #fff

Fonts: See styles.css

Spacing and radius: 100%, 5px

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Shoh2008 - Tags: loader */
.loader {
  margin: auto;
  width: 100px;
  height: 30px;
  overflow: hidden;
  position: relative;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  box-shadow: 0px 35px 0 -5px #aaa, 0 -5px 0 0px #ddd, 0 -25px 0 -5px #fff,
    -25px -30px 0 0px #ddd, -25px 30px 0 0px #ddd, 25px -30px 0 0px #ddd,
    25px 30px 0 0px #ddd, 20px 10px 0 5px #ddd, 20px -10px 0 5px #ddd,
    -20px -10px 0 5px #ddd, -20px 10px 0 5px #ddd;
}

.loader:after,
.loader:before {
  content: "";
  border-radius: 100%;
  width: 35px;
  height: 35px;
  display: block;
  position: absolute;
  border: 4px dashed #fff;
  bottom: -4px;
  transform: rotate(0deg);
  box-sizing: border-box;
  animation: tape 4s linear infinite;
}

.loader:before {
  right: 0;
  box-shadow: 0 0 0 4px #fff, 0 0 0 34px #000;
}

.loader:after {
  left: 0;
  box-shadow: 0 0 0 4px #fff, 0 0 0 65px #000;
}

@keyframes tape {
  0% {
    transform: rotate(0deg) scale(0.4);
  }

  100% {
    transform: rotate(-360deg) scale(0.4);
  }
}
```

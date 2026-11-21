# Lucky Quail 40

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/lucky-quail-40

Author: Shoh2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #fff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<span class="loader"></span>
```

### styles.css

```css
/* From Uiverse.io by Shoh2008 - Tags: loader */
.loader {
  width: 48px;
  height: 48px;
  border: 2px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation_35 1s linear infinite;
}

.loader::after,
.loader::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  background: greenyellow;
  width: 6px;
  height: 6px;
  transform: translate(150%, 150%);
  border-radius: 50%;
}

.loader::before {
  left: auto;
  top: auto;
  right: 0;
  bottom: 0;
  transform: translate(-150%, -150%);
}

@keyframes rotation_35 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
```

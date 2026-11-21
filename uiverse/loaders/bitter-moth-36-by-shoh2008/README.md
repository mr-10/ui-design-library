# Bitter Moth 36

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/bitter-moth-36

Author: Shoh2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #ff3d00, #fff

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
  display: block;
  margin: 15px auto;
  position: relative;
  color: #FFF;
  box-sizing: border-box;
  animation: rotation_19 1s linear infinite;
}

.loader::after,
.loader::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  background-color: #FFF;
  border-radius: 50%;
  animation: scale50 1s infinite ease-in-out;
}

.loader::before {
  top: auto;
  bottom: 0;
  background-color: #FF3D00;
  animation-delay: 0.5s;
}

@keyframes rotation_19 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes scale50 {
  0%, 100% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
}
```

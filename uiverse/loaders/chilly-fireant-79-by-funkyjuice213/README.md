# Chilly Fireant 79

A loader UI element from Uiverse.io by funkyjuice213.

Source: https://uiverse.io/funkyjuice213/chilly-fireant-79

Author: funkyjuice213

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, glow

Colors: #0066ff, #0099ff, #00ccff, #00e6e6

Fonts: See styles.css

Spacing and radius: 20px

## Source Code

### index.html

```html
<div class="loader">
  <div class="loader-bar bar-1"></div>
  <div class="loader-bar bar-2"></div>
  <div class="loader-bar bar-3"></div>
  <div class="loader-bar bar-4"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by funkyjuice213 - Tags: loader, glow */
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.loader-bar {
  height: 25px;
  width: 6px;
  margin: 0 3px;
  border-radius: 20px;
  animation: loader 2s ease-in-out infinite;
}

.bar-1 {
  background: linear-gradient(to right, #00e6e6, #00ccff, #0099ff, #0066ff);
  animation-delay: 0s;
  box-shadow: 0px 0px 15px 3px #00e6e6;
}

.bar-2 {
  background: linear-gradient(to right, #00ccff, #0099ff, #0066ff, #00e6e6);
  animation-delay: 0.1s;
  box-shadow: 0px 0px 15px 3px #00ccff;
}

.bar-3 {
  background: linear-gradient(to right, #0099ff, #0066ff, #00e6e6, #00ccff);
  animation-delay: 0.2s;
  box-shadow: 0px 0px 15px 3px #0099ff;
}

.bar-4 {
  background: linear-gradient(to right, #0066ff, #00e6e6, #00ccff, #0099ff);
  animation-delay: 0.3s;
  box-shadow: 0px 0px 15px 3px #0066ff;
}

@keyframes loader {
  0% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(2);
  }

  100% {
    transform: scaleY(1);
  }
}
```

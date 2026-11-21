# Foolish Kangaroo 50

A loader UI element from Uiverse.io by Cebucoder.

Source: https://uiverse.io/Cebucoder/foolish-kangaroo-50

Author: Cebucoder

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: white, loading, loader, shadow, modern, text animation, effect loader, loading animation

Colors: #002, #fff

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="loader">
  <label>Redirecting...</label>
  <div class="loading"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Cebucoder  - Tags: white, loading, loader, shadow, modern, text animation, effect loader, loading animation */
.loader {
  width: 350px;
  height: 180px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px;
  box-shadow: 2px 2px 10px -5px lightgrey;
}
.loading {
  width: 100%;
  height: 10px;
  background: lightgrey;
  border-radius: 10px;
  position: relative;
}
.loading::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 10px;
  background: #002;
  border-radius: 10px;
  z-index: 1;
  animation: loading 0.6s alternate infinite;
}
label {
  color: #002;
  font-size: 18px;
  animation: bit 0.6s alternate infinite;
}

@keyframes bit {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
}

@keyframes loading {
  0% {
    left: 25%;
  }
  100% {
    left: 50%;
  }
  0% {
    left: 0%;
  }
}
```

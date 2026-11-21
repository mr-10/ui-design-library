# Bad Wasp 77

A loader UI element from Uiverse.io by Ali-Tahmazi99.

Source: https://uiverse.io/Ali-Tahmazi99/bad-wasp-77

Author: Ali-Tahmazi99

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #6c757d

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<div class="loading">
    <div class="d1"></div>
    <div class="d2"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Ali-Tahmazi99 - Tags: loader */
.loading {
  width: 60px;
  height: 60px;
  position: relative;
}

.d1 , .d2 {
  border: 5px solid #6c757d;
  border-radius: 50px;
}

.loading .d1 {
  width: 55px;
  height: 55px;
  position: absolute;
  border-left-color: transparent;
  animation: load161 1s linear infinite;
}

.loading .d2 {
  width: 40px;
  height: 40px;
  border-top-color: transparent;
  border-right-color: transparent;
  margin: 7.5px;
  animation: load2812 1.5s linear infinite;
}

@keyframes load161 {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes load2812 {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(-360deg);
  }
}
```

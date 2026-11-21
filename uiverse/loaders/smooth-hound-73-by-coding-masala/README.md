# Smooth Hound 73

A loader UI element from Uiverse.io by coding-masala.

Source: https://uiverse.io/coding-masala/smooth-hound-73

Author: coding-masala

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #4e4e4e, #bdbdbd

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by coding-masala - Tags: loader */
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}

.box {
  width: 20px;
  height: 20px;
  margin: 0 8px;
  border-radius: 50%;
  animation: jump_4123 1s ease-in-out infinite;
}

.box:nth-child(1) {
  background-color: #4e4e4e;
  animation-delay: 0.2s;
}

.box:nth-child(2) {
  background-color: #bdbdbd;
  animation-delay: 0.4s;
}

.box:nth-child(3) {
  background-color: #4e4e4e;
  animation-delay: 0.6s;
}

.box:nth-child(4) {
  background-color: #bdbdbd;
  animation-delay: 0.8s;
}

@keyframes jump_4123 {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-30px);
  }
}
```

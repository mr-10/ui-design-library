# Ordinary Rat 31

A loader UI element from Uiverse.io by LeonKohli.

Source: https://uiverse.io/LeonKohli/ordinary-rat-31

Author: LeonKohli

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, loader, rounded, gradients

Colors: #ff6b81, #ff9a44

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader">
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by LeonKohli  - Tags: gradient, loader, rounded, gradients */
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.bubble {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-image: linear-gradient(to right, #ff6b81, #ff9a44);
  margin: 0 5px;
  animation: bubbleAnimation 1.5s ease-in-out infinite;
}

@keyframes bubbleAnimation {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(2);
    opacity: 0.5;
  }
}
```

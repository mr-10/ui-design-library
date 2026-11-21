# Nervous Firefox 94

A loader UI element from Uiverse.io by Ali-Tahmazi99.

Source: https://uiverse.io/Ali-Tahmazi99/nervous-firefox-94

Author: Ali-Tahmazi99

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #e85b0456, #e85b0491, #e85b04c4, #f76002

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<div class="load-row">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
```

### styles.css

```css
/* From Uiverse.io by Ali-Tahmazi99 - Tags: loader */
.load-row {
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.load-row span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #f76002;
  border-radius: 50px;
  animation: up-down6 0.5s ease-in infinite alternate;
}

.load-row span:nth-child(2) {
  background: #e85b04c4;
  animation-delay: 0.16s;
}

.load-row span:nth-child(3) {
  background: #e85b0491;
  animation-delay: 0.32s;
}

.load-row span:nth-child(4) {
  background: #e85b0456;
  animation-delay: 0.48s;
}

@keyframes up-down6 {
  0% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(10px);
  }
}
```

# Old Moose 46

A loader UI element from Uiverse.io by ahmed150up.

Source: https://uiverse.io/ahmed150up/old-moose-46

Author: ahmed150up

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="loader">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by ahmed150up - Tags: loader */
.loader {
  display: flex;
  justify-content: center;
}

.bar {
  width: 7px;
  height: 18px;
  margin: 0 9px;
  border-radius: 10px;
  animation: loading_5192 1s ease-in-out infinite;
  background-color: aqua;
}

.bar:nth-child(1) {
  animation-delay: 0.01s;
}

.bar:nth-child(2) {
  animation-delay: 0.09s;
}

.bar:nth-child(3) {
  animation-delay: 0.19s;
}

.bar:nth-child(4) {
  animation-delay: 0.29s;
}

@keyframes loading_5192 {
  0% {
    transform: scale(1);
  }

  20% {
    transform: scale(1, 2.5);
  }

  40% {
    transform: scale(1);
  }
}
```

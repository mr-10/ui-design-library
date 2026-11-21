# Tall Monkey 16

A loader UI element from Uiverse.io by Nawsome.

Source: https://uiverse.io/Nawsome/tall-monkey-16

Author: Nawsome

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loading">
  <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 124 124">
    <circle class="circle-loading" cx="62" cy="62" r="59" fill="none" stroke="hsl(271, 76%, 74%)" stroke-width="6px"></circle>
    <circle class="circle" cx="62" cy="62" r="59" fill="none" stroke="hsl(271, 76%, 53%)" stroke-width="6px" stroke-linecap="round"></circle>
    <polyline class="check" points="73.56 48.63 57.88 72.69 49.38 62" fill="none" stroke="hsl(271, 76%, 53%)" stroke-width="6px" stroke-linecap="round"></polyline>
  </svg>
</div>
```

### styles.css

```css
/* From Uiverse.io by Nawsome - Tags: loader */
.loading {
  width: 124px;
  height: 124px;
}

.loading svg {
  display: block;
  width: 100%;
  height: 100%;
}

.circle {
  transform: rotate(-90deg);
  transform-origin: center;
  stroke-dasharray: 380;
  stroke-dashoffset: 380;
  animation: circle_4 2s ease-in-out forwards;
}

.check {
  stroke-dasharray: 45;
  stroke-dashoffset: 45;
  animation: check_4 0.2s 2s ease-in-out forwards;
}

@keyframes circle_4 {
  0% {
    stroke-dashoffset: 380;
  }

  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes check_4 {
  0% {
    stroke-dashoffset: 45;
  }

  100% {
    stroke-dashoffset: 90;
  }
}
```

# Massive Moth 6

A loader UI element from Uiverse.io by Subaashbala.

Source: https://uiverse.io/Subaashbala/massive-moth-6

Author: Subaashbala

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, animated, loading animation

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<div class="loaderContainer">
  <div class="particleContainer">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="particleContainer">
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Subaashbala  - Tags: loader, animated, loading animation */
.loaderContainer {
  display: flex;
  width: 9em;
  overflow: hidden;
  gap: 0.5em;
}
.particleContainer {
  display: flex;
  gap: 0.5em;
  animation: slide 2000ms linear infinite;
}
.particleContainer div {
  width: 2.5em;
  aspect-ratio: 1;
  border-radius: 5px;
  background: whitesmoke;
  transform-origin: left bottom;
  animation: squeeze 750ms ease-in-out infinite;
}
.particleContainer div:nth-child(2) {
  animation-delay: 50ms;
}
.particleContainer div:last-child {
  animation-delay: 100ms;
}
@keyframes squeeze {
  0% {
    transform: scale(1) translateY(0);
  }
  50% {
    transform: scale(0.75);
  }
  75% {
    transform: scale(1.05);
  }
  100% {
    transform: sclae(1);
  }
}
@keyframes slide {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(calc(-50% + 1.25em));
  }
}
```

# Dull Vampirebat 56

A loader UI element from Uiverse.io by fanishah.

Source: https://uiverse.io/fanishah/dull-vampirebat-56

Author: fanishah

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader">
    <div class="bar bar1"></div>
    <div class="bar bar2"></div>
    <div class="bar bar3"></div>
    <div class="bar bar4"></div>
    <div class="bar bar5"></div>
    <div class="bar bar6"></div>
    <div class="bar bar7"></div>
    <div class="bar bar8"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by fanishah - Tags: loader */
.loader {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.bar {
  width: 10px;
  height: 70px;
  background: hsl(0, 100%, 50%);
  display: inline-block;
  transform-origin: bottom center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  animation: loader8913 1.2s linear infinite;
}

.bar1 {
  animation-delay: 0.1s;
}

.bar2 {
  animation-delay: 0.2s;
}

.bar3 {
  animation-delay: 0.3s;
}

.bar4 {
  animation-delay: 0.4s;
}

.bar5 {
  animation-delay: 0.5s;
}

.bar6 {
  animation-delay: 0.6s;
}

.bar7 {
  animation-delay: 0.7s;
}

.bar8 {
  animation-delay: 0.8s;
}

@keyframes loader8913 {
  0% {
    transform: scaleY(0.1);
  }

  50% {
    transform: scaleY(1);
    background: yellowgreen;
  }

  100% {
    transform: scaleY(0.1);
    background: transparent;
  }
}
```

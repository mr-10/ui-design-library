# Bright Wolverine 29

A loader UI element from Uiverse.io by mobinkakei.

Source: https://uiverse.io/mobinkakei/bright-wolverine-29

Author: mobinkakei

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #90be6d, #f3722c, #f8961e, #f94346, #f9c74f

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader-3">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by mobinkakei - Tags: loader */
.loader-3 {
  width: 10em;
  display: flex;
  justify-content: space-evenly;
}

.circle {
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
}

.circle:nth-child(1) {
  background-color: #90be6d;
}

.circle:nth-child(2) {
  background-color: #f9c74f;
}

.circle:nth-child(3) {
  background-color: #f8961e;
}

.circle:nth-child(4) {
  background-color: #f3722c;
}

.circle:nth-child(5) {
  background-color: #f94346;
}

.circle::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  opacity: 0.5;
  animation: animateLoader38 2s ease-out infinite;
}

.circle:nth-child(1)::before {
  background-color: #90be6d;
}

.circle:nth-child(2)::before {
  background-color: #f9c74f;
  animation-delay: 0.2s;
}

.circle:nth-child(3)::before {
  background-color: #f8961e;
  animation-delay: 0.4s;
}

.circle:nth-child(4)::before {
  background-color: #f3722c;
  animation-delay: 0.6s;
}

.circle:nth-child(5)::before {
  background-color: #f94346;
  animation-delay: 0.8s;
}

@keyframes animateLoader38 {
  0% {
    transform: scale(1);
  }

  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }
}
```

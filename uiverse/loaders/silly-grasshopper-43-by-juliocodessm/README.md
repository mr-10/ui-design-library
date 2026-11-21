# Silly Grasshopper 43

A loader UI element from Uiverse.io by JulioCodesSM.

Source: https://uiverse.io/JulioCodesSM/silly-grasshopper-43

Author: JulioCodesSM

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #50e8f3, #fc3f9e

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by JulioCodesSM - Tags: loader */
/* From uiverse.io by @JulioCodesSM */
.loader {
 width: 50px;
 height: 50px;
 position: relative;
 transform: translateX(-25px);
 /* Compensating for the left of 50px in the keyframe. */
}

.loader::before,
.loader::after {
 content: '';
 position: absolute;
 width: inherit;
 height: inherit;
 border-radius: 50%;
 mix-blend-mode: multiply;
 animation: rotate9 1s infinite cubic-bezier(0.77, 0, 0.175, 1);
}

.loader::before {
 background-color: #fc3f9e;
}

.loader::after {
 background-color: #50e8f3;
 animation-delay: .5s;
}

@keyframes rotate9 {
 0%,100% {
  left: 50px;
 }

 25% {
  transform: scale(.3);
 }

 50% {
  left: 0;
 }

 75% {
  transform: scale(1);
 }
}
```

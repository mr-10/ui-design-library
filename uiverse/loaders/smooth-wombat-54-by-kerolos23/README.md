# Smooth Wombat 54

A loader UI element from Uiverse.io by kerolos23.

Source: https://uiverse.io/kerolos23/smooth-wombat-54

Author: kerolos23

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, animated, circle loader

Colors: #91ff00, #ff3d00

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by kerolos23 - Tags: loader, animated, circle loader */
.loader {
  transform: rotateZ(45deg);
  perspective: 1000px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  color: #91ff00;
}

.loader:before,
.loader:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  border-radius: 50%;
  transform: rotateX(70deg);
  animation: 1s spin linear infinite;
}

.loader:after {
  color: #FF3D00;
  transform: rotateY(70deg);
  animation-delay: .4s;
}

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotateZ(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotateZ(360deg);
  }
}

@keyframes rotateccw {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes spin {
  0%,
  100% {
    box-shadow: .2em 0px 0 0px currentcolor;
  }

  12% {
    box-shadow: .2em .2em 0 0 currentcolor;
  }

  25% {
    box-shadow: 0 .2em 0 0px currentcolor;
  }

  37% {
    box-shadow: -.2em .2em 0 0 currentcolor;
  }

  50% {
    box-shadow: -.2em 0 0 0 currentcolor;
  }

  62% {
    box-shadow: -.2em -.2em 0 0 currentcolor;
  }

  75% {
    box-shadow: 0px -.2em 0 0 currentcolor;
  }

  87% {
    box-shadow: .2em -.2em 0 0 currentcolor;
  }
}
```

# Brave Chipmunk 25

A loader UI element from Uiverse.io by gagan-gv.

Source: https://uiverse.io/gagan-gv/brave-chipmunk-25

Author: gagan-gv

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #0f9d58, #4285f4, #444, #db4437, #f4b400

Fonts: See styles.css

Spacing and radius: 10%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by gagan-gv - Tags: loader */
.loader {
  width: 60px;
  height: 60px;
  background: #4285f4;
  border-radius: 10%;
  animation: dice3 7s ease-in-out infinite;
  filter: drop-shadow(2px 3px 40px #444);
}

@keyframes dice3 {
  from, to {
    transform: translateX(-50px) rotateX(0deg);
  }

  25% {
    background: #db4437;
  }

  50% {
    background: #f4b400;
    transform: translateX(50px) rotate(360deg);
  }

  75% {
    background: #0f9d58;
  }
}
```

# Slimy Donkey 39

A loader UI element from Uiverse.io by gharsh11032000.

Source: https://uiverse.io/gharsh11032000/slimy-donkey-39

Author: gharsh11032000

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, loader, circle loader

Colors: #00dbde, #fc00ff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by gharsh11032000 - Tags: gradient, loader, circle loader */
.loader {
  width: 5em;
  height: 5em;
  background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
  animation: spin 3s infinite;
}

.loader::before {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px);
}

@keyframes spin {
  0% {
    transform: rotate(-45deg);
  }

  50% {
    transform: rotate(-360deg);
    border-radius: 50%;
  }

  100% {
    transform: rotate(-45deg);
  }
}
```

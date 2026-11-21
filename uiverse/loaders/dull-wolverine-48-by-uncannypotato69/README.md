# Dull Wolverine 48

A loader UI element from Uiverse.io by Uncannypotato69.

Source: https://uiverse.io/Uncannypotato69/dull-wolverine-48

Author: Uncannypotato69

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, animation, white, black, loading, loader, text animation, css

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 20%

## Source Code

### index.html

```html
<div class="textWrapper">
  <p class="text">Loading...</p>
  <div class="invertbox"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Uncannypotato69  - Tags: simple, animation, white, black, loading, loader, text animation, css */
.textWrapper {
  height: fit-content;
  min-width: 3rem;
  width: fit-content;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.25ch;
  position: relative;
  z-index: 0;
  color: white;
}

.invertbox {
  position: absolute;
  height: 100%;
  aspect-ratio: 1/1;
  left: 0;
  top: 0;
  border-radius: 20%;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: invert(100%);
  animation: move 2s ease-in-out infinite;
}

@keyframes move {
  50% {
    left: calc(100% - 3rem);
  }
}
```

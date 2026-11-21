# Cuddly Turkey 4

A loader UI element from Uiverse.io by G4b413l.

Source: https://uiverse.io/G4b413l/cuddly-turkey-4

Author: G4b413l

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, after

Colors: #212121, #28ae60

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by G4b413l - Tags: loader, after */
.loader {
  position: relative;
  width: 300px;
  height: 3px;
  background: linear-gradient(to right, transparent, #28AE60, transparent);
  overflow: hidden;
}

.loader::after {
  content: '';
  position: absolute;
  translate: -200px 0;
  width: 150px;
  height: 100%;
  background: linear-gradient(to right, transparent, #212121, transparent);
  animation: slide 1s infinite;
}

@keyframes slide {
  100% {
    translate: 300px 0;
  }
}
```

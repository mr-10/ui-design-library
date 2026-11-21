# Swift Hound 29

A loader UI element from Uiverse.io by choudhary-usman.

Source: https://uiverse.io/choudhary-usman/swift-hound-29

Author: choudhary-usman

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, icon, animation, loader, animated

Colors: #000, #0000

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by choudhary-usman  - Tags: simple, material design, icon, animation, loader, animated */
.loader {
  --s: 15px;
  width: calc(var(--s) * 2.33);
  aspect-ratio: 1;
  display: flex;
  justify-content: space-between;
}
.loader::before,
.loader::after {
  content: "";
  width: var(--s);
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background: var(--_g) top, var(--_g) bottom;
  background-size: 100% var(--s);
  transform-origin: 50% calc(100% - var(--s) / 2);
  animation: l30 1s infinite;
}
.loader::after {
  transform-origin: 50% calc(var(--s) / 2);
}
@keyframes l30 {
  70%,
  100% {
    transform: rotate(-270deg);
  }
}
```

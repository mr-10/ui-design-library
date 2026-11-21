# Average Firefox 33

A loader UI element from Uiverse.io by Sendung.

Source: https://uiverse.io/Sendung/average-firefox-33

Author: Sendung

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #e73535

Fonts: See styles.css

Spacing and radius: 20%

## Source Code

### index.html

```html
<div class="spinner"></div>
```

### styles.css

```css
/* From Uiverse.io by Sendung - Tags: loader */
.spinner {
  --s: 9px;
  width: 56px;
  height: 56px;
  background: #e73535;
  border-radius: 20%;
  animation: spinner-ehcge9 1.5s infinite linear;
  clip-path: polygon(0 0,calc(50% - var(--s)) 0,50% var(--s),calc(50% + var(--s)) 0,100% 0,100% calc(50% - var(--s)),calc(100% - var(--s)) 50%,100% calc(50% + var(--s)),100% 100%,calc(50% + var(--s)) 100%, 50% calc(100% - var(--s)),calc(50% - var(--s)) 100%,0 100%,0 calc(50% + var(--s)), var(--s) 50%, 0 calc(50% - var(--s)));
}

@keyframes spinner-ehcge9 {
  100% {
    transform: rotate(1turn);
  }
}
```

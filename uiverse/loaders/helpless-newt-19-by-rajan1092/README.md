# Helpless Newt 19

A loader UI element from Uiverse.io by Rajan1092.

Source: https://uiverse.io/Rajan1092/helpless-newt-19

Author: Rajan1092

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: 3d loader, dotted loader

Colors: #0000, #2b55a0

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="spinner"></div>
```

### styles.css

```css
/* From Uiverse.io by Rajan1092 - Tags: 3d loader, dotted loader */
.spinner {
  width: 56px;
  height: 56px;
  display: grid;
}

.spinner::before,
.spinner::after {
  content: "";
  grid-area: 1/1;
  background: var(--c) 50%  0, 
        var(--c) 50%  100%, 
        var(--c) 100% 50%, 
        var(--c) 0    50%;
  background-size: 13.4px 13.4px;
  background-repeat: no-repeat;
  animation: spinner-3hs4a3 1s infinite;
}

.spinner::before {
  --c: radial-gradient(farthest-side,#2b55a0 92%,#0000);
  margin: 4.5px;
  background-size: 9px 9px;
  animation-timing-function: linear;
}

.spinner::after {
  --c: radial-gradient(farthest-side,#2b55a0 92%,#0000);
}

@keyframes spinner-3hs4a3 {
  100% {
    transform: rotate(.5turn);
  }
}
```

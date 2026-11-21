# Chilly Lion 59

A loader UI element from Uiverse.io by PriyanshuGupta28.

Source: https://uiverse.io/PriyanshuGupta28/chilly-lion-59

Author: PriyanshuGupta28

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #000, #0000, #000000

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="custom-loader"></div>
```

### styles.css

```css
/* From Uiverse.io by PriyanshuGupta28 - Tags: loader */
.custom-loader {
  width: 50px;
  height: 50px;
  --c: radial-gradient(farthest-side,#000000 92%,#0000);
  background: var(--c) 50%  0, 
    var(--c) 50%  100%, 
    var(--c) 100% 50%, 
    var(--c) 0    50%;
  background-size: 10px 10px;
  background-repeat: no-repeat;
  animation: s8 1s infinite;
  position: relative;
}

.custom-loader::before {
  content: "";
  position: absolute;
  inset: 0;
  margin: 3px;
  background: repeating-conic-gradient(#0000 0 35deg,#000000 0 90deg);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 3px),#000 0);
  border-radius: 50%;
}

@keyframes s8 {
 
  100% {
    transform: rotate(.5turn)
  }
}
```

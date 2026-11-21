# Rude Vampirebat 100

A loader UI element from Uiverse.io by Pradeepsaranbishnoi.

Source: https://uiverse.io/Pradeepsaranbishnoi/rude-vampirebat-100

Author: Pradeepsaranbishnoi

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #000, #0000, #02dde1, #f8a201, #fa2402, #fdb3b0

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Pradeepsaranbishnoi - Tags: loader */
.loader {
  --s: 5px;
 /* control the size */
  width: calc(10*var(--s));
  display: grid;
  aspect-ratio: 1;
  border-radius: 50%;
  -webkit-mask: radial-gradient(50% 50%,#0000 calc(99% - 2*var(--s)),#000 calc(101% - 2*var(--s)));
  animation: r 4s linear infinite;
}

.loader:before {
  content: "";
  /* adjust the colors below */
  background: conic-gradient(from 25deg,#f8a201 25%,#fa2402 0 50%,#fdb3b0 0 75%,#02dde1 0);
  -webkit-mask: repeating-conic-gradient(#0000 0 25deg,#000 23% 25%),
    radial-gradient(var(--s) at var(--s) 50%,#000 97%,#0000) 
      left/calc(100% - 2*var(--s)) 100% repeat-x,
    radial-gradient(var(--s) at 50% var(--s),#000 97%,#0000) 
      top /100% calc(100% - 2*var(--s)) repeat-y;
}

@keyframes r {
  to {
    transform: rotate(1turn)
  }
}
```

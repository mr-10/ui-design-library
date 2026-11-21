# Curly Cheetah 74

A loader UI element from Uiverse.io by AqFox.

Source: https://uiverse.io/AqFox/curly-cheetah-74

Author: AqFox

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #0000, #004dff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="spinner"></div>
```

### styles.css

```css
/* From Uiverse.io by AqFox - Tags: loader */
.spinner {
 width: 56px;
 height: 56px;
 border-radius: 50%;
 padding: 7px;
 background: conic-gradient(from 135deg at top,#004dff 90deg, #0000 0) 0 calc(50% - 4px)/19px 9.5px,
          radial-gradient(farthest-side at bottom left,#0000 calc(100% - 7px),#004dff calc(100% - 6px) 99%,#0000) top right/50%  50% content-box content-box,
          radial-gradient(farthest-side at top,#0000 calc(100% - 7px),#004dff calc(100% - 6px) 99%,#0000) bottom   /100% 50% content-box content-box;
 background-repeat: no-repeat;
 animation: spinner-v8og74 1s infinite linear;
}

@keyframes spinner-v8og74 {
 100% {
  transform: rotate(1turn);
 }
}
```

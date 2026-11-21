# Tiny Wolverine 88

A loader UI element from Uiverse.io by AqFox.

Source: https://uiverse.io/AqFox/tiny-wolverine-88

Author: AqFox

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: blue, loader, spinner, wheel

Colors: #0000, #004dff

Fonts: See styles.css

Spacing and radius: 50%, inherit

## Source Code

### index.html

```html
<div class="spinner"></div>
```

### styles.css

```css
/* From Uiverse.io by AqFox - Tags: blue, loader, spinner, wheel */
.spinner {
 width: 56px;
 height: 56px;
 border-radius: 50%;
 color: #004dff;
 background: linear-gradient(currentColor 0 0) center/100% 4px,
          linear-gradient(currentColor 0 0) center/4px 100%,
          radial-gradient(farthest-side,#0000 calc(100% - 7px),currentColor calc(100% - 6px)),
          radial-gradient(circle 7px,currentColor 94%,#0000 0);
 background-repeat: no-repeat;
 animation: spinner-mu2ebf 1s infinite linear;
 position: relative;
}

.spinner::before {
 content: "";
 position: absolute;
 inset: 0;
 border-radius: inherit;
 background: inherit;
 transform: rotate(45deg);
}

@keyframes spinner-mu2ebf {
 to {
  transform: rotate(.5turn);
 }
}
```

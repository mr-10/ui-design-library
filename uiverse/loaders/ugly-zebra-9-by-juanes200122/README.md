# Ugly Zebra 9

A loader UI element from Uiverse.io by Juanes200122.

Source: https://uiverse.io/Juanes200122/ugly-zebra-9

Author: Juanes200122

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, animation, loader, circle, html, css

Colors: #000

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Juanes200122 - Tags: simple, animation, loader, circle, html, css */
.loader {
  width: 15px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  box-shadow: -20px 0px,20px 0px;
  animation: l18 1s infinite;
}

@keyframes l18 {
 
  25% {
    box-shadow: -20px -20px, 20px 20px
  }

  50% {
    box-shadow: 0px -20px,  0px 20px
  }

  75% {
    box-shadow: 20px -20px,-20px 20px
  }

  100% {
    box-shadow: 20px   0px,-20px  0px
  }
}
```

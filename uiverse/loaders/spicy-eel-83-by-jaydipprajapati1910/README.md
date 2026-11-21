# Spicy Eel 83

A loader UI element from Uiverse.io by JaydipPrajapati1910.

Source: https://uiverse.io/JaydipPrajapati1910/spicy-eel-83

Author: JaydipPrajapati1910

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, loader, ninja loader

Colors: #000, #0000, #0000f4

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by JaydipPrajapati1910 - Tags: animation, loader, ninja loader */
.loader {
  width: 160px;
  height: 160px;
  color: #0000F4;
  background: conic-gradient(from  165deg at top   ,#0000, currentColor 1deg 30deg,#0000 31deg) top,
    conic-gradient(from   75deg at left  ,#0000, currentColor 1deg 30deg,#0000 31deg) left,
    conic-gradient(from  -15deg at bottom,#0000, currentColor 1deg 30deg,#0000 31deg) bottom, 
    conic-gradient(from -105deg at right ,#0000, currentColor 1deg 30deg,#0000 31deg) right;
  background-size: 100% 50%,50% 100%;
  -webkit-mask: radial-gradient(circle 10px,#0000 90%,#000);
  background-repeat: no-repeat;
  animation: sh1 1.5s infinite linear;
}

@keyframes sh1 {
 
  100% {
    transform: rotate(1turn)
  }
}
```

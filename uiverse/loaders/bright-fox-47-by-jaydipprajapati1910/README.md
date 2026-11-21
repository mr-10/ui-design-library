# Bright Fox 47

A loader UI element from Uiverse.io by JaydipPrajapati1910.

Source: https://uiverse.io/JaydipPrajapati1910/bright-fox-47

Author: JaydipPrajapati1910

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: red, loader, location

Colors: #0000, #ff4747

Fonts: See styles.css

Spacing and radius: 50% 50% 0 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by JaydipPrajapati1910 - Tags: red, loader, location  */
.loader {
  width: 44.8px;
  height: 44.8px;
  position: relative;
  transform: rotate(45deg);
}

.loader:before,
.loader:after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50% 50% 0 50%;
  background: #0000;
  background-image: radial-gradient(circle 11.2px at 50% 50%,#0000 94%, #ff4747);
}

.loader:after {
  animation: pulse-ytk0dhmd 1s infinite;
  transform: perspective(336px) translateZ(0px);
}

@keyframes pulse-ytk0dhmd {
  to {
    transform: perspective(336px) translateZ(168px);
    opacity: 0;
  }
}
```

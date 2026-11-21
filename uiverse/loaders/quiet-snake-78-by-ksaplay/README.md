# Quiet Snake 78

A loader UI element from Uiverse.io by KSAplay.

Source: https://uiverse.io/KSAplay/quiet-snake-78

Author: KSAplay

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #0060fa

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by KSAplay - Tags: loader */
.loader {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader::before,
.loader::after {
  position: absolute;
  content: "";
  height: 8em;
  width: 8em;
  border: 1em solid #0060fa;
  border-radius: 50%;
  animation: loader_79178 2s linear infinite;
}

.loader::after {
  opacity: 0;
  animation-delay: 1s;
}

@keyframes loader_79178 {
  0% {
    border: 1em solid #0060fa;
    transform: scale(0);
    opacity: 1;
  }

  100% {
    border: 0 solid #0060fa;
    transform: scale(1);
    opacity: 0;
  }
}
```

# Ancient Falcon 18

A loader UI element from Uiverse.io by dylanharriscameron.

Source: https://uiverse.io/dylanharriscameron/ancient-falcon-18

Author: dylanharriscameron

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loading, loader, infinite

Colors: #0031f2, #006dfe, #f9f9f9

Fonts: See styles.css

Spacing and radius: 10px, 5px

## Source Code

### index.html

```html
<div class="loaderBar"></div>
```

### styles.css

```css
/* From Uiverse.io by dylanharriscameron - Tags: loading, loader, infinite */
.loaderBar {
  width: calc(160px / 0.707);
  height: 10px;
  background: #F9F9F9;
  border-radius: 10px;
  border: 1px solid #006DFE;
  position: relative;
  overflow: hidden;
}

.loaderBar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 5px;
  background: repeating-linear-gradient(45deg, #0031F2 0 30px, #006DFE 0 40px) right/200% 100%;
  animation: fillProgress 6s ease-in-out infinite, lightEffect 1s infinite linear;
  animation-fill-mode: forwards;
}

@keyframes fillProgress {
  0% {
    width: 0;
  }

  33% {
    width: 33.333%;
  }

  66% {
    width: 66.67%;
  }

  100% {
    width: 100%;
  }
}

@keyframes lightEffect {
  0%, 20%, 40%, 60%, 80%, 100% {
    background: repeating-linear-gradient(45deg, #0031F2 0 30px, #006DFE 0 40px) right/200% 100%;
  }

  10%, 30%, 50%, 70%, 90% {
    background: repeating-linear-gradient(45deg, #0031F2 0 30px, #006DFE 0 40px, rgba(255, 255, 255, 0.3) 0 40px) right/200% 100%;
  }
}
```

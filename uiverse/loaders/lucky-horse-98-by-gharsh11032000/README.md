# Lucky Horse 98

A loader UI element from Uiverse.io by gharsh11032000.

Source: https://uiverse.io/gharsh11032000/lucky-horse-98

Author: gharsh11032000

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: —

Colors: #5c469c, #d4adfc

Fonts: See styles.css

Spacing and radius: 10px, 6px

## Source Code

### index.html

```html
<div class="loader">
  <div class="loader-small"></div>
  <div class="loader-large"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by gharsh11032000 - Tags:  */
.loader {
  position: relative;
  width: 70px;
  height: 70px;
}

.loader-large {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: #D4ADFC;
  border-radius: 10px;
  animation: loading 2s infinite;
}

.loader-small {
  position: absolute;
  width: 50%;
  height: 50%;
  inset: 0;
  margin: auto;
  background-color: #5C469C;
  z-index: 2;
  border-radius: 6px;
  animation: loading 2s infinite reverse;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateX(180deg);
  }
}
```

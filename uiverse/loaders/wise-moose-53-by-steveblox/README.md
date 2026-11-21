# Wise Moose 53

A loader UI element from Uiverse.io by SteveBloX.

Source: https://uiverse.io/SteveBloX/wise-moose-53

Author: SteveBloX

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loading, progress, progress bar, loader, dark, animated, loader, background, gray, white, minimal, bar, progress, horizontal

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 7px

## Source Code

### index.html

```html
<div class="progress-loader">
  <div class="progress"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by SteveBloX  - Tags: loading, progress, progress bar, loader, dark, animated, loader, background, gray, white, minimal, bar, progress, horizontal */
.progress-loader {
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 150px;
  background: rgba(236, 236, 238, 0.253);
  height: 10px;
  border-radius: 7px;
  overflow: hidden;
}

.progress {
  width: 1px;
  height: 10px;
  border-radius: 7px;
  background: rgb(255, 255, 255);
  transition: 0.5s;
  animation: loading_44 5s cubic-bezier(0.4, 1.01, 1, 1) infinite;
}

@keyframes loading_44 {
  0% {
    width: 0%;
  }

  50% {
    width: 100%;
  }

  100% {
    width: 0%;
  }
}
```

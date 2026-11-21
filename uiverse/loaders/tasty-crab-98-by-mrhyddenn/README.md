# Tasty Crab 98

A loader UI element from Uiverse.io by mrhyddenn.

Source: https://uiverse.io/mrhyddenn/tasty-crab-98

Author: mrhyddenn

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: progress, progress bar, loader

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
/* From Uiverse.io by mrhyddenn - Tags: progress, progress bar, loader */
.progress-loader {
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

.progress-loader {
  width: 150px;
  background: rgba(236, 236, 238, 0.253);
  height: 3px;
  border-radius: 7px;
}

.progress {
  content: '';
  width: 1px;
  height: 3px;
  border-radius: 7px;
  background: rgb(255, 255, 255);
  transition: 0.5s;
  animation: loading1274 2s ease infinite;
}

@keyframes loading1274 {
  0% {
    width: 0%;
  }

  10% {
    width: 10%;
  }

  50% {
    width: 40%;
  }

  60% {
    width: 60%;
  }

  100% {
    width: 100%;
  }
}
```

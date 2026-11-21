# Yellow Deer 12

A loader UI element from Uiverse.io by doniaskima.

Source: https://uiverse.io/doniaskima/yellow-deer-12

Author: doniaskima

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, loader

Colors: #000, #0000, #ddd

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by doniaskima - Tags: simple, material design, loader */
/* HTML: <div class="loader"></div> */
.loader {
  width: 120px;
  height: 20px;
  background: linear-gradient(#000 50%,#0000 0),
    linear-gradient(#0000 50%,#000 0),
    linear-gradient(#000 50%,#0000 0),
    linear-gradient(#0000 50%,#000 0),
    linear-gradient(#000 50%,#0000 0),
    linear-gradient(#0000 50%,#000 0)
    #ddd;
  background-size: calc(100%/6 + 1px) 200%;
  background-repeat: no-repeat;
  animation: l12 2s infinite;
}

@keyframes l12 {
  0% {
    background-position: calc(0*100%/5) 100%,calc(1*100%/5)   0%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%
  }

  16.67% {
    background-position: calc(0*100%/5)   0%,calc(1*100%/5)   0%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%
  }

  33.33% {
    background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%
  }

  50% {
    background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%
  }

  66.67% {
    background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5) 100%,calc(5*100%/5)   0%
  }

  83.33% {
    background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5)   0%,calc(5*100%/5)   0%
  }

  100% {
    background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5)   0%,calc(5*100%/5) 100%
  }
}
```

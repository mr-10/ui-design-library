# Serious Owl 38

A loader UI element from Uiverse.io by vikramsinghnegi.

Source: https://uiverse.io/vikramsinghnegi/serious-owl-38

Author: vikramsinghnegi

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loading, loader, bar

Colors: #0000, #474bff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="bars"></div>
```

### styles.css

```css
/* From Uiverse.io by vikramsinghnegi  - Tags: loading, loader, bar */
.bars {
  width: 50.5px;
  height: 60.599999999999994px;
  --c: repeating-linear-gradient(90deg, #474bff 0 10.1px, #0000 0 20.2px);
  background: var(--c), var(--c), var(--c), var(--c);
  background-size: 100% 21%;
  background-repeat: no-repeat;
  animation: bars-yrfh98 0.75s infinite alternate;
}

@keyframes bars-yrfh98 {
  0%,
  10% {
    background-position: 0 0, 0 25%, 0 50%, 0 75%;
  }

  25% {
    background-position: 0 0, 0 25%, 0 50%, 0 100%;
  }

  50% {
    background-position: 0 0, 0 25%, 0 75%, 0 100%;
  }

  75% {
    background-position: 0 0, 0 50%, 0 75%, 0 100%;
  }

  90%,
  100% {
    background-position: 0 25%, 0 50%, 0 75%, 0 100%;
  }
}
```

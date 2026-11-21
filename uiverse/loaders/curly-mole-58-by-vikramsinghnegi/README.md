# Curly Mole 58

A loader UI element from Uiverse.io by vikramsinghnegi.

Source: https://uiverse.io/vikramsinghnegi/curly-mole-58

Author: vikramsinghnegi

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, loader, blob

Colors: #474bff, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="blob"></div>
```

### styles.css

```css
/* From Uiverse.io by vikramsinghnegi  - Tags: simple, loader, blob */
.blob {
  width: 112px;
  height: 112px;
  display: grid;
  background: #fff;
  filter: blur(5.6px) contrast(10);
  padding: 11.2px;
  mix-blend-mode: darken;
}

.blob:before,
.blob:after {
  content: "";
  grid-area: 1/1;
  width: 44.8px;
  height: 44.8px;
  background: #474bff;
  animation: blob-rhf26m 2s infinite;
}

.blob:after {
  animation-delay: -1s;
}

@keyframes blob-rhf26m {
  0% {
    transform: translate(0, 0);
  }

  25% {
    transform: translate(100%, 0);
  }

  50% {
    transform: translate(100%, 100%);
  }

  75% {
    transform: translate(0, 100%);
  }

  100% {
    transform: translate(0, 0);
  }
}
```

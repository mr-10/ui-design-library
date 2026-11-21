# Stale Panda 59

A loader UI element from Uiverse.io by elijahgummer.

Source: https://uiverse.io/elijahgummer/stale-panda-59

Author: elijahgummer

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, red, loader, diamond, fade, mitsubishi, appear

Colors: #000, #0000, #fd135a

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by elijahgummer  - Tags: simple, red, loader, diamond, fade, mitsubishi, appear */
.loader {
  width: 50px;
  height: calc(50px * 0.866);
  background: #fd135a;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  --c: at 50% 66%, #000 60deg, #0000 0;
  -webkit-mask:
    conic-gradient(from 30deg var(--c)) right,
    conic-gradient(from 150deg var(--c)) bottom,
    conic-gradient(from -90deg var(--c)) left,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  -webkit-mask-repeat: no-repeat;
  animation: appear 1.5s infinite;
}
@keyframes appear {
  0% {
    -webkit-mask-size:
      0 0,
      0 0,
      0 0,
      auto;
  }
  13.33% {
    -webkit-mask-size:
      100% 100%,
      0 0,
      0 0,
      auto;
  }
  26.67% {
    -webkit-mask-size:
      100% 100%,
      100% 100%,
      0 0,
      auto;
  }
  40%,
  60% {
    -webkit-mask-size:
      100% 100%,
      100% 100%,
      100% 100%,
      auto;
  }
  73.33% {
    -webkit-mask-size:
      0 0,
      100% 100%,
      100% 100%,
      auto;
  }
  86.67% {
    -webkit-mask-size:
      0 0,
      0 0,
      100% 100%,
      auto;
  }
  100% {
    -webkit-mask-size:
      0 0,
      0 0,
      0 0,
      auto;
  }
}
```

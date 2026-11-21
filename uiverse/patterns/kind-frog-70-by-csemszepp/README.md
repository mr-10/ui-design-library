# Kind Frog 70

A pattern UI element from Uiverse.io by csemszepp.

Source: https://uiverse.io/csemszepp/kind-frog-70

Author: csemszepp

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, pattern

Colors: #0000, #999999, #cdcbcc, #f2f2f2

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by csemszepp - Source: https://github.com/Afif13 - Website: https://github.com/Afif13  - Name: Afif13  - Tags: simple, material design, pattern */
.container {
  width: 100%;
  height: 100%;
  --s: 84px;
  --c1: #f2f2f2;
  --c2: #cdcbcc;
  --c3: #999999;

  --_g: 0 120deg, #0000 0;
  background: conic-gradient(
      from 0deg at calc(500% / 6) calc(100% / 3),
      var(--c3) var(--_g)
    ),
    conic-gradient(
      from -120deg at calc(100% / 6) calc(100% / 3),
      var(--c2) var(--_g)
    ),
    conic-gradient(
      from 120deg at calc(100% / 3) calc(500% / 6),
      var(--c1) var(--_g)
    ),
    conic-gradient(
      from 120deg at calc(200% / 3) calc(500% / 6),
      var(--c1) var(--_g)
    ),
    conic-gradient(
      from -180deg at calc(100% / 3) 50%,
      var(--c2) 60deg,
      var(--c1) var(--_g)
    ),
    conic-gradient(
      from 60deg at calc(200% / 3) 50%,
      var(--c1) 60deg,
      var(--c3) var(--_g)
    ),
    conic-gradient(
      from -60deg at 50% calc(100% / 3),
      var(--c1) 120deg,
      var(--c2) 0 240deg,
      var(--c3) 0
    );
  background-size: calc(var(--s) * 1.732) var(--s);
}
```

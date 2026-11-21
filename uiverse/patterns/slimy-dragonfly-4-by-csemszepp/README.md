# Slimy Dragonfly 4

A pattern UI element from Uiverse.io by csemszepp.

Source: https://uiverse.io/csemszepp/slimy-dragonfly-4

Author: csemszepp

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, pattern

Colors: #0000, #170409, #67917a

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
  --s: 140px; /* control the size */

  --_g: #0000 52%, #170409 /* first color */ 54% 57%, #0000 59%;
  background: radial-gradient(farthest-side at -33.33% 50%, var(--_g)) 0
      calc(var(--s) / 2),
    radial-gradient(farthest-side at 50% 133.33%, var(--_g)) calc(var(--s) / 2)
      0,
    radial-gradient(farthest-side at 133.33% 50%, var(--_g)),
    radial-gradient(farthest-side at 50% -33.33%, var(--_g)), #67917a; /* second color */
  background-size: calc(var(--s) / 4.667) var(--s),
    var(--s) calc(var(--s) / 4.667);
}
```

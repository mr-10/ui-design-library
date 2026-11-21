# Fuzzy Eel 41

A pattern UI element from Uiverse.io by csemszepp.

Source: https://uiverse.io/csemszepp/fuzzy-eel-41

Author: csemszepp

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, pattern

Colors: #0000, #0008, #61a6ab, #ab3e5b, #accec0, #ffbe40

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
  --c1: #ab3e5b;
  --c2: #ffbe40;

  --_g: #0000 25%, #0008 47%, var(--c1) 53% 147%, var(--c2) 153% 247%,
    var(--c1) 253% 347%, var(--c2) 353% 447%, var(--c1) 453% 547%, #0008 553%,
    #0000 575%;
  --_s: calc(25% / 3) calc(25% / 4) at 50%;
  background: radial-gradient(var(--_s) 100%, var(--_g)),
    radial-gradient(var(--_s) 100%, var(--_g)) calc(var(--s) / 2)
      calc(3 * var(--s) / 4),
    radial-gradient(var(--_s) 0, var(--_g)) calc(var(--s) / 2) 0,
    radial-gradient(var(--_s) 0, var(--_g)) 0 calc(3 * var(--s) / 4),
    repeating-linear-gradient(
      90deg,
      #accec0 calc(25% / -6) calc(25% / 6),
      #61a6ab 0 calc(25% / 2)
    );
  background-size: var(--s) calc(3 * var(--s) / 2);
}
```

# Average Rat 98

A pattern UI element from Uiverse.io by csemszepp.

Source: https://uiverse.io/csemszepp/average-rat-98

Author: csemszepp

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, pattern

Colors: #0000, #99b898, #e84a5f, #fecea8, #ff847c

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
  --s: 150px; /* control the size */
  --c1: #ff847c;
  --c2: #e84a5f;
  --c3: #fecea8;
  --c4: #99b898;

  background: conic-gradient(
      from 45deg at 75% 75%,
      var(--c3) 90deg,
      var(--c1) 0 180deg,
      #0000 0
    ),
    conic-gradient(from -45deg at 25% 25%, var(--c3) 90deg, #0000 0),
    conic-gradient(from -45deg at 50% 100%, #0000 180deg, var(--c3) 0),
    conic-gradient(
      from -45deg,
      var(--c1) 90deg,
      var(--c2) 0 225deg,
      var(--c4) 0
    );
  background-size: var(--s) var(--s);
}
```

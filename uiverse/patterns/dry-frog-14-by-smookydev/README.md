# Dry Frog 14

A pattern UI element from Uiverse.io by SmookyDev.

Source: https://uiverse.io/SmookyDev/dry-frog-14

Author: SmookyDev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: cube, creative, css, premium, pattern

Colors: #0000, #c77979, #ffffff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by SmookyDev  - Tags: cube, creative, css, premium, pattern */
.container {
  width: 100%;
  height: 100%;
  /* Add your background pattern here */
  background: linear-gradient(
      45deg,
      #0000 calc(25% / 3),
      #ffffff 0 calc(50% / 3),
      #0000 0 calc(250% / 3),
      #ffffff 0 calc(275% / 3),
      #0000 0
    ),
    linear-gradient(
      45deg,
      #ffffff calc(25% / 3),
      #0000 0 calc(50% / 3),
      #ffffff 0 25%,
      #0000 0 75%,
      #ffffff 0 calc(250% / 3),
      #0000 0 calc(275% / 3),
      #ffffff 0
    ),
    linear-gradient(
      -45deg,
      #0000 calc(25% / 3),
      #ffffff 0 calc(50% / 3),
      #0000 0 calc(250% / 3),
      #ffffff 0 calc(275% / 3),
      #0000 0
    ),
    linear-gradient(
        -45deg,
        #ffffff calc(25% / 3),
        #0000 0 calc(50% / 3),
        #ffffff 0 25%,
        #0000 0 75%,
        #ffffff 0 calc(250% / 3),
        #0000 0 calc(275% / 3),
        #ffffff 0
      )
      #c77979;
  background-size: 106px 106px;
  background-position: 0 0, 53px 53px;
}
```

# Honest Chicken 11

A pattern UI element from Uiverse.io by themrsami.

Source: https://uiverse.io/themrsami/honest-chicken-11

Author: themrsami

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: red, blue, pattern, thmrsami

Colors: #3cb371, #7cfc00

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by themrsami - Tags: red, blue, pattern, thmrsami */
.container {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(45deg, #3cb371 25%, transparent 25%),
    linear-gradient(-45deg, #3cb371 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #7cfc00 75%),
    linear-gradient(-45deg, transparent 75%, #7cfc00 75%);
  background-size: 100px 100px;
  background-position: 0 0, 50px 0, 50px -50px, 0px 50px;
}
```

# Thin Bulldog 22

A pattern UI element from Uiverse.io by AspenBranch.

Source: https://uiverse.io/AspenBranch/thin-bulldog-22

Author: AspenBranch

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, white, pattern

Colors: #ccc

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by AspenBranch  - Tags: simple, white, pattern */
.container {
  width: 100%;
  height: 100%;
  /* Add your background pattern here */
  background-color: white;
  background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
    linear-gradient(-45deg, #ccc 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #ccc 75%),
    linear-gradient(-45deg, transparent 75%, #ccc 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}
```

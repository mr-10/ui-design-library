# Clever Turtle 2

A button UI element from Uiverse.io by Praashoo7.

Source: https://uiverse.io/Praashoo7/clever-turtle-2

Author: Praashoo7

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: brown, button, stitched

Colors: #daa06d, #eaddca

Fonts: See styles.css

Spacing and radius: 15px

## Source Code

### index.html

```html
<button>
  BUTTON
</button>
```

### styles.css

```css
/* From Uiverse.io by Praashoo7 - Tags: brown, button, stitched */
button {
  outline: none;
  color: #DAA06D;
  padding: 1em;
  padding-left: 3em;
  padding-right: 3em;
  border: 2px dashed #DAA06D;
  border-radius: 15px;
  background-color: #EADDCA;
  box-shadow: 0 0 0 4px #EADDCA, 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  transition: .1s ease-in-out, .4s color;
}

button:active {
  transform: translateX(0.1em) translateY(0.1em);
  box-shadow: 0 0 0 4px #EADDCA, 1.5px 1.5px 2.5px 1.5px rgba(0, 0, 0, 0.5);
}
```

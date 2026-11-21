# Lucky Fireant 71

A button UI element from Uiverse.io by Voxybuns.

Source: https://uiverse.io/Voxybuns/lucky-fireant-71

Author: Voxybuns

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #000000, #e8e8e8

Fonts: See styles.css

Spacing and radius: var(--button_radius)

## Source Code

### index.html

```html
<button>
  <span class="button_top"> Button
  </span>
</button>
```

### styles.css

```css
/* From Uiverse.io by Voxybuns - Tags: button */
button {
  /* Variables */
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  --button_outline_color: #000000;
  font-size: 17px;
  font-weight: bold;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
}

.button_top {
  display: block;
  box-sizing: border-box;
  border: 2px solid var(--button_outline_color);
  border-radius: var(--button_radius);
  padding: 0.75em 1.5em;
  background: var(--button_color);
  color: var(--button_outline_color);
  transform: translateY(-0.2em);
  transition: transform 0.1s ease;
}

button:hover .button_top {
  /* Pull the button upwards when hovered */
  transform: translateY(-0.33em);
}

button:active .button_top {
  /* Push the button downwards when pressed */
  transform: translateY(0);
}
```

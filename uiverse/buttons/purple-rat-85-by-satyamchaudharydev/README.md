# Purple Rat 85

A button UI element from Uiverse.io by satyamchaudharydev.

Source: https://uiverse.io/satyamchaudharydev/purple-rat-85

Author: satyamchaudharydev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: 3d, button

Colors: #000, #c0392b, #e74c3c, #fff

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<button>
    Click me
</button>
```

### styles.css

```css
/* From Uiverse.io by satyamchaudharydev - Tags: 3d, button */
button {
  --bg: #e74c3c;
  --text-color: #fff;
  position: relative;
  width: 150px;
  border: none;
  background: var(--bg);
  color: var(--text-color);
  padding: 1em;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.2s;
  border-radius: 5px;
  opacity: 0.8;
  letter-spacing: 1px;
  box-shadow: #c0392b 0px 7px 2px, #000 0px 8px 5px;
}

button:hover {
  opacity: 1;
}

button:active {
  top: 4px;
  box-shadow: #c0392b 0px 3px 2px,#000 0px 3px 5px;
}
```

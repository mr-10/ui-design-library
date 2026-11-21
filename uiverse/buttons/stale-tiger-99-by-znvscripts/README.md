# Stale Tiger 99

A button UI element from Uiverse.io by znvscripts.

Source: https://uiverse.io/znvscripts/stale-tiger-99

Author: znvscripts

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, button, click effect

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 12px

## Source Code

### index.html

```html
<button>Button</button>
```

### styles.css

```css
/* From Uiverse.io by znvscripts  - Tags: simple, button, click effect */
button {
  position: relative;
  background: transparent;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  touch-action: manipulation;
  font-size: 1.1rem;
  color: white;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.3);
  background: rgb(255, 0, 0);
  border-radius: 12px;
  padding: 12px 27px;
  border: 3px solid black;
}

button:hover {
  filter: brightness(110%);
}

button:active {
  transform: translateY(2px);
  transition: transform 34ms;
}
```

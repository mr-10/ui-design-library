# Hard Sloth 56

A button UI element from Uiverse.io by SuliLevente.

Source: https://uiverse.io/SuliLevente/hard-sloth-56

Author: SuliLevente

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #040810, #2d6fbb, #c7c7c7

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button>Button</button>
```

### styles.css

```css
/* From Uiverse.io by SuliLevente - Tags: button */
button {
  background-color: #040810;
  color: #C7C7C7;
  padding: 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 17px;
  overflow: hidden;
  position: relative;
  border: 3px double #2D6FBB;
  z-index: 1;
}

button::before {
  content: "";
  background-color: #2D6FBB;
  transform: translateX(-100%);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transition: all 0.3s;
  z-index: -1;
}

button:hover::before {
  transform: translateX(0);
}

button::after {
  content: "";
  background-color: #2D6FBB;
  transform: translateX(100%);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transition: all 0.3s;
  z-index: -1;
}

button:hover::after {
  transform: translateX(0);
}
```

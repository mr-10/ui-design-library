# Bright Termite 75

A button UI element from Uiverse.io by mi-series.

Source: https://uiverse.io/mi-series/bright-termite-75

Author: mi-series

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #000, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button>
  Hover Me <span>⟶</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by mi-series - Tags: button */
button {
  width: 170px;
  height: 60px;
  color: #fff;
  background: #000;
  font-size: 17px;
  text-decoration: none;
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0 #000;
  transition: 0.5s;
  position: relative;
}

button:hover {
  box-shadow: 8px 10px 0 #000;
  background: transparent;
  border: 2px solid #000;
  color: #000;
  margin-top: 5px;
}

button span {
  margin-left: 10px;
  width: 0;
  overflow: hidden;
  transition: 0.4s;
}

button:hover span {
  width: 30px;
}
```

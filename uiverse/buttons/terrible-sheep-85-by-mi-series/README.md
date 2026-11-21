# Terrible Sheep 85

A button UI element from Uiverse.io by mi-series.

Source: https://uiverse.io/mi-series/terrible-sheep-85

Author: mi-series

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: minimalist, button, minimal

Colors: #2f3c7e, #fbeaeb

Fonts: See styles.css

Spacing and radius: 6px

## Source Code

### index.html

```html
<button>
  Hover Me
</button>
```

### styles.css

```css
/* From Uiverse.io by mi-series - Tags: minimalist, button, minimal */
button {
  width: 160px;
  line-height: 40px;
  font-weight: 500px;
  font-size: 17px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0;
  background: #FBEAEB;
  position: relative;
  z-index: 2;
  color: #FBEAEB;
  perspective: 300px;
  transform-style: preserve-3d;
  border-radius: 6px;
  border: none;
}

button:hover {
  color: #2F3C7E;
}

button::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: 500px;
  background: #2F3C7E;
  border-radius: 6px;
  z-index: -1;
  transform-origin: center bottom;
  transform: rotateX(0);
  transition: all 0.3s ease;
}

button:hover::after {
  transform: rotateX(-180deg);
}
```

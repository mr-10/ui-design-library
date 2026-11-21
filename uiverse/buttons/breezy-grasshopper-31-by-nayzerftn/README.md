# Breezy Grasshopper 31

A button UI element from Uiverse.io by Nayzerftn.

Source: https://uiverse.io/Nayzerftn/breezy-grasshopper-31

Author: Nayzerftn

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover, active

Colors: #4b4b4b, #522ba7, #ffffff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<button class="btn-hover">HOVER ME</button>
```

### styles.css

```css
/* From Uiverse.io by Nayzerftn - Tags: button, hover, active */
.btn-hover {
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ffffff;
  background-color: #4b4b4b;
  border: none;
  outline: none;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.btn-hover:hover {
  background-color: #522ba7;
}

.btn-hover::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #ffffff;
  opacity: 0.8;
  transition: all 0.5s ease-out;
}

.btn-hover:hover::before {
  transform: translate(-50%, -50%) scale(20);
  opacity: 0;
}
```

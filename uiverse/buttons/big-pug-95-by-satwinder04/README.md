# Big Pug 95

A button UI element from Uiverse.io by Satwinder04.

Source: https://uiverse.io/Satwinder04/big-pug-95

Author: Satwinder04

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #fa4545, #ffffff

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<button class="complex-button">HOVER ME</button>
```

### styles.css

```css
/* From Uiverse.io by Satwinder04 - Tags: button */
.complex-button {
  background-color: #fa4545;
 /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  /* border-radius: 10px; */
}

.complex-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  transform: skewX(-30deg);
  transition: all 1s ease-in-out;
}

.complex-button:hover::before {
  left: 100%;
}

.complex-button::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.5s ease-in-out;
}

.complex-button:hover::after {
  width: 100%;
}

.complex-button span {
  position: relative;
  z-index: 1;
}

.complex-button:hover {
  color: #ffffff;
  background-color: #fa4545;
}
```

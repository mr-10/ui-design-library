# Wet Zebra 95

A button UI element from Uiverse.io by Dashrath-Sharma.

Source: https://uiverse.io/Dashrath-Sharma/wet-zebra-95

Author: Dashrath-Sharma

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover, glow, code, border, box

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button class="border-el-btn">
  Button
  <span class="b1"></span>
  <span class="b2"></span>
  <span class="b3"></span>
  <span class="b4"></span>
</button>
```

### styles.css

```css
/* From Uiverse.io by Dashrath-Sharma - Tags: button, hover, glow, code, border, box */
button {
  color: red;
  outline: none;
  border: none;
  font-size: 17px;
  padding: 1em 2em;
  position: relative;
  background: none;
  cursor: pointer;
}

button:active {
  transform: scale(.98);
  box-shadow: .1px .1px 2px red;
}

button span {
  position: absolute;
  background: red;
  transition: .5s;
  box-shadow: 1px 1px 20px red;
}

button span:nth-child(1) {
  top: 0;
  left: 0;
  width: 3px;
  height: 30%;
}

button:hover span:nth-child(1) {
  height: 100%;
}

button span:nth-child(2) {
  top: 0;
  left: 0;
  width: 15%;
  height: 3px;
}

button:hover span:nth-child(2) {
  width: 100%;
}

button span:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 3px;
  height: 30%;
}

button:hover span:nth-child(3) {
  height: 100%;
}

button span:nth-child(4) {
  bottom: 0;
  right: 0;
  width: 15%;
  height: 3px;
}

button:hover span:nth-child(4) {
  width: 100%;
}
```

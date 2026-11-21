# Weak Swan 50

A button UI element from Uiverse.io by mrhyddenn.

Source: https://uiverse.io/mrhyddenn/weak-swan-50

Author: mrhyddenn

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #222222, #333, #ff1867, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button>
    <span>Button</span><i></i>
</button>
```

### styles.css

```css
/* From Uiverse.io by mrhyddenn - Tags: button */
button {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 10px 30px;
  transition: 0.5s;
  position: relative;
  font-size: 17px;
  background: #333;
  border: none;
  color: #fff;
}

button:hover {
  letter-spacing: 0.25em;
  background: #ff1867;
  color: #ff1867;
  box-shadow: 0 0 45px #ff1867;
}

button::before {
  content: '';
  position: absolute;
  inset: 2px;
  background: #222222;
}

button span {
  position: relative;
  z-index: 1;
}

button i {
  position: absolute;
  inset: 0;
  display: block;
}

button i::before {
  content: '';
  position: absolute;
  border: 2px solid #ff1867;
  width: 7px;
  height: 4px;
  top: -3.5px;
  left: 80%;
  background: #222222;
  transform: translateX(-50%);
  transition: 0.5s;
}

button:hover i::before {
  width: 20px;
  left: 20%;
}

button i::after {
  content: '';
  position: absolute;
  border: 2px solid #ff1867;
  width: 7px;
  height: 4px;
  bottom: -3.5px;
  left: 20%;
  background: #222222;
  transform: translateX(-50%);
  transition: 0.5s;
}

button:hover i::after {
  width: 20px;
  left: 80%;
}
```

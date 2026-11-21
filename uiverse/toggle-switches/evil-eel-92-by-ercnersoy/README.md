# Evil Eel 92

A toggle switch UI element from Uiverse.io by ercnersoy.

Source: https://uiverse.io/ercnersoy/evil-eel-92

Author: ercnersoy

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, switch, creative

Colors: #2196f3, #72eb67, #ccc

Fonts: See styles.css

Spacing and radius: 1rem 0rem 1rem

## Source Code

### index.html

```html
<label class="switch">
  <input class="ch" type="checkbox" />
  <span class="slider"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by ercnersoy  - Tags: simple, switch, creative */
/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 1.5em;
}
/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 1rem 0rem 1rem;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.5em;
  width: 1.4em;
  left: 0em;
  bottom: 0em;
  background-color: white;
  transition: 0.4s;
  border-radius: 1rem 0rem 1rem;
  border: 3px solid white;
}

.ch:checked + .slider {
  background-color: #72eb67;
}

.ch:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

.ch:checked + .slider:before {
  transform: translateX(2.2em);
  background-color: green;
  box-shadow: 0px 0px 40px 5px #72eb67;
  border: 3px solid white;
}

.ch:checked + .slider::after {
  content: "|";
  color: white;
  position: absolute;
  right: 0.3rem;
  top: -3.3px;
  transform: rotate(45deg);
}
```

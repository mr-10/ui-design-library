# Dull Deer 65

A toggle switch UI element from Uiverse.io by shadowfax29.

Source: https://uiverse.io/shadowfax29/dull-deer-65

Author: shadowfax29

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch, moon, sun

Colors: #2196f3

Fonts: See styles.css

Spacing and radius: 20px, 30px, 50px

## Source Code

### index.html

```html
<label class="switch">
  <input type="checkbox">
  <span class="slider"></span>

</label>
```

### styles.css

```css
/* From Uiverse.io by shadowfax29 - Tags: switch, moon, sun */
/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2196F3;
  transition: .4s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 20px;
  left: 0.3em;
  bottom: 0.3em;
  background-color: yellow;
  transition: .4s;
}

.switch input:checked + .slider:before {
  background-color: black;
  border-radius: 50px;
  box-shadow: inset 9px 0px 1px 0px white;
}

.switch input:checked + .slider {
  background-color: black;
}

.switch input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

.switch input:checked + .slider:before {
  transform: translateX(1.5em);
}
```

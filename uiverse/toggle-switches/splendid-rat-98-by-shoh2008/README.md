# Splendid Rat 98

A toggle switch UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/splendid-rat-98

Author: Shoh2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch

Colors: #000, #2e2e2e, #4e4

Fonts: See styles.css

Spacing and radius: 20px, 30px

## Source Code

### index.html

```html
<label class="switch">
  <input type="checkbox" class="input">
  <span class="slider"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by Shoh2008 - Tags: switch */
/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch .input {
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
  background-color: #2e2e2e;
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
  background-color: #4e4;
  transition: .4s;
}

.input:checked + .slider {
  background-color: #000;
}

.input:focus + .slider {
  box-shadow: 0 0 1px #000;
}

.input:checked + .slider:before {
  transform: translateX(1.5em);
}
```

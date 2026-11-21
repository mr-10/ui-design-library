# Tough Monkey 56

A toggle switch UI element from Uiverse.io by DawidMazurek4.

Source: https://uiverse.io/DawidMazurek4/tough-monkey-56

Author: DawidMazurek4

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch, theme-switch

Colors: #000000

Fonts: See styles.css

Spacing and radius: 20px, 30px, 50%

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
/* From Uiverse.io by DawidMazurek4 - Tags: switch, theme-switch */
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
  background-color: rgb(0, 0, 0);
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
  background-color: rgb(219, 198, 2);
  transition: .4s;
}

input:checked + .slider {
  background-color: #000000;
}

input:focus + .slider {
  box-shadow: 0 0 1px #000000;
}

input:checked + .slider:before {
  transform: translateX(1.5em);
}

.slider::after {
  width: 20px;
  height: 20px;
  left: 20%;
  top: 10%;
  border-radius: 50%;
  position: absolute;
  content: "";
  background-color: rgb(0, 0, 0);
  transition: ease 0.4s;
}

input:checked + .slider::after {
  left: 80%;
  width: 0px;
  height: 0px;
}
```

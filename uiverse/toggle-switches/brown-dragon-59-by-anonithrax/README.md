# Brown Dragon 59

A toggle switch UI element from Uiverse.io by anonithrax.

Source: https://uiverse.io/anonithrax/brown-dragon-59

Author: anonithrax

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch, theme-switch, toggle switch

Colors: #4c71f2, #ccc

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="switch">
  <input type="checkbox" id="toggle-checkbox">
  <label for="toggle-checkbox"></label>
</div>
```

### styles.css

```css
/* From Uiverse.io by anonithrax - Tags: switch, theme-switch, toggle switch */
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  display: none;
}

/* The slider */
.switch label {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .3s;
}

.switch label::before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .3s;
}

.switch input:checked + label {
  background-color: #4c71f2;
}

.switch input:checked + label::before {
  transform: translateX(26px);
}
```

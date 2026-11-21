# Ordinary Goat 76

A toggle switch UI element from Uiverse.io by Gianluks90.

Source: https://uiverse.io/Gianluks90/ordinary-goat-76

Author: Gianluks90

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch

Colors: #90ee90, #ccc

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<label class="switch">
  <input type="checkbox" class="slider-input">
  <span class="slider"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by Gianluks90 - Tags: switch */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
  margin-right: 12px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  box-shadow: inset 2px 2px 12px -5px gray;
}

.slider:before {
  position: absolute;
  content: "";
  height: 2em;
  width: 1.75em;
  left: 0;
  bottom: 0;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider-input:checked + .slider {
  background-color: #90EE90;
  box-shadow: inset 2px 2px 9px -5px gray;
}

.slider-input:focus + .slider {
  box-shadow: 0 0 1px #90EE90;
}

.slider-input:checked + .slider:before {
  -webkit-transform: translateX(1.75em);
  -ms-transform: translateX(1.75em);
  transform: translateX(1.75em);
}
```

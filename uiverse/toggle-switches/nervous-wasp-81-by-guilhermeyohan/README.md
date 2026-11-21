# Nervous Wasp 81

A toggle switch UI element from Uiverse.io by guilhermeyohan.

Source: https://uiverse.io/guilhermeyohan/nervous-wasp-81

Author: guilhermeyohan

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch

Colors: #103445, #143240

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<input id="toggle_checkbox" type="checkbox">
  <label for="toggle_checkbox"></label>
```

### styles.css

```css
/* From Uiverse.io by guilhermeyohan - Tags: switch */
#toggle_checkbox {
  display: none;
}

label {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  display: block;
  width: 70px;
  height: 30px;
  margin: 0 auto;
  transform: translateY(-50%);
  cursor: pointer;
}

label:before {
  top: 2px;
  left: 3px;
  width: 26px;
  height: 26px;
  border: 3px solid rgb(2, 169, 38);
}

label:after {
  top: 0;
  right: 0;
  width: 70px;
  height: 30px;
  border: 3px solid #103445;
}

label:before, label:after {
  content: "";
  position: absolute;
  border-radius: 50px;
  box-sizing: border-box;
  transition: 0.5s ease top, 0.5s ease left, 0.5s ease right, 0.5s ease width, 0.5s ease height, 0.5s ease border-color;
}

#toggle_checkbox:checked + label:before {
  top: 0;
  left: 0;
  width: 70px;
  height: 30px;
  border-color: #143240;
}

#toggle_checkbox:checked + label:after {
  top: 2px;
  right: 3px;
  width: 26px;
  height: 26px;
  border-color: red;
}
```

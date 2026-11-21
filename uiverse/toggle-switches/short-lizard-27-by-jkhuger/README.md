# Short Lizard 27

A toggle switch UI element from Uiverse.io by JkHuger.

Source: https://uiverse.io/JkHuger/short-lizard-27

Author: JkHuger

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch

Colors: #143240

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
/* From Uiverse.io by JkHuger - Tags: switch */
#toggle_checkbox {
  display: none;
}

label {
  position: absolute;
  top: 50%;
  right: 0px;
  left: 0;
  display: block;
  width: 70px;
  height: 35px;
  margin: 0 auto;
  transform: translateY(-50%);
  cursor: pointer;
}

label:before {
  top: 4px;
  left: 4px;
  width: 27px;
  height: 27px;
  border: 2px solid red;
}

label:after {
  top: 0;
  right: 0;
  width: 70px;
  height: 35px;
  border: 2px solid #143240;
}

label:before,
label:after {
  content: "";
  position: absolute;
  border-radius: 50px;
  box-sizing: border-box;
  transition: 0.5s ease top, 0.5s ease left, 0.5s ease right, 0.5s ease width,
    0.5s ease height, 0.5s ease border-color;
}

#toggle_checkbox:checked + label:before {
  top: 0;
  left: 0;
  width: 70px;
  height: 35px;
  border-color: #143240;
  border: 2px solid #143240
}

#toggle_checkbox:checked + label:after {
  top: 4px;
  right: 4px;
  width: 27px;
  height: 27px;
  border-color: red;
  border: 2px solid red;
}
```

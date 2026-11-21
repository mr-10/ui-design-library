# Wonderful Deer 76

A checkbox UI element from Uiverse.io by boryanakrasteva.

Source: https://uiverse.io/boryanakrasteva/wonderful-deer-76

Author: boryanakrasteva

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox

Colors: #1663a7

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<label class="checkbox-btn">
    <label for="checkbox"></label>
    <input id="checkbox" type="checkbox">
    <span class="checkmark"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by boryanakrasteva - Tags: checkbox */
/* Customize the label (the checkbox-btn) */
.checkbox-btn {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-btn input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-btn label {
  cursor: pointer;
  font-size: 14px;
}
/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  border-radius: 5px;
  border: 3px solid #1663a7;
}
.checkbox-btn input:checked ~ .checkmark {
  background-color: transparent;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  visibility: hidden;
  opacity: 0;
  left: 3.5px;
  top: 0.5px;
  width: 3.5px;
  height: 6px;
  border: 2.5px solid #1663a7;
  border-width: 0 2.5px 2.5px 0;
  transition: .3s ease-in-out;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* Show the checkmark when checked */
.checkbox-btn input:checked ~ .checkmark:after {
  visibility: visible;
  opacity: 1;
}
```

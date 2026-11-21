# Wicked Bobcat 36

A checkbox UI element from Uiverse.io by faxriddin20.

Source: https://uiverse.io/faxriddin20/wicked-bobcat-36

Author: faxriddin20

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: minimalist, checkbox, dark, cool checkbox, checkmark

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<label>
  <input class="input" type="checkbox" />
  <span class="custom-checkbox"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by faxriddin20  - Tags: minimalist, checkbox, dark, cool checkbox, checkmark */
.input[type="checkbox"] {
  display: none;
}

/* Style for the custom checkbox */
.custom-checkbox {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid lime;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
}

/* Style for the custom checkmark */
.custom-checkbox::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background-color: lime;
  border-radius: 50%;
  opacity: 0;
}

/* Show the checkmark when checkbox is checked */
.input[type="checkbox"]:checked + .custom-checkbox::after {
  opacity: 1;
}
```

# Silent Rabbit 98

A checkbox UI element from Uiverse.io by PriyanshuGupta28.

Source: https://uiverse.io/PriyanshuGupta28/silent-rabbit-98

Author: PriyanshuGupta28

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox, cool checkbox, checkmark

Colors: #333

Fonts: See styles.css

Spacing and radius: 2px, 4px

## Source Code

### index.html

```html
<label>
    <input type="checkbox" class="input">
    <span class="custom-checkbox"></span>
  </label>
```

### styles.css

```css
/* From Uiverse.io by PriyanshuGupta28 - Tags: checkbox, cool checkbox, checkmark */
.input[type="checkbox"] {
  display: none;
}


  /* Style for the custom checkbox */
.custom-checkbox {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #333;
  border-radius: 4px;
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
  background-color: #333;
  border-radius: 2px;
  opacity: 0;
}

  /* Show the checkmark when checkbox is checked */
.input[type="checkbox"]:checked + .custom-checkbox::after {
  opacity: 1;
}
```

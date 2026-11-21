# Mighty Wasp 74

A radio button UI element from Uiverse.io by NlghtM4re.

Source: https://uiverse.io/NlghtM4re/mighty-wasp-74

Author: NlghtM4re

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: radio

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 14px, 15px

## Source Code

### index.html

```html
<div class="radio-buttons">
  <label>
    <input type="radio" name="option" value="1" checked="">
    <span class="option">Option 1</span>
  </label>
  <label>
    <input type="radio" name="option" value="2">
    <span class="option">Option 2</span>
  </label>
  <label>
    <input type="radio" name="option" value="3">
    <span class="option">Option 3</span>
  </label>
</div>
```

### styles.css

```css
/* From Uiverse.io by NlghtM4re - Tags: radio */
.radio-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(164, 215, 246);
  border-radius: 15px;
  box-shadow: rgb(71, 175, 239) 0px 5px 29px 5px;
}

.radio-buttons label {
  position: relative;
  cursor: pointer;
}

.radio-buttons input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.option {
  position: relative;
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  color: black;
  border-radius: 14px;
  padding: 10px;
}

.option:hover {
  background-color: rgb(137, 207, 251);
}

.radio-buttons input[type="radio"]:checked + .option {
  background-color: rgb(71, 175, 239);
  box-shadow: rgb(11, 70, 107) 0px 5px 29px 5px;
}
```

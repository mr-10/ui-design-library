# Wet Emu 59

A radio button UI element from Uiverse.io by ozgeozkaraa01.

Source: https://uiverse.io/ozgeozkaraa01/wet-emu-59

Author: ozgeozkaraa01

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, radio, hover button

Colors: #333, #64748b, #f2f2f2, #ffcc00, #fff

Fonts: See styles.css

Spacing and radius: 10px, 50%

## Source Code

### index.html

```html
<div class="container">
  <div class="custom-radio">
    <input type="radio" id="radio-1" name="tabs" checked="">
    <label class="radio-label" for="radio-1">
      <div class="radio-circle"></div>
      <span class="radio-text">Option 1</span>
    </label>
    <input type="radio" id="radio-2" name="tabs">
    <label class="radio-label" for="radio-2">
      <div class="radio-circle"></div>
      <span class="radio-text">Option 2</span>
    </label>
    <input type="radio" id="radio-3" name="tabs">
    <label class="radio-label" for="radio-3">
      <div class="radio-circle"></div>
      <span class="radio-text">Option 3</span>
    </label>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by ozgeozkaraa01 - Tags: button, radio, hover button */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
}

.custom-radio {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.custom-radio input[type="radio"] {
  display: none;
}

.radio-label {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.radio-circle {
  width: 20px;
  height: 20px;
  border: 2px solid #ffcc00;
  border-radius: 50%;
  margin-right: 10px;
  transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.radio-text {
  font-size: 1rem;
  color: #333;
  transition: color 0.3s ease-in-out;
}

.custom-radio input[type="radio"]:checked + .radio-label {
  background-color: #ffcc00;
}

.custom-radio input[type="radio"]:checked + .radio-label .radio-circle {
  border-color: #fff;
  background-color: #ffcc00;
}

.custom-radio input[type="radio"]:checked + .radio-label .radio-text {
  color: #64748b;
}
```

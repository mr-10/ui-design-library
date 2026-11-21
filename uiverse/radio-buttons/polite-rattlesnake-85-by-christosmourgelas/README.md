# Polite Rattlesnake 85

A radio button UI element from Uiverse.io by ChristosMourgelas.

Source: https://uiverse.io/ChristosMourgelas/polite-rattlesnake-85

Author: ChristosMourgelas

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: radio

Colors: #00b4ff, #0175a6, #333, #4d4d4d, #ccc, #fff, #ffffff

Fonts: See styles.css

Spacing and radius: 20px, 50%

## Source Code

### index.html

```html
<div class="radio-input">
  <input class="value-radio" name="value-radio" id="option-1" type="radio">
  <label class="value-radio-label" for="option-1">Option A</label>

  <input class="value-radio" name="value-radio" id="option-2" type="radio">
  <label class="value-radio-label" for="option-2">Option B</label>
  
  <input class="value-radio" name="value-radio" id="option-3" type="radio">
  <label class="value-radio-label" for="option-3">Option C</label>

</div>
```

### styles.css

```css
/* From Uiverse.io by ChristosMourgelas - Tags: radio */
.radio-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.value-radio {
  display: none;
}

.value-radio-label {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 2px solid #4d4d4d;
  border-radius: 20px;
  color: #ccc;
  background-color: #333;
  cursor: pointer;
  transition: all 0.3s;
}

.value-radio:checked + .value-radio-label {
  border-color: #00b4ff;
  background-color: #00b4ff;
  color: #fff;
}

.value-radio-label::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #4d4d4d;
  transition: all 1s;
}

.value-radio:checked + .value-radio-label::before {
  border-color: #0175a6;
  background-color: #ffffff;
}
```

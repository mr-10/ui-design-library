# Fluffy Catfish 36

A radio button UI element from Uiverse.io by sandeepgopan.

Source: https://uiverse.io/sandeepgopan/fluffy-catfish-36

Author: sandeepgopan

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: hover, input, theme-switch, radio, futuristic-radio-buttons

Colors: #afaeae, #e41c23, #ffffffc9

Fonts: 'Courier New', Courier, monospace, 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif

Spacing and radius: 100px

## Source Code

### index.html

```html
<div class="radio-input">
  <label class="radio-compont">
      <input type="radio" id="value-1" class="radiostyle" name="value-radio" value="value-1">
          <div class="radio-text">Option 1</div>
  </label>
  <label class="radio-compont">
      <input type="radio" id="value-2" class="radiostyle" name="value-radio" value="value-2">
        <div class="radio-text">Option 2</div>
  </label>
  <label class="radio-compont">
      <input type="radio" id="value-3" class="radiostyle" name="value-radio" value="value-3">
        <div class="radio-text">Option 3</div>
  </label>
</div>
```

### styles.css

```css
/* From Uiverse.io by sandeepgopan - Tags: hover, input, theme-switch, radio, futuristic-radio-buttons */
.radio-compont {
  display: flex;
  font-family: 'Courier New', Courier, monospace;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.radio-text {
  padding: 0px 10px;
  color: hsl(0, 0%, 50%);
  font-size: 20px;
  text-transform: uppercase;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.radio-compont:hover {
  box-shadow: inset 4px 4px 12px #afaeae,inset -4px -4px 12px #ffffffc9;
  border-radius: 100px;
}

.radiostyle:checked~.radio-text {
  color: #E41C23;
}

.radiostyle {
  width: 20px;
  height: 20px;
}
```

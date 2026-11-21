# Spicy Fish 10

A radio button UI element from Uiverse.io by andrew-demchenk0.

Source: https://uiverse.io/andrew-demchenk0/spicy-fish-10

Author: andrew-demchenk0

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: neumorphism, realistic, radio

Colors: #009c00, #00ff00, #2c2c2c, #323232, #666666, #9c0000, #a0a0a0, #ccc, #ff0000

Fonts: See styles.css

Spacing and radius: 100%, 10px, 8px

## Source Code

### index.html

```html
<div class="radio-input">
  <input name="btn" type="radio" class="input">
  <span class="span"></span>
</div>
<div class="radio-input">
  <input checked="" name="btn" type="radio" class="input">
  <span class="span"></span>
</div>
```

### styles.css

```css
/* From Uiverse.io by andrew-demchenk0 - Tags: neumorphism, realistic, radio */
.radio-input {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 150px;
  height: 50px;
  cursor: pointer;
}

.radio-input .input {
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 10;
  opacity: 0;
}

.radio-input .span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background: #323232;
  border-radius: 10px;
}

.radio-input .span::before {
  content: 'Inactive';
  position: absolute;
  top: 3px;
  left: 3px;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  border-radius: 8px;
  background: #666666;
  box-shadow: inset -6px -6px 12px #2c2c2c,
              inset 6px 6px 12px #a0a0a0;
  color: #323232;
  font-weight: 700;
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input:checked ~ .span::before {
  content: 'Active';
  color: #ccc;
  text-shadow: 1px 1px 0.5px rgba(0,255,0,0.3);
  ;
  border-radius: 8px;
  background: #666666;
  box-shadow: inset 6px 6px 12px #2c2c2c,
              inset -6px -6px 12px #a0a0a0;
}

.radio-input .span::after {
  content: '';
  height: 6px;
  width: 6px;
  border-radius: 100%;
  background-color: red;
  position: absolute;
  top: calc(50% - 3px);
  right: 20px;
  box-shadow: 1px 1px 3px #9c0000,
              -1px -1px 3px #ff0000;
}

.input:checked ~ .span::after {
  background: #00ff00;
  box-shadow: 1px 1px 3px #009c00,
              -1px -1px 3px #00ff00;
}
```

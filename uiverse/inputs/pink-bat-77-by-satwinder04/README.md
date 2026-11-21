# Pink Bat 77

A input UI element from Uiverse.io by Satwinder04.

Source: https://uiverse.io/Satwinder04/pink-bat-77

Author: Satwinder04

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input

Colors: #333, #ccc

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="input-container">
  <input type="text" id="input" required="">
  <label for="input" class="label">Enter Text</label>
  <div class="underline"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Satwinder04 - Tags: input */
.input-container {
  position: relative;
  margin: 50px auto;
  width: 200px;
}

.input-container input[type="text"] {
  font-size: 20px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
}

.input-container .label {
  position: absolute;
  top: 0;
  left: 0;
  color: #ccc;
  transition: all 0.3s ease;
  pointer-events: none;
}

.input-container input[type="text"]:focus ~ .label,
.input-container input[type="text"]:valid ~ .label {
  top: -20px;
  font-size: 16px;
  color: #333;
}

.input-container .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #333;
  transform: scaleX(0);
  transition: all 0.3s ease;
}

.input-container input[type="text"]:focus ~ .underline,
.input-container input[type="text"]:valid ~ .underline {
  transform: scaleX(1);
}
```

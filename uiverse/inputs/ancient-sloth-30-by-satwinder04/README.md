# Ancient Sloth 30

A input UI element from Uiverse.io by Satwinder04.

Source: https://uiverse.io/Satwinder04/ancient-sloth-30

Author: Satwinder04

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input

Colors: #007bff, #ccc

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="input-container">
  <input placeholder="Enter text" class="input-field" type="text">
  <label for="input-field" class="input-label">Enter text</label>
  <span class="input-highlight"></span>
</div>
```

### styles.css

```css
/* From Uiverse.io by Satwinder04 - Tags: input */
/* Input container */
.input-container {
  position: relative;
  margin: 20px;
}

/* Input field */
.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  background-color: transparent;
}

/* Input label */
.input-label {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 16px;
  color: rgba(204, 204, 204, 0);
  pointer-events: none;
  transition: all 0.3s ease;
}

/* Input highlight */
.input-highlight {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #007bff;
  transition: all 0.3s ease;
}

/* Input field:focus styles */
.input-field:focus + .input-label {
  top: -20px;
  font-size: 12px;
  color: #007bff;
}

.input-field:focus + .input-label + .input-highlight {
  width: 100%;
}
```

# Massive Rabbit 40

A checkbox UI element from Uiverse.io by Gautammsharma.

Source: https://uiverse.io/Gautammsharma/massive-rabbit-40

Author: Gautammsharma

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, minimalist, checkbox, google, clean

Colors: #2f3300, #454b00, #4d4d4d, #777777, #c3cf34, #dfec5065

Fonts: See styles.css

Spacing and radius: 4px

## Source Code

### index.html

```html
<label class="material-checkbox">
        <input type="checkbox">
        <span class="checkmark"></span>
        Checkbox Label
      </label>
```

### styles.css

```css
/* From Uiverse.io by Gautammsharma - Tags: simple, material design, minimalist, checkbox, google, clean */
.material-checkbox {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #777777;
  cursor: pointer;
}

.material-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkmark {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  border: 2px solid #454B00;
  border-radius: 4px;
  transition: all 0.3s;
}

.material-checkbox input[type="checkbox"]:checked ~ .checkmark {
  background-color: #2F3300;
  border-color: #454B00;
}

.material-checkbox input[type="checkbox"]:checked ~ .checkmark:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 6px;
  width: 4px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.material-checkbox input[type="checkbox"]:focus ~ .checkmark {
  box-shadow: 0 0 0 2px #dfec5065;
}

.material-checkbox:hover input[type="checkbox"] ~ .checkmark {
  border-color: #C3CF34;
}

.material-checkbox input[type="checkbox"]:disabled ~ .checkmark {
  opacity: 0.5;
  cursor: not-allowed;
}

.material-checkbox input[type="checkbox"]:disabled ~ .checkmark:hover {
  border-color: #4d4d4d;
}
```

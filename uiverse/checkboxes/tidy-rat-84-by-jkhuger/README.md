# Tidy Rat 84

A checkbox UI element from Uiverse.io by JkHuger.

Source: https://uiverse.io/JkHuger/tidy-rat-84

Author: JkHuger

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox

Colors: #0078d4, #ccc, #fff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<label class="checkbox">
  <input type="checkbox">
  <span class="checkmark"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by JkHuger - Tags: checkbox */
.checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.checkbox input[type="checkbox"] {
  opacity: 0;
  position: absolute;
}

.checkbox .checkmark {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.checkbox input[type="checkbox"]:checked + .checkmark {
  background-color: #0078d4;
  border-color: #0078d4;
}

.checkbox input[type="checkbox"]:checked + .checkmark:after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.2s ease;
  transform: scale(1);
}

.checkbox .checkmark:after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: transparent;
  transform: scale(0);
  transition: transform 0.2s ease;
}
```

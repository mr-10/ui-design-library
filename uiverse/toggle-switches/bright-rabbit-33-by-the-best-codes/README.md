# Bright Rabbit 33

A toggle switch UI element from Uiverse.io by The-Best-Codes.

Source: https://uiverse.io/The-Best-Codes/bright-rabbit-33

Author: The-Best-Codes

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: material design, animation, green, switch, checkbox, modern, css, css effect

Colors: #4fbf26, #ccc, #fff

Fonts: See styles.css

Spacing and radius: 34px, 50%

## Source Code

### index.html

```html
<div class="toggle-switch">
  <input class="toggle-input" id="toggle" type="checkbox" />
  <label class="toggle-label" for="toggle"></label>
</div>
```

### styles.css

```css
/* From Uiverse.io by The-Best-Codes  - Tags: material design, animation, green, switch, checkbox, modern, css, css effect */
.toggle-switch {
  display: inline-block;
  position: relative;
  width: 60px;
  height: 34px;
}

.toggle-input {
  display: none;
}

.toggle-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 34px;
  background-color: #ccc;
  border-radius: 34px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.toggle-label:before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.3s;
}

.toggle-input:checked + .toggle-label {
  background-color: #4fbf26;
}

.toggle-input:checked + .toggle-label:before {
  transform: translateX(26px);
}
```

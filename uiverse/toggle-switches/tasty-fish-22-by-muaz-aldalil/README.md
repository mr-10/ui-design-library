# Tasty Fish 22

A toggle switch UI element from Uiverse.io by Muaz-Aldalil.

Source: https://uiverse.io/Muaz-Aldalil/tasty-fish-22

Author: Muaz-Aldalil

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch, radio-buttons, toggle switch

Colors: #0075ff, #ddd

Fonts: See styles.css

Spacing and radius: 16px, 50%

## Source Code

### index.html

```html
<label>
  <input type="checkbox" class="toggle-checkbox">
  <div class="toggle-switch"></div>
</label>
```

### styles.css

```css
/* From Uiverse.io by Muaz-Aldalil - Tags: switch, radio-buttons, toggle switch */
.toggle-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: none;
}

.toggle-switch {
  background-color: gray;
  width: 78px;
  height: 32px;
  border-radius: 16px;
  position: relative;
  transition: 0.3s;
  cursor: pointer;
}

.toggle-switch::before {
  content: "";
  font-weight: 900;
  background-color: white;
  width: 24px;
  height: 24px;
  position: absolute;
  border-radius: 50%;
  top: 4px;
  left: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ddd;
  transition: 0.3s;
}

.toggle-checkbox:checked+.toggle-switch {
  background-color: #0075ff;
}

.toggle-checkbox:checked+.toggle-switch::before {
  content: "";
  left: 50px;
  color: #0075ff;
}
```

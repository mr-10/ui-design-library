# Slimy Treefrog 92

A toggle switch UI element from Uiverse.io by Cksunandh.

Source: https://uiverse.io/Cksunandh/slimy-treefrog-92

Author: Cksunandh

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch

Colors: #c1c1c1, #ffffff

Fonts: See styles.css

Spacing and radius: 15px, 50%

## Source Code

### index.html

```html
<label class="toggle-switch">
  <input type="checkbox" />
  <span class="slider"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by Cksunandh  - Tags: switch */
.toggle-switch {
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow:
    inset 5px 5px 10px #c1c1c1,
    inset -5px -5px 10px #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-switch .slider {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  box-shadow:
    2px 2px 5px #c1c1c1,
    -2px -2px 5px #ffffff;
  transition: transform 0.3s ease;
}

.toggle-switch input:checked + .slider {
  transform: translateX(30px);
}

.toggle-switch input:checked {
  background-color: #ffffff;
}
```

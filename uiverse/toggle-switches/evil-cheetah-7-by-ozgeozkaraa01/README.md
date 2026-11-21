# Evil Cheetah 7

A toggle switch UI element from Uiverse.io by ozgeozkaraa01.

Source: https://uiverse.io/ozgeozkaraa01/evil-cheetah-7

Author: ozgeozkaraa01

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch, toggle switch, 3d switch

Colors: #86d993, #ccc, #fff

Fonts: See styles.css

Spacing and radius: 17px, 50%

## Source Code

### index.html

```html
<div class="toggle-switch">
  <input class="toggle-input" id="toggle" type="checkbox">
  <label class="toggle-label" for="toggle"></label>
</div>
```

### styles.css

```css
/* From Uiverse.io by ozgeozkaraa01 - Tags: switch, toggle switch, 3d switch */
.toggle-switch {
  position: relative;
  display: inline-block;
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
  border-radius: 17px;
  background-color: #ccc;
  cursor: pointer;
  transition: background-color 0.4s ease;
}

.toggle-label:before {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease;
}

.toggle-input:checked + .toggle-label {
  background-color: #86d993;
}

.toggle-input:checked + .toggle-label:before {
  transform: translateX(26px);
}
```

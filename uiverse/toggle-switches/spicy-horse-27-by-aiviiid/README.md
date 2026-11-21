# Spicy Horse 27

A toggle switch UI element from Uiverse.io by AIVIIID.

Source: https://uiverse.io/AIVIIID/spicy-horse-27

Author: AIVIIID

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch

Colors: #000000, #ddd, #fff

Fonts: See styles.css

Spacing and radius: 34px, 50%

## Source Code

### index.html

```html
<div class="toggle-switch">
  <input id="toggle-switch" class="toggle-switch-checkbox" type="checkbox">
  <label for="toggle-switch" class="toggle-switch-label">
    <span class="toggle-switch-inner"></span>
    <span class="toggle-switch-switch"></span>
  </label>
  <span class="toggle-switch-text"></span>
</div>
```

### styles.css

```css
/* From Uiverse.io by AIVIIID - Tags: switch */
.toggle-switch {
  position: relative;
  width: 90px;
  height: 34px;
  margin: 20px;
}

.toggle-switch input[type="checkbox"] {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-switch-label {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ddd;
  border-radius: 34px;
  cursor: pointer;
  transition: all 0.4s ease;
}

.toggle-switch-label:before,
.toggle-switch-label:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}

.toggle-switch-label:before {
  left: 10px;
  width: 26px;
  height: 26px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
}

.toggle-switch-label:after {
  left: 0;
  width: 46px;
  height: 34px;
  background-color: #fff;
  border-radius: 34px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
}

.toggle-switch-checkbox:checked + .toggle-switch-label:before {
  transform: translateX(46px);
}

.toggle-switch-checkbox:checked + .toggle-switch-label {
  background-color: #000000;
}

.toggle-switch-checkbox:checked + .toggle-switch-label:after {
  transform: scale(0);
}

.toggle-switch-text {
  position: absolute;
  top: 5px;
  left: 110px;
  font-size: 16px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 2px rgba(253, 251, 251, 0.2);
  transition: all 0.4s ease;
}

.toggle-switch-checkbox:checked + .toggle-switch-label + .toggle-switch-text {
  color: rgb(255, 255, 255);
}
```

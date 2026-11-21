# Afraid Eel 50

A toggle switch UI element from Uiverse.io by zanina-yassine.

Source: https://uiverse.io/zanina-yassine/afraid-eel-50

Author: zanina-yassine

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch, ios

Colors: #34c759, #888, #e9e9eb, #ffffff

Fonts: See styles.css

Spacing and radius: 16px, 50%

## Source Code

### index.html

```html
<p class="component-title">iOS Switch</p>

<div class="container">
  <input type="checkbox" class="checkbox" id="checkbox">
  <label class="switch" for="checkbox">
    <span class="slider"></span>
  </label>
</div>
```

### styles.css

```css
/* From Uiverse.io by zanina-yassine - Tags: switch, ios */
/* Remove this container when use*/
.component-title {
  width: 100%;
  position: absolute;
  z-index: 999;
  top: 30px;
  left: 0;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #888;
  text-align: center;
}

/* The switch - the box around the slider */
.container {
  width: 51px;
  height: 31px;
  position: relative;
}

/* Hide default HTML checkbox */
.checkbox {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

.switch {
  width: 100%;
  height: 100%;
  display: block;
  background-color: #e9e9eb;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

/* The slider */
.slider {
  width: 27px;
  height: 27px;
  position: absolute;
  left: calc(50% - 27px/2 - 10px);
  top: calc(50% - 27px/2);
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease-out;
  cursor: pointer;
}

.checkbox:checked + .switch {
  background-color: #34C759;
}

.checkbox:checked + .switch .slider {
  left: calc(50% - 27px/2 + 10px);
  top: calc(50% - 27px/2);
}
```

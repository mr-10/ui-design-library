# Terrible Kangaroo 96

A checkbox UI element from Uiverse.io by Cornerstone-04.

Source: https://uiverse.io/Cornerstone-04/terrible-kangaroo-96

Author: Cornerstone-04

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox, circle

Colors: #212fab, #ffffff

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<div class="check_container">
  <input id="checkbox" class="hidden" type="checkbox">
  <label class="checkbox" for="checkbox"></label>
</div>
```

### styles.css

```css
/* From Uiverse.io by Cornerstone-04 - Tags: checkbox, circle */
.check_container {
  position: relative;
}

.checkbox {
  position: relative;
  top: 1px;
  width: 30px;
  height: 30px;
  border: 2px solid #212fab;
  border-radius: 50px;
  cursor: pointer;
  display: block;
  transition: all 0.3s linear;
}

.checkbox::after {
  content: "";
  position: absolute;
  top: 25%;
  left: 20%;
  width: 6px;
  height: 12px;
  opacity: 0;
  transform: rotate(45deg) scale(0) translate(-50%, -50%);
  border-right: 4px solid #ffffff;
  border-bottom: 4px solid #ffffff;
  transition: all 0.3s linear;
}

#checkbox:checked ~ .checkbox::after {
  opacity: 1 !important;
  transform: rotate(50deg) scale(1) translate(20%, -25%) !important;
}

#checkbox:checked ~ .checkbox {
  background: #212fab;
  border: none;
}

.hidden {
  display: none !important;
}
```

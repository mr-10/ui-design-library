# Stupid Mouse 85

A checkbox UI element from Uiverse.io by DaniloMGutavo.

Source: https://uiverse.io/DaniloMGutavo/stupid-mouse-85

Author: DaniloMGutavo

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox, cool checkbox, check

Colors: #2196f3, #eee

Fonts: See styles.css

Spacing and radius: 4px

## Source Code

### index.html

```html
<label class="checkbox-container">
    <input class="custom-checkbox" checked="" type="checkbox">
    <span class="checkmark"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by DaniloMGutavo - Tags: checkbox, cool checkbox, check */
.checkbox-container {
  display: inline-block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
}

.custom-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 4px;
  transition: background-color 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.custom-checkbox:checked ~ .checkmark {
  background-color: #2196F3;
  box-shadow: 0 3px 7px rgba(33, 150, 243, 0.3);
}

.custom-checkbox:checked ~ .checkmark:after {
  display: block;
}

@keyframes checkAnim {
  0% {
    height: 0;
  }

  100% {
    height: 10px;
  }
}

.custom-checkbox:checked ~ .checkmark:after {
  animation: checkAnim 0.2s forwards;
}
```

# Quick Wolverine 69

A checkbox UI element from Uiverse.io by PriyanshuGupta28.

Source: https://uiverse.io/PriyanshuGupta28/quick-wolverine-69

Author: PriyanshuGupta28

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox, toggle switch, cool toggle

Colors: #000000, #434343

Fonts: See styles.css

Spacing and radius: 0, 6px

## Source Code

### index.html

```html
<div class="checkbox-wrapper">
  <label>
    <input type="checkbox">
    <span class="checkbox"></span>
  </label>
</div>
```

### styles.css

```css
/* From Uiverse.io by PriyanshuGupta28 - Tags: checkbox, toggle switch, cool toggle */
.checkbox-wrapper *,
  .checkbox-wrapper *::before,
  .checkbox-wrapper *::after {
  box-sizing: border-box;
}

.checkbox-wrapper label {
  display: block;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.checkbox-wrapper input {
  visibility: hidden;
  display: none;
}

.checkbox-wrapper input:checked ~ .checkbox {
  transform: rotate(45deg);
  width: 14px;
  margin-left: 12px;
  border-color: #000000;
  border-top-color: transparent;
  border-left-color: transparent;
  border-radius: 0;
}

.checkbox-wrapper .checkbox {
  display: block;
  width: inherit;
  height: inherit;
  border: 3px solid #434343;
  border-radius: 6px;
  transition: all 0.375s;
}
```

# New Dingo 22

A checkbox UI element from Uiverse.io by adamgiebl.

Source: https://uiverse.io/adamgiebl/new-dingo-22

Author: adamgiebl

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: neumorphism, skeuomorphism, checkbox

Colors: #22cc3f, #e3e3e3, #ffffff2b

Fonts: Arial, sans-serif

Spacing and radius: 10px, 5px

## Source Code

### index.html

```html
<label class="checkbox" for="checkbox1">
  <span class="label">Checkbox</span>
  <input checked="" id="checkbox1" type="checkbox">
  <span class="checkmark"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by adamgiebl - Tags: neumorphism, skeuomorphism, checkbox */
.checkbox {
  display: flex;
  align-items: center;
  margin: 10px;
  font-family: Arial, sans-serif;
  color: black;
}

.checkbox input {
  display: none;
}

.checkbox .checkmark {
  width: 28px;
  height: 28px;
  border-radius: 10px;
  background-color: #ffffff2b;
  box-shadow: rgba(0, 0, 0, 0.62) 0px 0px 5px inset, rgba(0, 0, 0, 0.21) 0px 0px 0px 24px inset,
        #22cc3f 0px 0px 0px 0px inset, rgba(224, 224, 224, 0.45) 0px 1px 0px 0px;
  cursor: pointer;
  position: relative;
}

.checkbox .checkmark::after {
  content: "";
  width: 18px;
  height: 18px;
  border-radius: 5px;
  background-color: #e3e3e3;
  box-shadow: transparent 0px 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 6px 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: background-color 0.3s ease-in-out;
}

.checkbox input:checked + .checkmark {
  background-color: #22cc3f;
  box-shadow: rgba(0, 0, 0, 0.62) 0px 0px 5px inset, #22cc3f 0px 0px 0px 2px inset, #22cc3f 0px 0px 0px 24px inset,
        rgba(224, 224, 224, 0.45) 0px 1px 0px 0px;
}

.checkbox input:checked + .checkmark::after {
  background-color: white;
}

.checkbox .label {
  margin-right: 10px;
  user-select: none;
  font-weight: 700;
  cursor: pointer;
}
```

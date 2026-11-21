# Stale Fly 98

A input UI element from Uiverse.io by bedirhan-arslan.

Source: https://uiverse.io/bedirhan-arslan/stale-fly-98

Author: bedirhan-arslan

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, form, hover, active, input, rounded, smooth

Colors: #333, #f1f1f1

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<form class="formField">
  <input required="" type="text" />
  <span>Placeholder</span>
</form>
```

### styles.css

```css
/* From Uiverse.io by bedirhan-arslan  - Tags: simple, form, hover, active, input, rounded, smooth */
.formField {
  margin: 10px;
  position: relative;
}

.formField input {
  padding: 10px 15px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #f1f1f1;
  color: #333;
  font-size: 16px;
  font-weight: 550;
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 0 5px transparent;
}

.formField input:hover,
.formField input:focus {
  box-shadow: 0 0 0 2px #333;
}

.formField span {
  position: absolute;
  left: 0;
  top: 0;
  padding: 8px 15px;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  transition: 0.3s ease-in-out;
  pointer-events: none;
}

.formField input:focus + span,
.formField input:valid + span {
  transform: translateY(-32px) translateX(-5px) scale(0.95);
  transition: 0.3s ease-in-out;
}
```

# Fluffy Bird 66

A input UI element from Uiverse.io by mrhyddenn.

Source: https://uiverse.io/mrhyddenn/fluffy-bird-66

Author: mrhyddenn

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: material design, input

Colors: #116399, #38caef, #9b9b9b, #fff

Fonts: inherit

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="form__group field">
    <input type="input" class="form__field" placeholder="Name" required="">
    <label for="name" class="form__label">Name</label>
</div>
```

### styles.css

```css
/* From Uiverse.io by mrhyddenn - Tags: material design, input */
.form__group {
  position: relative;
  padding: 20px 0 0;
  width: 100%;
  max-width: 180px;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: none;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 17px;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}

.form__field::placeholder {
  color: transparent;
}

.form__field:placeholder-shown ~ .form__label {
  font-size: 17px;
  cursor: text;
  top: 20px;
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 17px;
  color: #9b9b9b;
  pointer-events: none;
}

.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #116399, #38caef);
  border-image-slice: 1;
}

.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 17px;
  color: #38caef;
  font-weight: 700;
}

/* reset input */
.form__field:required, .form__field:invalid {
  box-shadow: none;
}
```

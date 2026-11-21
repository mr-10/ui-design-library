# Honest Goat 49

A input UI element from Uiverse.io by Alien14k.

Source: https://uiverse.io/Alien14k/honest-goat-49

Author: Alien14k

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input

Colors: #313a46, #9b9b9b, #b9192c

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<div class="form__group">
    <input type="text" class="form__field w-100" placeholder="Input text">
    <label for="name" class="form__label"> Input text </label>
</div>
```

### styles.css

```css
/* From Uiverse.io by Alien14k - Tags: input */
.form__group {
  position: relative;
}

.form__field {
  border: 1px solid silver !important;
  border-radius: 5px;
  box-sizing: border-box;
  color: #313a46;
  height: 40px;
  padding: 0rem 15px;
}

.form__field::placeholder {
  color: transparent;
}

.form__field:placeholder-shown ~ .form__label {
  top: 10px;
  border-right: none;
  border-left: none;
}

.form__label {
  background-color: white;
  border-left: 1px solid silver;
  border-right: 1px solid silver;
  color: #9b9b9b;
  display: block;
  font-size: .9em;
  margin-left: 10px;
  padding: 0 10px;
  pointer-events: none;
  position: absolute;
  top: -10px;
  transition: 0.2s;
}

.form__field:focus {
  border: 1px solid #B9192C !important;
  outline: none;
}

.form__field:focus ~ .form__label {
  background-color: white;
  border-right: 1px solid #B9192C;
  border-left: 1px solid #B9192C;
  color: #B9192C;
  font-size: .9em;
  margin-left: 10px;
  padding: 0 10px;
  position: absolute;
  top: -10px;
  transition: 0.2s;
}
```

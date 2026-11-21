# Tough Cat 68

A input UI element from Uiverse.io by sabbircoder07.

Source: https://uiverse.io/sabbircoder07/tough-cat-68

Author: sabbircoder07

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: email, input, box-shadow

Colors: #ce9797, #ffe3e3, #fff5f5

Fonts: inherit

Spacing and radius: 20px

## Source Code

### index.html

```html
<input type="text" id="email-id" name="text" class="input__email" placeholder="Email Address">
```

### styles.css

```css
/* From Uiverse.io by sabbircoder07 - Tags: email, input, box-shadow */
.input__email {
  width: 100%;
  padding: 10px 18px;
  font-size: 14px;
  font-family: inherit;
  box-shadow: 0 0 0 1px #ffe3e3;
  border: none;
  border-radius: 20px;
  background-color: #fff5f5;
}

.input__email::placeholder {
  color: #ce9797;
  font-size: 12px;
}

.input__email:focus {
  outline: none;
  box-shadow: 0 0 0 1px #ffe3e3;
  border: none;
}
```

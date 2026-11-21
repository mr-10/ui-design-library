# Helpless Bulldog 88

A input UI element from Uiverse.io by laminelawal.

Source: https://uiverse.io/laminelawal/helpless-bulldog-88

Author: laminelawal

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input, html

Colors: See styles.css

Fonts: Consolas,monaco,monospace

Spacing and radius: 5px

## Source Code

### index.html

```html
<input placeholder="Search..." class="input" name="text" type="text">
```

### styles.css

```css
/* From Uiverse.io by laminelawal - Tags: input, html */
.input {
  padding: 10px;
  width: 120px;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0 1px  gray;
  font-size: 18px;
  transition: width 0.3s;
  font-family: Consolas,monaco,monospace;
}

.input:focus {
  outline: 1px solid blue;
  box-shadow: none;
  width: 230px;
}

.input::placeholder {
  color: blue;
}
```

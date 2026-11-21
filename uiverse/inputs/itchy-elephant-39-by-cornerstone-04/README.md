# Itchy Elephant 39

A input UI element from Uiverse.io by Cornerstone-04.

Source: https://uiverse.io/Cornerstone-04/itchy-elephant-39

Author: Cornerstone-04

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input

Colors: #070707, #212121, #3f3f3f, #fa4753

Fonts: monospace

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<input placeholder="Type here" class="input" name="text" type="text">
```

### styles.css

```css
/* From Uiverse.io by Cornerstone-04 - Tags: input */
.input {
  max-width: 190px;
  height: 30px;
  border: 2px solid transparent;
  outline: none;
  border-bottom: 2px solid #3f3f3f;
  caret-color: #3f3f3f;
  background-color: #212121;
  padding: 5px;
  transition: .5s linear;
  font-family: monospace;
  letter-spacing: 1px;
}

.input:focus {
  border: 2px solid #fa4753;
  caret-color: #fa4753;
  color: #fa4753;
  box-shadow: 4px 4px 10px #070707;
}

.input:focus::placeholder {
  color: #fa4753;
}
```

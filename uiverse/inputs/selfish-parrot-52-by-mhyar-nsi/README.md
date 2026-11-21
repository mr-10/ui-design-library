# Selfish Parrot 52

A input UI element from Uiverse.io by Mhyar-nsi.

Source: https://uiverse.io/Mhyar-nsi/selfish-parrot-52

Author: Mhyar-nsi

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input, ring

Colors: #3b82f6, #3b83f65f, #dadada, #f3f7fe

Fonts: monospace

Spacing and radius: 5px

## Source Code

### index.html

```html
<input placeholder="Type here..." class="input" name="text" type="text">
```

### styles.css

```css
/* From Uiverse.io by Mhyar-nsi - Tags: input, ring */
.input {
  font-family: monospace;
  max-width: 190px;
  outline: none;
  border: 1px solid #dadada;
  padding: 10px;
  border-radius: 5px;
  background-color: #f3f7fe;
  transition: .3s;
  color: #3b82f6;
}

.input:focus {
  border: 1px solid #3b82f6;
  box-shadow: 0 0 0 4px #3b83f65f
}
```

# Rotten Dolphin 78

A input UI element from Uiverse.io by BurgiSimon.

Source: https://uiverse.io/BurgiSimon/rotten-dolphin-78

Author: BurgiSimon

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, black, input, dark, modern, border, hover effect, css

Colors: #121212, #222, #727272, #999999

Fonts: See styles.css

Spacing and radius: 4px

## Source Code

### index.html

```html
<input placeholder="NAME" type="text" name="text" class="custom-input" />
```

### styles.css

```css
/* From Uiverse.io by BurgiSimon  - Tags: simple, black, input, dark, modern, border, hover effect, css */
.custom-input {
  max-width: 190px;
  background-color: #121212;
  border: 0px solid;
  box-shadow: 1px 1px 1px 1px rgb(131, 133, 129),
    -1px -1px 1px 1px rgb(100, 100, 100);
  border-radius: 4px;
  padding: 10px;
  color: whitesmoke;
  caret-color: white;
  outline: none;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.custom-input:focus {
  background-color: #222;
  border: 1.5px solid rgb(189, 189, 189);
}

.custom-input:hover {
  box-shadow: 1px 1px 1px 1px rgb(149, 151, 147),
    -1px -1px 1px 1px rgb(124, 124, 124);
}

.custom-input:hover::placeholder {
  color: #999999;
}

.custom-input::placeholder {
  color: #727272;
}
```

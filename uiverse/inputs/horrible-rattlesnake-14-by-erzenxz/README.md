# Horrible Rattlesnake 14

A input UI element from Uiverse.io by ErzenXz.

Source: https://uiverse.io/ErzenXz/horrible-rattlesnake-14

Author: ErzenXz

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input, search

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 12px

## Source Code

### index.html

```html
<input placeholder="Searth the internet..." type="text" name="text" class="input">
```

### styles.css

```css
/* From Uiverse.io by ErzenXz - Tags: input, search */
.input {
  width: 100%;
  max-width: 220px;
  height: 45px;
  padding: 12px;
  border-radius: 12px;
  border: 1.5px solid lightgrey;
  outline: none;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 0px 20px -18px;
}

.input:hover {
  border: 2px solid lightgrey;
  box-shadow: 0px 0px 20px -17px;
}

.input:active {
  transform: scale(0.95);
}

.input:focus {
  border: 2px solid grey;
}
```

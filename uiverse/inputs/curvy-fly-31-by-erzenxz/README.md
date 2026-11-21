# Curvy Fly 31

A input UI element from Uiverse.io by ErzenXz.

Source: https://uiverse.io/ErzenXz/curvy-fly-31

Author: ErzenXz

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input, search

Colors: #333, #a3a3a3, #dadada, #eaeaea, #f4f4f4

Fonts: "Helvetica Neue", sans-serif

Spacing and radius: 10px

## Source Code

### index.html

```html
<input type="text" name="text" class="input" placeholder="Search the web...">
```

### styles.css

```css
/* From Uiverse.io by ErzenXz - Tags: input, search */
.input {
  background-color: #F4F4F4;
  border: none;
  border-radius: 10px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  color: #333;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  max-width: 200px;
  height: 50px;
  line-height: 30px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: background-color 0.3s ease-in-out;
}

.input:focus {
  background-color: #EAEAEA;
}

.input:disabled {
  background-color: #DADADA;
  color: #A3A3A3;
}

.input:read-only {
  background-color: #F4F4F4;
  color: #A3A3A3;
  cursor: not-allowed;
}
```

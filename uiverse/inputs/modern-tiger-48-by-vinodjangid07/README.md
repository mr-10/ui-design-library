# Modern Tiger 48

A input UI element from Uiverse.io by vinodjangid07.

Source: https://uiverse.io/vinodjangid07/modern-tiger-48

Author: vinodjangid07

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, input, search

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 30px

## Source Code

### index.html

```html
<div class="InputContainer">
  <input placeholder="Search.." id="input" class="input" name="text" type="text">
  
</div>
```

### styles.css

```css
/* From Uiverse.io by vinodjangid07 - Tags: gradient, input, search */
.InputContainer {
  width: 210px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom,rgb(227, 213, 255),rgb(255, 231, 231));
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
}

.input {
  width: 200px;
  height: 40px;
  border: none;
  outline: none;
  caret-color: rgb(255, 81, 0);
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  padding-left: 15px;
  letter-spacing: 0.8px;
  color: rgb(19, 19, 19);
  font-size: 13.4px;
}
```

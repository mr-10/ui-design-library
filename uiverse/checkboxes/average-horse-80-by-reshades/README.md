# Average Horse 80

A checkbox UI element from Uiverse.io by reshades.

Source: https://uiverse.io/reshades/average-horse-80

Author: reshades

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox, clean

Colors: #4346ff, #fff, #ffffff00

Fonts: See styles.css

Spacing and radius: 111px, 5px

## Source Code

### index.html

```html
<label class="container">
  <input checked="checked" type="checkbox">
  <div class="checkmark">
    <div class="checkmark2"></div>
  </div>
</label>
```

### styles.css

```css
/* From Uiverse.io by reshades - Tags: checkbox, clean */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
}

.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 1.3em;
  width: 1.3em;
  background-color: #ffffff00;
  border-radius: 5px;
  border: #fff 1px solid;
  transition: all 0.2s;
}

.checkmark2 {
  position: relative;
  top: 0.12em;
  left: 0.12em;
  height: 1.0em;
  width: 1.0em;
  background-color: #ffffff00;
  border-radius: 111px;
  border: #fff 1px solid;
  transition: all 0.2s;
}

.container input:checked ~ .checkmark {
  background-color: #4346ff;
  border: #4346ff 1px solid
}
```

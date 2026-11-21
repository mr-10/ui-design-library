# Modern Stingray 0

A checkbox UI element from Uiverse.io by sans-script.

Source: https://uiverse.io/sans-script/modern-stingray-0

Author: sans-script

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox, square

Colors: #262626

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="center">
		<input name="" type="checkbox">
</div>
```

### styles.css

```css
/* From Uiverse.io by sans-script - Tags: checkbox, square */
.center {
  width: 100%;
  text-align: center;
}

input[type="checkbox"] {
  position: relative;
  top: 8px;
  width: 40px;
  height: 40px;
  -webkit-appearance: none;
  outline: none;
  transition: 0.5s;
}

input[type="checkbox"]:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 4px solid #262626;
  box-sizing: border-box;
  transition: 0.5s;
}

input:checked[type="checkbox"]:before {
  border-left: none;
  border-top: none;
  width: 20px;
  border-color: rgb(24, 196, 24);
  transform: rotate(45deg) translate(5px, -10px);
}
```

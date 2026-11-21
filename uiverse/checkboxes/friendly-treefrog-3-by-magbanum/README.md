# Friendly Treefrog 3

A checkbox UI element from Uiverse.io by magbanum.

Source: https://uiverse.io/magbanum/friendly-treefrog-3

Author: magbanum

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox

Colors: #666666, #ccc

Fonts: See styles.css

Spacing and radius: 4px

## Source Code

### index.html

```html
<label class="container">
  <input type="checkbox" checked="checked">
  <span class="checkmark"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by magbanum - Tags: checkbox */
/* Customize the label (the container) */
.container {
 display: block;
 position: relative;
 cursor: pointer;
 font-size: 22px;
 user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: -12px;
  left: -12px;
  height: 25px;
  width: 25px;
  background-color: #ccc;
  border: solid gray 1px;
  border-radius: 4px;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #666666;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 0.4rem;
  top: 0.2rem;
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
```

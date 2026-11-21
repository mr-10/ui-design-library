# Nasty Panda 23

A checkbox UI element from Uiverse.io by gharsh11032000.

Source: https://uiverse.io/gharsh11032000/nasty-panda-23

Author: gharsh11032000

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, checkbox, toggle, click effect

Colors: #414141, #f89b29, #ff0f7b

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<label class="container">
  <input checked="checked" type="checkbox">
  <div class="checkmark"></div>
</label>
```

### styles.css

```css
/* From Uiverse.io by gharsh11032000 - Tags: gradient, checkbox, toggle, click effect */
/* Hide the default checkbox */
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
  overflow: hidden;
}

/* Create a custom checkbox */
.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 1.3em;
  width: 1.3em;
  border: 2px solid #414141;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
}

/* When the checkbox is checked */
.container input:checked ~ .checkmark {
  border-image: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
  border-image-slice: 1;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 0.45em;
  top: -2em;
  width: 0.25em;
  height: 0.5em;
  border: solid white;
  border-width: 0 0.15em 0.15em 0;
  transform: rotate(45deg);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.container .checkmark::before {
  left: 0.45em;
  top: 2em;
  width: 0.25em;
  height: 0.5em;
  border: solid white;
  border-width: 0 0.15em 0.15em 0;
  transform: rotate(45deg);
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  top: 0.25em;
}
```

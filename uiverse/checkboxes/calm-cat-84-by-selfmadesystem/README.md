# Calm Cat 84

A checkbox UI element from Uiverse.io by SelfMadeSystem.

Source: https://uiverse.io/SelfMadeSystem/calm-cat-84

Author: SelfMadeSystem

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox

Colors: #2196f3, #2196f300, #fff0

Fonts: See styles.css

Spacing and radius: 0.25em, 0em

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
/* From Uiverse.io by SelfMadeSystem - Tags: checkbox */
/* Hide the default checkbox */
.container input {
  display: none;
}

.container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

/* Create a custom checkbox */
.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 1.3em;
  width: 1.3em;
  background-color: #2196F300;
  border-radius: 0.25em;
  transition: all 0.25s;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  transform: rotate(0deg);
  border: 0.1em solid black;
  left: 0;
  top: 0;
  width: 1.05em;
  height: 1.05em;
  border-radius: 0.25em;
  transition: all 0.25s, border-width 0.1s;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  left: 0.45em;
  top: 0.25em;
  width: 0.25em;
  height: 0.5em;
  border-color: #fff0 white white #fff0;
  border-width: 0 0.15em 0.15em 0;
  border-radius: 0em;
  transform: rotate(45deg);
}
```

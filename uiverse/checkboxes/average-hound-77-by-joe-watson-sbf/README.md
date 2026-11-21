# Average Hound 77

A checkbox UI element from Uiverse.io by joe-watson-sbf.

Source: https://uiverse.io/joe-watson-sbf/average-hound-77

Author: joe-watson-sbf

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox

Colors: #32cd32

Fonts: See styles.css

Spacing and radius: 0, 4px

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
/* From Uiverse.io by joe-watson-sbf - Tags: checkbox */
.container {
  display: block;
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;
  position: relative;
}

.container input {
  position: absolute;
  transform: scale(0);
}

.container input:checked ~ .checkmark {
  transform: rotate(45deg);
  height: 2em;
  width: .7em;
  border-color: #32cd32;
  border-top-color: transparent;
  border-left-color: transparent;
  border-radius: 0;
}

.container .checkmark {
  display: block;
  width: inherit;
  height: inherit;
  border: 2px solid #32cd32;
  border-radius: 4px;
  transition: all .3s;
}
```

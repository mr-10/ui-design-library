# Jolly Gecko 33

A checkbox UI element from Uiverse.io by MikeAndrewDesigner.

Source: https://uiverse.io/MikeAndrewDesigner/jolly-gecko-33

Author: MikeAndrewDesigner

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox, rounded, clean

Colors: #00ddeb, #5b42f3, #af40ff, #ffeded38

Fonts: See styles.css

Spacing and radius: 50%

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
/* From Uiverse.io by MikeAndrewDesigner - Tags: checkbox, rounded, clean */
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
  font-size: 30px;
  user-select: none;
}

.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 1.6em;
  width: 1.6em;
  border-radius: 50%;
  background: #ffeded38;
  transition: all 0.2s ease;
}

.checkmark {
  opacity: 0.4;
}

.container input:checked ~ .checkmark {
  background: linear-gradient(144deg,#af40ff,#5b42f3 50%,#00ddeb);
  opacity: 0.9;
  transition: all 0.2s ease;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 0.61em;
  top: 0.43em;
  width: 0.25em;
  height: 0.5em;
  border: solid rgb(255, 255, 255);
  border-width: 0 0.15em 0.15em 0;
  transform: rotate(45deg);
}
```

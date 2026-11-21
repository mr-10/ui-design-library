# Breezy Falcon 75

A checkbox UI element from Uiverse.io by gharsh11032000.

Source: https://uiverse.io/gharsh11032000/breezy-falcon-75

Author: gharsh11032000

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, hover, checkbox, click effect

Colors: #212121, #40c9ff, #e81cff, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="checkbox">
  <input id="checkbox1" class="checkbox__input" type="checkbox">
  <label for="checkbox1" class="checkbox__label">
    <span class="checkbox__custom"></span>
    Uiverse
  </label>
</div>
```

### styles.css

```css
/* From Uiverse.io by gharsh11032000 - Tags: gradient, hover, checkbox, click effect */
.checkbox {
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.checkbox__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox__label {
  display: inline-block;
  padding-left: 30px;
  margin-bottom: 10px;
  position: relative;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.checkbox__custom {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(#212121, #212121) padding-box,
              linear-gradient(145deg,#e81cff, #40c9ff) border-box;
  border: 2px solid transparent;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.checkbox__input:checked + .checkbox__label .checkbox__custom {
  background-image: linear-gradient(145deg,#e81cff, #40c9ff);
  transform: rotate(45deg) scale(0.8);
}

.checkbox__label:hover .checkbox__custom {
  transform: scale(1.2);
}
```

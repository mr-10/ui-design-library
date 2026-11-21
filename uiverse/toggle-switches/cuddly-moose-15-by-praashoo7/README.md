# Cuddly Moose 15

A toggle switch UI element from Uiverse.io by Praashoo7.

Source: https://uiverse.io/Praashoo7/cuddly-moose-15

Author: Praashoo7

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch, rounded, smooth

Colors: #ccc

Fonts: See styles.css

Spacing and radius: 2.5px, 50%

## Source Code

### index.html

```html
<label class="switch">
  <input class="chk" type="checkbox">
  <span class="slider"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by Praashoo7 - Tags: switch, rounded, smooth */
/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 2em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch .chk {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 50%;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 2.5px;
  left: 0.3em;
  bottom: 0.3em;
  background-color: white;
  transition: .4s;
  scale: 0;
}

.chk:checked + .slider {
  background-color: limegreen;
  transform: scale(0.7);
  border-radius: 50%;
}

.chk:checked + .slider:before {
  transform: rotateZ(360deg);
  scale: 1;
  border-radius: 50%;
}
```

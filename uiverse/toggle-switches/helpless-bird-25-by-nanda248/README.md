# Helpless Bird 25

A toggle switch UI element from Uiverse.io by nanda248.

Source: https://uiverse.io/nanda248/helpless-bird-25

Author: nanda248

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch, light&dark, AM/PM

Colors: #191a28, #585f60, #eed202, #f1eef5

Fonts: See styles.css

Spacing and radius: 0 2em 2em 0, 1em, 2em 0 0 2em, 50%

## Source Code

### index.html

```html
<label class="switch">
  <input type="checkbox">
  <span class="slider">
    <div class="circle">
      <div class="divider"></div>
    </div>
  </span>
</label>
```

### styles.css

```css
/* From Uiverse.io by nanda248 - Tags: switch, light&dark, AM/PM */
/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 4em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
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
  background-color: #585F60;
  transition: .5s;
  border-radius: 1em;
  z-index: 1;
}

.slider .circle {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 0.3em;
  bottom: 0.3em;
  background-color: #F1EEF5;
  transition: .5s;
  z-index: 5;
}

.divider {
  position: absolute;
  left: 0.65em;
  width: 0.8em;
  height: 1.4em;
  background-color: #eed202;
  z-index: 10;
  border-radius: 0 2em 2em 0;
  transition: .4s;
}

.switch input:checked + .slider {
  background-color: #eed202;
  z-index: 1;
}

.switch input:focus + .slider {
  box-shadow: 0 0 4px #191A28;
}

.switch input:checked + .slider .circle {
  transform: translateX(2em);
}

.switch input:checked + .slider .circle .divider {
  left: 0;
  width: 0.8em;
  border-radius: 2em 0 0 2em;
  background-color: #585F60;
  z-index: 10;
}
```

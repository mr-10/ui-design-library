# Tough Termite 75

A toggle switch UI element from Uiverse.io by misaraadel.

Source: https://uiverse.io/misaraadel/tough-termite-75

Author: misaraadel

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch, theme-switch, toggle switch, on/off, 3d switch, cool switch, creative switch

Colors: #549b60, #e92e2e, #fff

Fonts: See styles.css

Spacing and radius: 15px, 50%

## Source Code

### index.html

```html
<label class="switch" for="">
  <input type="checkbox">

  <span class="check"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by misaraadel - Tags: switch, theme-switch, toggle switch, on/off, 3d switch, cool switch, creative switch */
.switch {
  position: relative;
  cursor: pointer;
}

.switch input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  opacity: 0;
  position: relative;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  cursor: pointer;
}

.switch input:checked ~ .check {
  background-color: #549b60;
}

.switch input:checked ~ .check::after {
  transform: translateX(0px);
}

.switch input:checked ~ .check::before {
  transform: translateX(50px) !important;
}

.switch .check {
  width: 51px;
  height: 30px;
  position: relative;
  display: block;
  background-color: #E92E2E;
  cursor: pointer;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.5s ease-in;
}

.switch .check::after,
.switch .check::before {
  content: "";
  position: absolute;
  top: 0;
  width: 30px;
  height: 30px;
  transition: all 0.5s ease-in;
  border-radius: 50%;
}

.switch .check::before {
  background-color: #fff;
  right: 0px;
}

.switch .check::after {
  transform: translateX(-60px);
  background-color: #fff;
  left: 0;
}
```

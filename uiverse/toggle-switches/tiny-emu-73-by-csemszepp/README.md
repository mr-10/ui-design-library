# Tiny Emu 73

A toggle switch UI element from Uiverse.io by csemszepp.

Source: https://uiverse.io/csemszepp/tiny-emu-73

Author: csemszepp

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch, toggle, toggle switch

Colors: #1849ab, #6e6e6e

Fonts: See styles.css

Spacing and radius: 34px, 50%

## Source Code

### index.html

```html
<div class="content">
  <label class="switch">
    <input type="checkbox" class="input">
    <span class="slider round"></span>
  </label>
</div>
```

### styles.css

```css
/* From Uiverse.io by csemszepp - Source: https://codepen.io/GemmaCroad/pen/NWxjrVG - Tags: switch, toggle, toggle switch */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #6E6E6E;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
}

.input:checked + .slider {
  background-color: #1849AB;
}

.input:focus + .slider {
  box-shadow: 0 0 0 4px rgba(21, 156, 228, 0.7);
  outline: none;
}

.input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
```

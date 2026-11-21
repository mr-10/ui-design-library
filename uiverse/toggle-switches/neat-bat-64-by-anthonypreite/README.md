# Neat Bat 64

A toggle switch UI element from Uiverse.io by AnthonyPreite.

Source: https://uiverse.io/AnthonyPreite/neat-bat-64

Author: AnthonyPreite

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: minimalist, switch, theme-switch

Colors: #2a9d8f, #a3fff4, #d84f68, #ff7ca7

Fonts: See styles.css

Spacing and radius: 34px, 50%

## Source Code

### index.html

```html
<label class="switch">
  <input class="checkbox" type="checkbox" />
  <span class="slider round"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by AnthonyPreite  - Tags: minimalist, switch, theme-switch */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch .checkbox {
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
  background-color: transparent;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  box-shadow: 1px 1px 5px 0 #d84f68 inset;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: #d84f68;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  box-shadow: inset 1px 1px 2px 0px #ff7ca7;
}

.checkbox:checked + .slider {
  box-shadow: 1px 1px 5px 0 #2a9d8f inset;
}

.checkbox:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
  background-color: #2a9d8f;
  box-shadow: inset -1px 1px 2px 0px #a3fff4;
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
```

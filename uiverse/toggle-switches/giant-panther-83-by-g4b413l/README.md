# Giant Panther 83

A toggle switch UI element from Uiverse.io by G4b413l.

Source: https://uiverse.io/G4b413l/giant-panther-83

Author: G4b413l

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch

Colors: #777

Fonts: See styles.css

Spacing and radius: 30px

## Source Code

### index.html

```html
<label class="switch">
  <input type="checkbox">
  <span class="slider"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by G4b413l - Tags: switch */
.switch input {
 display: none;
}

.switch {
 width: 60px;
 height: 30px;
 position: relative;
}

.slider {
 position: absolute;
 top: 0;
 bottom: 0;
 left: 0;
 right: 0;
 border-radius: 30px;
 box-shadow: 0 0 0 2px #777, 0 0 4px #777;
 cursor: pointer;
 border: 4px solid transparent;
 overflow: hidden;
 transition: 0.2s;
}

.slider:before {
 position: absolute;
 content: "";
 width: 100%;
 height: 100%;
 background-color: #777;
 border-radius: 30px;
 transform: translateX(-30px);
 /*translateX(-(w-h))*/
 transition: 0.2s;
}

input:checked + .slider:before {
 transform: translateX(30px);
 /*translateX(w-h)*/
 background-color: limeGreen;
}

input:checked + .slider {
 box-shadow: 0 0 0 2px limeGreen, 0 0 8px limeGreen;
}

.switch200 .slider:before {
 width: 200%;
 transform: translateX(-82px);
 /*translateX(-(w-h))*/
}

.switch200 input:checked + .slider:before {
 background-color: red;
}

.switch200 input:checked + .slider {
 box-shadow: 0 0 0 2px red, 0 0 8px red;
}
```

# Short Treefrog 23

A toggle switch UI element from Uiverse.io by mrhyddenn.

Source: https://uiverse.io/mrhyddenn/short-treefrog-23

Author: mrhyddenn

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch

Colors: #2196f3, #2da54f, #99999, #999999, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

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
/* From Uiverse.io by mrhyddenn - Tags: switch */
/* The switch - the box around the slider */
.switch {
 font-size: 17px;
 position: relative;
 display: inline-block;
 width: 3.5em;
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
 background-color: #fff;
 border: 1px solid #99999;
 transition: .4s;
}

.slider:before {
 position: absolute;
 content: "";
 height: 1.5em;
 width: 1.5em;
 left: 0.20em;
 bottom: 0.25em;
 background-color: white;
 transition: .4s;
 box-shadow: 0 0 2px 0px #999999;
}

input:checked + .slider {
 background-color: #2da54f;
}

input:focus + .slider {
 box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
 transform: translateX(1.5em);
}
```

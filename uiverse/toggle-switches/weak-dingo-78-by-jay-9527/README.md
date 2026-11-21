# Weak Dingo 78

A toggle switch UI element from Uiverse.io by Jay-9527.

Source: https://uiverse.io/Jay-9527/weak-dingo-78

Author: Jay-9527

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch

Colors: #ccc

Fonts: See styles.css

Spacing and radius: 20px, 30px

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
/* From Uiverse.io by Jay-9527 - Tags: switch */
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
 background-color: #ccc;
 transition: .4s;
 border-radius: 30px;
}

.slider:before {
 position: absolute;
 content: "";
 height: 1.4em;
 width: 1.4em;
 border-radius: 20px;
 left: 0.3em;
 bottom: 0.3em;
 background-color: white;
 transition: .4s;
}

input:checked + .slider {
 background-color: rgb(0,221,80);
}

input:focus + .slider {
 box-shadow: 0 0 1px rgb(0,221,80);
}

input:checked + .slider:before {
 transform: translateX(1.5em);
}
```

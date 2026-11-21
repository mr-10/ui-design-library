# Fresh Moth 58

A toggle switch UI element from Uiverse.io by Ali-Tahmazi99.

Source: https://uiverse.io/Ali-Tahmazi99/fresh-moth-58

Author: Ali-Tahmazi99

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox

Colors: #0a100d, #969696, #d3d3d3, #ffaa00, #ffffff, #ffffffbd

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<label class="container">

    <input id="check" type="checkbox">
    <span></span>

    <label for="check" class="shadow"></label>
</label>
```

### styles.css

```css
/* From Uiverse.io by Ali-Tahmazi99 - Tags: checkbox */
input[type = "checkbox"] {
  visibility: hidden;
  display: none;
  appearance: none;
  -webkit-appearance: none;
}

label.container {
  display: block;
  width: 60px;
  height: 30px;
  background: #d3d3d3;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  box-shadow: 9px 9px 29px #969696,
             -9px -9px 29px #ffffff;
}

label.shadow {
  width: 50px;
  height: 20px;
  position: absolute;
  border-radius: 50px;
  left: 5px;
  top: 5px;
  box-shadow: inset 3px 3px 10px #969696,
              inset -3px -3px 5px #ffffffbd;
  cursor: pointer;
}

.container span {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #ffaa00;
  margin: 5px;
  border-radius: 50px;
  font-size: 20px;
  transition: all 0.3s ease-in;
  position: relative;
  left: 0;
  z-index: 1;
}

.container span::after {
  position: absolute;
  top: 6px;
  left: 4px;
  transition-delay: 5s;
}

input[type = "checkbox"]:checked ~ span {
  left: 29px;
  transition: 0.3s ease-in;
  background: #0a100d;
  transform: rotate(220deg);
}
```

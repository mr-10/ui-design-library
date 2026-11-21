# Heavy Cheetah 95

A checkbox UI element from Uiverse.io by Nawsome.

Source: https://uiverse.io/Nawsome/heavy-cheetah-95

Author: Nawsome

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox

Colors: #fff

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="content">
  <label class="checkBox">
    <input id="ch1" type="checkbox">
    <div class="transition"></div>
  </label>
</div>
```

### styles.css

```css
/* From Uiverse.io by Nawsome - Tags: checkbox */
.clear {
  clear: both;
}

.checkBox {
  display: block;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 3px solid rgba(255, 255, 255, 0);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 0px 2px #fff;
}

.checkBox div {
  width: 60px;
  height: 60px;
  background-color: #fff;
  top: -52px;
  left: -52px;
  position: absolute;
  transform: rotateZ(45deg);
  z-index: 100;
}

.checkBox input[type=checkbox]:checked + div {
  left: -10px;
  top: -10px;
}

.checkBox input[type=checkbox] {
  position: absolute;
  left: 50px;
  visibility: hidden;
}

.transition {
  transition: 300ms ease;
}
```

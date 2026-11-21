# Terrible Mayfly 58

A checkbox UI element from Uiverse.io by david-mohseni.

Source: https://uiverse.io/david-mohseni/terrible-mayfly-58

Author: david-mohseni

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox, hamburger, menu

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<label for="menu-icon" class="menu-icon">
  <input id="menu-icon" type="checkbox" />
  <span></span>
  <span></span>
  <span></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by david-mohseni  - Tags: checkbox, hamburger, menu */
.menu-icon {
  position: relative;
  width: 60px;
  height: 50px;
  background: rgb(0, 0, 0);
  padding: 10px;
  cursor: pointer;
}
.menu-icon input {
  display: none;
}
.menu-icon span {
  display: block;
  position: relative;
  height: 3px;
  width: 100%;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  opacity: 1;
  left: 0;
  margin-bottom: 24%;
  transition: 0.3s ease-in-out;
}
.menu-icon span {
  transform-origin: left center;
}
.menu-icon input:checked ~ span {
  background: red;
  left: 5px;
  margin-bottom: 28%;
}
.menu-icon input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg);
}
.menu-icon input:checked ~ span:nth-of-type(2) {
  opacity: 0;
}
.menu-icon input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg);
}
```

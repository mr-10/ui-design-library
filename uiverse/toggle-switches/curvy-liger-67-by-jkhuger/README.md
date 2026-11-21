# Curvy Liger 67

A toggle switch UI element from Uiverse.io by JkHuger.

Source: https://uiverse.io/JkHuger/curvy-liger-67

Author: JkHuger

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch

Colors: #fff

Fonts: See styles.css

Spacing and radius: 0 50px 50px 50px, 50px 50px 50px 0

## Source Code

### index.html

```html
<div class="container">  
  <input class="label-check" id="label-check" type="checkbox">
    <label for="label-check" class="hamburger-label">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    <label></label></label></div>
```

### styles.css

```css
/* From Uiverse.io by JkHuger - Tags: switch */
.label-check {
  display: none;
}

.hamburger-label {
  width: 70px;
  height: 58px;
  display: block;
  cursor: pointer;
}

.hamburger-label div {
  width: 70px;
  height: 6px;
  background-color: #fff;
  position: absolute;
}

.line1 {
  transition: all .3s;
}

.line2 {
  margin: 18px 0 0 0;
  transition: 0.3s;
}

.line3 {
  margin: 36px 0 0 0;
  transition: 0.3s;
}

#label-check:checked + .hamburger-label .line1 {
  transform: rotate(35deg) scaleX(.55) translate(39px, -4.5px);
  border-radius: 50px 50px 50px 0;
}

#label-check:checked + .hamburger-label .line3 {
  transform: rotate(-35deg) scaleX(.55) translate(39px, 4.5px);
  border-radius: 0 50px 50px 50px;
}

#label-check:checked + .hamburger-label .line2 {
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  width: 45px;
}
```

# Good Duck 38

A toggle switch UI element from Uiverse.io by Mohsinech.

Source: https://uiverse.io/Mohsinech/good-duck-38

Author: Mohsinech

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, blue, switch, menu, burger

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 4px, 50%

## Source Code

### index.html

```html
<div class="container">
    <div class="toggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
```

### styles.css

```css
/* From Uiverse.io by Mohsinech - Tags: simple, blue, switch, menu, burger */
.toggle {
  position: relative;
  width: 70px;
  height: 70px;
  background-color: rgb(1, 103, 255);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
}

.toggle span {
  position: absolute;
  height: 2px;
  width: 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s;
}

.toggle span:nth-child(1) {
  transform: translateY(-15px);
  width: 25px;
  left: 15px;
}

.toggle.toggle:hover span:nth-child(1) {
  width: 40px;
  transform: translateY(0px) rotate(45deg);
  transition-delay: 0.125s;
}

.toggle span:nth-child(2) {
  transform: translateY(15px);
  width: 15px;
  left: 15px;
}

.toggle.toggle:hover span:nth-child(2) {
  width: 40px;
  transform: translateY(0px) rotate(315deg);
  transition-delay: 0.125s;
}

.toggle:hover span:nth-child(3) {
  transform: translateX(60px);
}
```

# Itchy Mule 52

A toggle switch UI element from Uiverse.io by vinodjangid07.

Source: https://uiverse.io/vinodjangid07/itchy-mule-52

Author: vinodjangid07

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch, neon, toggle switch

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 20px, 50%

## Source Code

### index.html

```html
<input id="checkboxInput" type="checkbox">
    <label class="toggleSwitch" for="checkboxInput">
    </label>
```

### styles.css

```css
/* From Uiverse.io by vinodjangid07 - Tags: switch, neon, toggle switch */
/* To hide the checkbox */
#checkboxInput {
  display: none;
}

.toggleSwitch {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50px;
  height: 17px;
  background-color: rgb(82, 82, 82);
  border-radius: 20px;
  cursor: pointer;
  transition-duration: .2s;
}

.toggleSwitch::after {
  content: "";
  position: absolute;
  height: 22px;
  width: 22px;
  left: 0px;
  background-color: rgb(41, 41, 41);
  border-radius: 50%;
  transition-duration: .2s;
  border: 2px solid rgb(82, 82, 82);
}

#checkboxInput:checked+.toggleSwitch::after {
  transform: translateX(100%);
  transition-duration: .2s;
  border: 2px solid rgb(165, 255, 105);
}
/* Switch background change */
#checkboxInput:checked+.toggleSwitch {
  background-color: rgb(165, 255, 105);
  transition-duration: .2s;
}
```

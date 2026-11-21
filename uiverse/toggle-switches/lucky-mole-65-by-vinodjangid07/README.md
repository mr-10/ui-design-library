# Lucky Mole 65

A toggle switch UI element from Uiverse.io by vinodjangid07.

Source: https://uiverse.io/vinodjangid07/lucky-mole-65

Author: vinodjangid07

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: skeuomorphism, switch, metal

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
/* From Uiverse.io by vinodjangid07 - Tags: skeuomorphism, switch, metal */
/* To hide the checkbox */
#checkboxInput {
  display: none;
}

.toggleSwitch {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 80px;
  height: 40px;
  background-color: rgb(199, 199, 199);
  border-radius: 20px;
  cursor: pointer;
  transition-duration: .3s;
}

.toggleSwitch::after {
  content: "";
  position: absolute;
  height: 40px;
  width: 40px;
  left: 0px;
  background: conic-gradient(rgb(104, 104, 104),white,rgb(104, 104, 104),white,rgb(104, 104, 104));
  border-radius: 50%;
  transition-duration: .3s;
  box-shadow: 5px 2px 7px rgba(8, 8, 8, 0.308);
}

#checkboxInput:checked+.toggleSwitch::after {
  transform: translateX(100%);
  transition-duration: .3s;
}
/* Switch background change */
#checkboxInput:checked+.toggleSwitch {
  background-color: rgb(153, 197, 151);
  transition-duration: .3s;
}
```

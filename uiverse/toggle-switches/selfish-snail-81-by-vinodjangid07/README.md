# Selfish Snail 81

A toggle switch UI element from Uiverse.io by vinodjangid07.

Source: https://uiverse.io/vinodjangid07/selfish-snail-81

Author: vinodjangid07

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch

Colors: #5e5e5e

Fonts: See styles.css

Spacing and radius: 30px, 5px

## Source Code

### index.html

```html
<input id="checkbox" type="checkbox">
    <label class="Switch" for="checkbox">
    </label>
```

### styles.css

```css
/* From Uiverse.io by vinodjangid07 - Tags: switch */
#checkbox {
  display: none;
}

.Switch {
  position: relative;
  width: 50px;
  height: 100px;
  background-color: rgb(228, 228, 228);
  border-radius: 30px;
  z-index: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.274) inset,
    -2px 0px 5px rgba(255, 255, 255, 0.411) inset;
}

.Switch::before {
  content: "";
  background-color: rgb(39, 39, 39);
  position: absolute;
  height: 80%;
  width: 5px;
  border-radius: 5px;
}

.Switch::after {
  background-color: #5e5e5e;
  border: 1px solid rgb(35, 255, 35);
  content: "";
  position: absolute;
  height: 5px;
  width: 25px;
  top: 15px;
  transition-duration: .3s;
  box-shadow: 5px 2px 5px rgba(8, 8, 8, 0.288);
  border-radius: 5px;
}

#checkbox:checked+.Switch::after {
  transform: translateY(65px);
  transition-duration: .3s;
  border: 1px solid rgb(236, 0, 0);
}
```

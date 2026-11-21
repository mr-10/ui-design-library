# Tame Eagle 29

A toggle switch UI element from Uiverse.io by vinodjangid07.

Source: https://uiverse.io/vinodjangid07/tame-eagle-29

Author: vinodjangid07

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch, hamburger, click effect

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<input id="checkbox" type="checkbox">
    <label class="toggle" for="checkbox">
        <div id="bar1" class="bars"></div>
        <div id="bar2" class="bars"></div>
        <div id="bar3" class="bars"></div>
    </label>
```

### styles.css

```css
/* From Uiverse.io by vinodjangid07 - Tags: switch, hamburger, click effect */
#checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: .3s;
}

.bars {
  width: 100%;
  height: 4px;
  background-color: rgb(253, 255, 243);
  border-radius: 5px;
  transition-duration: .3s;
}

/* #checkbox:checked + .toggle .bars {
  margin-left: 13px;
} */

#checkbox:checked + .toggle #bar2 {
  transform: translateY(14px) rotate(60deg);
  margin-left: 0;
  transform-origin: right;
  transition-duration: .3s;
  z-index: 2;
}

#checkbox:checked + .toggle #bar1 {
  transform: translateY(28px) rotate(-60deg);
  transition-duration: .3s;
  transform-origin: left;
  z-index: 1;
}

#checkbox:checked + .toggle {
  transform: rotate(-90deg);
}
/* #checkbox:checked + .toggle #bar3 {
  transform: rotate(90deg);
  transition-duration: .3s;
  transform-origin:right;
} */
```

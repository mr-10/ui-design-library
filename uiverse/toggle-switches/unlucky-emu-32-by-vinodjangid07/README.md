# Unlucky Emu 32

A toggle switch UI element from Uiverse.io by vinodjangid07.

Source: https://uiverse.io/vinodjangid07/unlucky-emu-32

Author: vinodjangid07

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch, hamburger, toggle, click effect

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<input type="checkbox" id="checkbox">
    <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label>
```

### styles.css

```css
/* From Uiverse.io by vinodjangid07 - Tags: switch, hamburger, toggle, click effect */
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
  background-color: rgb(76, 189, 151);
  border-radius: 5px;
  transition-duration: .3s;
}

#checkbox:checked + .toggle .bars {
  margin-left: 13px;
}

#checkbox:checked + .toggle #bar2 {
  transform: rotate(135deg);
  margin-left: 0;
  transform-origin: center;
  transition-duration: .3s;
}

#checkbox:checked + .toggle #bar1 {
  transform: rotate(45deg);
  transition-duration: .3s;
  transform-origin: left center;
}

#checkbox:checked + .toggle #bar3 {
  transform: rotate(-45deg);
  transition-duration: .3s;
  transform-origin: left center;
}
```

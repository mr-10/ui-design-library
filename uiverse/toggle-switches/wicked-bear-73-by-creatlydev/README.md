# Wicked Bear 73

A toggle switch UI element from Uiverse.io by Creatlydev.

Source: https://uiverse.io/Creatlydev/wicked-bear-73

Author: Creatlydev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch, toggle, creative, html, css, toggle switch

Colors: #e8e8e8

Fonts: See styles.css

Spacing and radius: 4rem, 50%

## Source Code

### index.html

```html
<input type="checkbox" name="check-toggle" id="checkbox" hidden="">
<label for="checkbox" class="toggle">
  G
  <div class="toggle__switch">
      <div class="toggle__circle"></div>
  </div>
  D
</label>
```

### styles.css

```css
/* From Uiverse.io by Creatlydev - Tags: switch, toggle, creative, html, css, toggle switch */
.toggle {
  display: flex;
  align-items: center;
  gap: .2rem;
  font-weight: 900;
  font-size: 4rem;
  color: hsl(119, 84%, 10%);
  text-shadow: 0 0 2px #e8e8e8;
}

.toggle__switch {
  --bg-toggle: hsl(0, 0%, 100%);
  --bg-circle: hsl(119, 84%, 10%);
  --w-toggle-switch: 150px;
  --w-h-toggle-circle: 35px;
  --pd-toggle-switch: .5rem;
  height: 55px;
  width: var(--w-toggle-switch);
  background-color: var(--bg-toggle);
  border-radius: 4rem;
  display: flex;
  align-items: center;
  padding: 0 var(--pd-toggle-switch);
  cursor: pointer;
  transition: background-color 500ms;
}

.toggle__circle {
  width: var(--w-h-toggle-circle);
  height: var(--w-h-toggle-circle);
  background-color: var(--bg-circle);
  border-radius: 50%;
  transition: margin 400ms ease-in-out, background-color 1000ms;
}

#checkbox:checked + .toggle .toggle__circle {
  margin-left: calc(var(--w-toggle-switch) - (var(--pd-toggle-switch) * 2) - var(--w-h-toggle-circle));
}

#checkbox:checked + .toggle > .toggle__switch {
  --bg-toggle: hsl(119, 84%, 10%);
  --bg-circle: hsl(0, 0%, 96%);
  box-shadow: 0 .3rem 5rem 0 hsla(96, 85%, 34%, 30%);
}
```

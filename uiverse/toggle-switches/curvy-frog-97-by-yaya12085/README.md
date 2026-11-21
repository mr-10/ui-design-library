# Curvy Frog 97

A toggle switch UI element from Uiverse.io by Yaya12085.

Source: https://uiverse.io/Yaya12085/curvy-frog-97

Author: Yaya12085

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch, input, toggle, colorful, variations

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 9999px

## Source Code

### index.html

```html
<input class="switch" type="checkbox" checked="true">
```

### styles.css

```css
/* From Uiverse.io by Yaya12085 - Source: https://www.material-tailwind.com/docs/react/switch - Tags: switch, input, toggle, colorful, variations */
.switch {
  position: relative;
  height: 1.5rem;
  width: 3rem;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 9999px;
  background-color: rgba(100, 116, 139, 0.377);
  transition: all .3s ease;
}

.switch:checked {
  background-color: rgba(236, 72, 153, 1);
}

.switch::before {
  position: absolute;
  content: "";
  left: calc(1.5rem - 1.6rem);
  top: calc(1.5rem - 1.6rem);
  display: block;
  height: 1.6rem;
  width: 1.6rem;
  cursor: pointer;
  border: 1px solid rgba(100, 116, 139, 0.527);
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 3px 10px rgba(100, 116, 139, 0.327);
  transition: all .3s ease;
}

.switch:hover::before {
  box-shadow: 0 0 0px 8px rgba(0, 0, 0, .15)
}

.switch:checked:hover::before {
  box-shadow: 0 0 0px 8px rgba(236, 72, 153, .15)
}

.switch:checked:before {
  transform: translateX(100%);
  border-color: rgba(236, 72, 153, 1);
}
```

# Warm Falcon 58

A toggle switch UI element from Uiverse.io by Adir-SL.

Source: https://uiverse.io/Adir-SL/warm-falcon-58

Author: Adir-SL

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: switch

Colors: #1d9bf0, #aaaaaa, #dedede, #ffffff

Fonts: See styles.css

Spacing and radius: var(--sizeVar)

## Source Code

### index.html

```html
<label class="switch">
  <input type="checkbox">
  <span class="slider"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by Adir-SL - Tags: switch */
/* The switch - the box around the slider */
.switch {
  --sizeVar: 2em;
  --color-primary: #dedede;
  --color-secondary: #aaaaaa;
  --color-primary-on: #1d9bf0;
  --color-secondary-on: #ffffff;
  position: absolute;
  width: calc(var(--sizeVar) * 2);
  height: var(--sizeVar);
  background-color: var(--color-primary);
  border-radius: var(--sizeVar);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05) inset;
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition: background-color 150ms ease-out;
}

.switch::after {
  content: "";
  position: absolute;
  margin: calc(var(--sizeVar) / 10);
  height: calc(var(--sizeVar) - calc(var(--sizeVar) / 5));
  width: calc(var(--sizeVar) - calc(var(--sizeVar) / 5));
  background-color: var(--color-secondary);
  border-radius: var(--sizeVar);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05) inset, 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: transform 150ms ease-out, background-color 150ms ease-out;
}

.switch:has(input:checked)::after {
  transform: translateX(var(--sizeVar));
  background-color: var(--color-secondary-on);
}

.switch:has(input:checked) {
  background-color: var(--color-primary-on);
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
```

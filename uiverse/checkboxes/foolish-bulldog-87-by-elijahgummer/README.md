# Foolish Bulldog 87

A checkbox UI element from Uiverse.io by elijahgummer.

Source: https://uiverse.io/elijahgummer/foolish-bulldog-87

Author: elijahgummer

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox

Colors: #dc143c, #f9f9f9, #ff475425

Fonts: See styles.css

Spacing and radius: 0.2rem

## Source Code

### index.html

```html
<label class="checkbox">
  <input class="checkbox-input" type="checkbox" />
  <svg class="checkbox-check" width="28" height="28">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
</label>
```

### styles.css

```css
/* From Uiverse.io by elijahgummer  - Tags: checkbox */
.checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}

.checkbox:hover .checkbox-check {
  background: #ff475425;
}

.checkbox-input {
  width: 1px;
  height: 1px;
  opacity: 0;
}

.checkbox-input:checked + .checkbox-check {
  background: #dc143c;
  stroke-dashoffset: 0;
}

.checkbox-check {
  border: 0.2rem solid #dc143c;
  stroke: #f9f9f9;
  stroke-dasharray: 25;
  stroke-dashoffset: 25;
  stroke-linecap: round;
  stroke-width: 0.2rem;
  border-radius: 0.2rem;
  fill: none;
  transition:
    background 0.4s,
    stroke-dashoffset 0.6s;
}
```

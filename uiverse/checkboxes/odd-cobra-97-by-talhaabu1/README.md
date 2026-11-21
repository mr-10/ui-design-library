# Odd Cobra 97

A checkbox UI element from Uiverse.io by talhaabu1.

Source: https://uiverse.io/talhaabu1/odd-cobra-97

Author: talhaabu1

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 12px, 6px

## Source Code

### index.html

```html
<div class="checkbox-wrapper-23">
  <input type="checkbox" id="check-23">
  <label for="check-23" style="--size: 30px">
    <svg viewBox="0,0,50,50">
      <path d="M5 30 L 20 45 L 45 5"></path>
    </svg>
  </label>
</div>
```

### styles.css

```css
/* From Uiverse.io by talhaabu1 - Tags: checkbox */
.checkbox-wrapper-23 *,
  .checkbox-wrapper-23 *:after,
  .checkbox-wrapper-23 *:before {
  box-sizing: border-box;
}

.checkbox-wrapper-23 input {
  position: absolute;
  opacity: 0;
}

.checkbox-wrapper-23 input:checked + label svg path {
  stroke-dashoffset: 0;
}

.checkbox-wrapper-23 input:focus + label {
  transform: scale(1.03);
}

.checkbox-wrapper-23 input + label {
  display: block;
  border: 2px solid rgb(253, 237, 237);
  width: var(--size);
  height: var(--size);
  border-radius: 6px;
  cursor: pointer;
  transition: all .2s ease;
}

.checkbox-wrapper-23 input + label:active {
  transform: scale(1.05);
  border-radius: 12px;
}

.checkbox-wrapper-23 input + label svg {
  pointer-events: none;
  padding: 5%;
}

.checkbox-wrapper-23 input + label svg path {
  fill: none;
  stroke: rgb(247, 247, 247);
  stroke-width: 4px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 100;
  stroke-dashoffset: 101;
  transition: all 250ms cubic-bezier(1,0,.37,.91);
}
```

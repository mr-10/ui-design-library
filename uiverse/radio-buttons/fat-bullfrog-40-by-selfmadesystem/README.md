# Fat Bullfrog 40

A radio button UI element from Uiverse.io by SelfMadeSystem.

Source: https://uiverse.io/SelfMadeSystem/fat-bullfrog-40

Author: SelfMadeSystem

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: radio

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 99999px

## Source Code

### index.html

```html
<div class="radio-input">
  <label class="container">
    <svg>
      <rect class="hi" pathLength="800"></rect>
    </svg>
    <input type="radio" id="value-1" name="value-radio" checked="" value="value-1">
  </label>
  <label class="container">
    <svg>
      <rect class="hi" pathLength="600"></rect>
    </svg>
    <input type="radio" id="value-2" name="value-radio" value="value-2">
  </label>
  <label class="container">
    <svg>
      <rect class="hi" pathLength="700"></rect>
    </svg>
    <input type="radio" id="value-3" name="value-radio" value="value-3">
  </label>
</div>
```

### styles.css

```css
/* From Uiverse.io by SelfMadeSystem - Tags: radio */
.radio-input {
  --c: rgb(74, 156, 233);
}

.radio-input label {
  position: relative;
  display: inline-block;
  border-radius: 99999px;
  appearance: unset;
  margin: 8px;
  width: 3em;
  height: 3em;
}

.radio-input input {
  position: absolute;
  border-radius: 99999px;
  appearance: unset;
  inset: 0.75em;
  margin: 0;
  transition: background-color 0.5s;
}

.radio-input input:checked {
  background-color: var(--c);
  filter: drop-shadow(0 0 10px var(--c));
}

.radio-input svg {
  position: absolute;
  pointer-events: none;
  overflow: visible;
  filter: drop-shadow(0 0 4px var(--c));
}

.radio-input svg .hi {
  width: 3em;
  height: 3em;
  rx: 1.5em;
  fill: transparent;
  stroke: var(--c);
  stroke-width: 0.25em;
  stroke-dasharray: 70 30;
  animation: strokeWee 32s linear infinite;
}

@keyframes strokeWee {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: 1000;
  }
}
```

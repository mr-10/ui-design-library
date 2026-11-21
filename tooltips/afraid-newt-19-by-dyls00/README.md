# Afraid Newt 19

A tooltip UI element from Uiverse.io by Dyls00.

Source: https://uiverse.io/Dyls00/afraid-newt-19

Author: Dyls00

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: tooltip, smooth, cube, colorful, custom

Colors: #ee6d22

Fonts: See styles.css

Spacing and radius: 15px

## Source Code

### index.html

```html
<div class="tooltip-container">
  <span class="tooltip">Uiverse.io</span>
  <span class="text">Tooltip</span>
</div>
```

### styles.css

```css
/* From Uiverse.io by Dyls00  - Tags: tooltip, smooth, cube, colorful, custom */
/* This is an example, feel free to delete this code */
.tooltip-container {
  --background: #ee6d22;
  position: relative;
  background: var(--background);
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 15px;
  font-size: 25px;
  padding: 0.7em 1.8em;
}

.tooltip {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.3em 0.6em;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  border-radius: 15px;
  font-size: 50px;
  margin-top: 90%;
  background: black;
}

.tooltip::before {
  position: absolute;
  content: "";
  height: 0.6em;
  width: 0.6em;
  bottom: 1.8em;
  left: 50%;
  transform: translate(-50%) rotate(180deg);
  background: var(--background);
}

.tooltip-container:hover .tooltip {
  top: -100%;
  opacity: 1;
  color: white;
  visibility: visible;
  pointer-events: auto;
}
```

# Cold Chicken 82

A tooltip UI element from Uiverse.io by akshat-patel28.

Source: https://uiverse.io/akshat-patel28/cold-chicken-82

Author: akshat-patel28

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: tooltip, colorful, color, html, css, css effect, multicolor, button hover effect

Colors: #ac0039, #f80254, #ffdb0f, #fff, #ffffff

Fonts: See styles.css

Spacing and radius: 5px, 8px 8px 8px 8px

## Source Code

### index.html

```html
<div class="tooltip-container">
  <span class="tooltip-1">Create your own designs.</span>
  <span class="tooltip-2">Find creative elements.</span>
  <span class="tooltip-3">Participate in challenges.</span>
  <span>UIVERSE</span>
</div>
```

### styles.css

```css
/* From Uiverse.io by akshat-patel28  - Tags: tooltip, colorful, color, html, css, css effect, multicolor, button hover effect  */
.tooltip-container {
  position: relative;
  background: #f80254;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 17px;
  padding: 14px 26px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.62),
    inset 0px -2px 3px rgba(0, 0, 0, 0.48), inset 1px 1px 4px #ffffff,
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: #fff;
}

.tooltip-1,
.tooltip-2,
.tooltip-3 {
  position: absolute;
  transform: translateX(-50%);
  font-weight: 800;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  border-radius: 8px 8px 8px 8px;
  background: #ffdb0f;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.62),
    inset 0px -2px 3px rgba(0, 0, 0, 0.48), inset 1px 1px 4px #ffffff,
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  min-width: 180px;
  padding: 8px;
  color: #ac0039;
  font-size: 11px;
}
.tooltip-1 {
  top: 0%;
  left: 50%;
  width: 200px;
}
.tooltip-2 {
  left: 100%;
}

.tooltip-3 {
  left: 0;
}
.tooltip-container:hover .tooltip-1 {
  top: -100%;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.tooltip-container:hover .tooltip-2 {
  left: -100%;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.tooltip-container:hover .tooltip-3 {
  left: 200%;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
```

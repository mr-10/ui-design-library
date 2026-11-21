# Neat Bird 56

A button UI element from Uiverse.io by Wlidha09.

Source: https://uiverse.io/Wlidha09/neat-bird-56

Author: Wlidha09

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover, modern, animated

Colors: #4f95da, #91c9ff, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="center">
  <button class="btn">
    <svg viewBox="0 0 150 50" height="50px" width="150px" class="svg">
      <polyline class="bg-line" points="149,1 149,49 1,49 1,1 149,1"></polyline>
      <polyline class="hl-line" points="149,1 149,49 1,49 1,1 149,1"></polyline>
    </svg>
    <span>HOVER ME</span>
  </button>
</div>
```

### styles.css

```css
/* From Uiverse.io by Wlidha09  - Tags: button, hover, modern, animated */
.center {
  width: 150px;
  height: 50px;
  position: relative;
}

.btn {
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: transparent;
  border: 1px solid #91c9ff;
  outline: none;
  transition: 1s ease-in-out;
}

.svg {
  position: absolute;
  left: 0;
  top: 0;
  fill: none;
  stroke: #fff;
  stroke-dasharray: 150 480;
  stroke-dashoffset: 150;
  transition: 1s ease-in-out;
}

.btn:hover {
  transition: 1s ease-in-out;
  background: #4f95da;
}

.btn:hover .svg {
  stroke-dashoffset: -480;
}

.btn span {
  color: white;
  font-size: 17px;
  font-weight: 100;
}
```

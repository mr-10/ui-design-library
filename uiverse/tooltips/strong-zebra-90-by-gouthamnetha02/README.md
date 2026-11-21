# Strong Zebra 90

A tooltip UI element from Uiverse.io by gouthamnetha02.

Source: https://uiverse.io/gouthamnetha02/strong-zebra-90

Author: gouthamnetha02

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: tooltip, red, hover, color, hover effect, css, css effect

Colors: #333, #b92929, #db3434, #fff

Fonts: See styles.css

Spacing and radius: 5px, 8px

## Source Code

### index.html

```html
<div class="tooltip">
  <button>Hover Me!</button>
  <div class="tooltiptext">You Hovered Me!</div>
</div>
```

### styles.css

```css
/* From Uiverse.io by gouthamnetha02  - Tags: tooltip, red, hover, color, hover effect, css, css effect */
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltip button {
  background-color: #db3434;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease-out;
}

.tooltip button:hover {
  background-color: #b92929;
  transform: scale(1.05);
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.tooltiptext {
  visibility: hidden;
  width: 160px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #333 transparent transparent transparent;
}
```

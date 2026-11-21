# Angry Cat 58

A tooltip UI element from Uiverse.io by Sacha-PDV.

Source: https://uiverse.io/Sacha-PDV/angry-cat-58

Author: Sacha-PDV

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, tooltip, circle

Colors: #3498db, #ff6b6b, #fff

Fonts: See styles.css

Spacing and radius: 4px, 50%

## Source Code

### index.html

```html
<div class="tooltip">
  <span>Hover me</span>
  <div class="tooltip-text">
    Ceci est un tooltip moderne et animé avec des bulles autour.
  </div>
  <div class="tooltip-bubble"></div>
  <div class="tooltip-bubble"></div>
  <div class="tooltip-bubble"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Sacha-PDV  - Tags: simple, tooltip, circle */
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.tooltip-text {
  visibility: hidden;
  width: 200px;
  background-color: #3498db;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 10px;
  position: absolute;
  z-index: 1;
  top: -65px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
}
.tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, -60px);
}
.tooltip-text::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #3498db transparent transparent transparent;
}
.tooltip:hover .tooltip-bubble {
  display: block;
}
.tooltip-bubble {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #3498db;
  border-radius: 50%;
  display: none;
}
.tooltip-bubble:nth-child(3) {
  bottom: 170px;
  left: 43%;
}
.tooltip-bubble:nth-child(4) {
  bottom: 170px;
  left: 90%;
}
.tooltip-bubble:nth-child(5) {
  bottom: 170px;
  left: -10%;
}
.tooltip span {
  display: inline-block;
  padding: 5px 10px;
  background: #3498db;
  color: #fff;
  border-radius: 4px;
  transition: background 0.3s;
}
.tooltip:hover span {
  background: #ff6b6b;
}
```

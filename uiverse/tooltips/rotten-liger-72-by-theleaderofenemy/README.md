# Rotten Liger 72

A tooltip UI element from Uiverse.io by theleaderofenemy.

Source: https://uiverse.io/theleaderofenemy/rotten-liger-72

Author: theleaderofenemy

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, tooltip, action, light

Colors: #0b798a, #0e94a0, #333, #fff

Fonts: See styles.css

Spacing and radius: 4px

## Source Code

### index.html

```html
<div class="tooltip-container">
  <span class="text">Tooltip</span>
  <span class="tooltip">Uiverse.io</span>
</div>
```

### styles.css

```css
/* From Uiverse.io by theleaderofenemy  - Tags: simple, tooltip, action, light */
.tooltip-container {
  position: relative;
  display: inline-block;
  margin: 20px;
}

.text {
  color: #333;
  font-size: 18px;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  background: #0b798a;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.tooltip::before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent #0b798a transparent;
  transform: translateX(-50%);
}

.tooltip-container:hover .tooltip {
  top: 120%;
  opacity: 1;
  visibility: visible;
  background: #0e94a0;
  transform: translate(-50%, -5px);
}
```

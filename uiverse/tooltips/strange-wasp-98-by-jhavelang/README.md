# Strange Wasp 98

A tooltip UI element from Uiverse.io by JhaveLang.

Source: https://uiverse.io/JhaveLang/strange-wasp-98

Author: JhaveLang

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, tooltip, animation

Colors: #1f9df5, #22d3ee, #fff

Fonts: See styles.css

Spacing and radius: 4px, 8px

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
/* From Uiverse.io by JhaveLang  - Tags: simple, tooltip, animation */
/* This is an example, feel free to delete this code */
.tooltip-container {
  --background: linear-gradient(45deg, #22d3ee, #1f9df5);
  position: relative;
  background: var(--background);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 17px;
  padding: 0.7em 1.8em;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #fff;
}

.tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) scale(0.8);
  transform-origin: bottom;
  padding: 0.3em 0.6em;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  background: var(--background);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tooltip::before {
  position: absolute;
  content: "";
  height: 0.6em;
  width: 0.6em;
  bottom: -0.2em;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  background: var(--background);
}

.tooltip-container:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) scale(1);
}
.tooltip-container:hover {
  transform: scale(0.9);
}
```

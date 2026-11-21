# Afraid Snail 51

A tooltip UI element from Uiverse.io by Cksunandh.

Source: https://uiverse.io/Cksunandh/afraid-snail-51

Author: Cksunandh

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, tooltip, button, color, btn, html, css, simple button

Colors: #00a36d, #ffffff

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<div class="tooltip-container">
  <span class="tooltip">Hello</span>
  <span class="text">Let me Pop up</span>
</div>
```

### styles.css

```css
/* From Uiverse.io by Cksunandh  - Tags: simple, tooltip, button, color, btn, html, css, simple button */
.tooltip-container {
  color: #ffffff;
  --background: #00a36d;
  position: relative;
  background: var(--background);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 17px;
  padding: 0.7em 1.8em;
  border-radius: 50px;
}

.tooltip {
  background-color: #00a36d;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.3em 0.6em;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  border-radius: 50px;
}

.tooltip::before {
  background-color: #00a36d;
  position: absolute;
  content: "";
  height: 0.6em;
  width: 0.6em;
  bottom: -0.2em;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
}

.tooltip-container:hover .tooltip {
  top: -100%;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
```

# Nice Stingray 21

A tooltip UI element from Uiverse.io by MRez321.

Source: https://uiverse.io/MRez321/nice-stingray-21

Author: MRez321

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: tooltip, hover, transition

Colors: #7579e7

Fonts: See styles.css

Spacing and radius: 10px, 5px

## Source Code

### index.html

```html
<div class="tooltip-container">
  <span class="tooltip">Hey There!</span>
  <span class="text">Tooltip</span>
</div>
```

### styles.css

```css
/* From Uiverse.io by MRez321  - Tags: tooltip, hover, transition */
.tooltip-container {
  --background: #7579e7;
  background: var(--background);
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 17px;
  border-radius: 10px;
  width: 8em;

  display: flex;
  justify-content: center;
  align-items: center;
}

.tooltip {
  position: absolute;
  top: 0;
  left: 30%;
  transform: translateX(-50%);
  padding: 0.3em 0.6em;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  background: var(--background);
  border-radius: 5px;
  width: 7em;
  text-align: center;
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
  top: -100%;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  animation: shake 500ms ease-in-out forwards;
}

@keyframes shake {
  0% {
    transform: rotate(2deg);
  }
  50% {
    transform: rotate(-3deg);
  }
  70% {
    transform: rotate(3deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.text {
  position: relative;
  padding: 0.7em 1.8em;
  overflow: hidden;
}

.text::before {
  content: "(^_^)/";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: inherit;
  background-color: var(--background);
  transition: 0.3s;
}

.tooltip-container:hover .text::before {
  top: 0;
}
```

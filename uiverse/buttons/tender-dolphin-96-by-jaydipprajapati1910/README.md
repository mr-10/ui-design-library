# Tender Dolphin 96

A button UI element from Uiverse.io by JaydipPrajapati1910.

Source: https://uiverse.io/JaydipPrajapati1910/tender-dolphin-96

Author: JaydipPrajapati1910

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, water, transparent

Colors: #222

Fonts: See styles.css

Spacing and radius: 16px

## Source Code

### index.html

```html
<button class="button">
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by JaydipPrajapati1910 - Tags: button, water, transparent */
button {
  appearance: button;
  outline: none;
  border: none;
  border-radius: 16px;
  box-sizing: border-box;
  color: #222;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 19px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

button:after {
  background-clip: padding-box;
  box-shadow: inset 4px 4px 4px rgba(15, 15, 15, 0.315),
    4px 4px 4px rgba(28, 28, 28, 0.13);
  border: none;
  border-radius: 16px;
  outline: none;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

button:main, button:focus {
  user-select: auto;
}

button:hover:not(:disabled) {
  filter: brightness(1.1);
}

button:disabled {
  cursor: auto;
}

button:active:after {
  border-width: 0 0 0px;
}

button:active {
  padding-bottom: 10px;
}
```

# Neat Duck 51

A button UI element from Uiverse.io by UmangLadha.

Source: https://uiverse.io/UmangLadha/neat-duck-51

Author: UmangLadha

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, button, html, css, buttons, hover button, #button, 3d button

Colors: #111111, #151e33, #1d2c4d, #1e2d4d, #1f2d4d, #1f3053, #38538c, #38579b, #5c8bee, #87adff

Fonts: See styles.css

Spacing and radius: 4px

## Source Code

### index.html

```html
<button role="button" class="button">
  <span class="text">Button</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by UmangLadha  - Tags: simple, button, html, css, buttons, hover button, #button, 3d button */
.button {
  background: #38579b;
  border-top: 1px solid #38538c;
  border-right: 1px solid #1f2d4d;
  border-bottom: 1px solid #151e33;
  border-left: 1px solid #1f2d4d;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d,
    0 6px 0px #1f3053, 0 8px 4px 1px #111111;
  -moz-box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d,
    0 6px 0px #1f3053, 0 8px 4px 1px #111111;
  box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053,
    0 8px 4px 1px #111111;
  color: #fff;
  font: bold 20px "helvetica neue", helvetica, arial, sans-serif;
  line-height: 1;
  padding: 10px 0 12px 0;
  text-align: center;
  text-shadow: 0px -1px 1px #1e2d4d;
  width: 150px;
  -webkit-background-clip: padding-box;
}

.button:hover {
  -webkit-box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d,
    0 6px 0px #1f3053, 0 8px 4px 1px #111111;
  -moz-box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d,
    0 6px 0px #1f3053, 0 8px 4px 1px #111111;
  box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053,
    0 8px 4px 1px #111111;
  cursor: pointer;
}

.button:active {
  -webkit-box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d,
    0 2px 0 #1f3053, 0 4px 3px 0 #111111;
  -moz-box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d,
    0 2px 0 #1f3053, 0 4px 3px 0 #111111;
  box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053,
    0 4px 3px 0 #111111;
  transform: translateY(4px);
}
```

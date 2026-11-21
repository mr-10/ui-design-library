# Splendid Chicken 97

A button UI element from Uiverse.io by Bodyhc.

Source: https://uiverse.io/Bodyhc/splendid-chicken-97

Author: Bodyhc

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, buttons, simple button, hover button, #button, 3d button, button hover effect , 2d button

Colors: #725ac1, #ffff

Fonts: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif

Spacing and radius: 20px, 30px, 50%

## Source Code

### index.html

```html
<button class="button">Button</button>
```

### styles.css

```css
/* From Uiverse.io by Bodyhc  - Tags: button, buttons, simple button, hover button, #button, 3d button, button hover effect , 2d button */
button {
  position: relative;
  border: 1px solid #725ac1;
  outline: none;
  background-color: transparent;
  padding: 15px 30px;
  border-radius: 30px;
  z-index: 2;
  cursor: pointer;
  color: #ffff;
  overflow: hidden;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

button::before {
  content: "";
  position: absolute;
  top: 20%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background-color: #725ac1;
  filter: blur(5px);
  z-index: -1;
  transition: width 0.9s ease-out, height 0.9s ease-out,
    background-color 0.3s ease-out;
  border-radius: 50%;
}

button:hover::before {
  border-radius: 20px;
  width: 300px;
  height: 200px;
  background-color: #725ac1;
}
```

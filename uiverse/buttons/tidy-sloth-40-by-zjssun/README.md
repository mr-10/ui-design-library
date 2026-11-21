# Tidy Sloth 40

A button UI element from Uiverse.io by zjssun.

Source: https://uiverse.io/zjssun/tidy-sloth-40

Author: zjssun

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, neon

Colors: #008cff, #ffffff, #ffffff80

Fonts: See styles.css

Spacing and radius: 8px

## Source Code

### index.html

```html
<button id="btn">
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by zjssun - Tags: button, neon */
button {
  padding: 10px 20px;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 500;
  color: #ffffff80;
  text-shadow: none;
  background: transparent;
  box-shadow: transparent;
  border: 1px solid #ffffff80;
  transition: 0.5s ease;
  user-select: none;
}

#btn:hover,:focus {
  color: #ffffff;
  background: #008cff;
  border: 1px solid #008cff;
  text-shadow: 0 0 5px #ffffff,
              0 0 10px #ffffff,
              0 0 20px #ffffff;
  box-shadow: 0 0 5px #008cff,
              0 0 20px #008cff,
              0 0 50px #008cff,
              0 0 100px #008cff;
}
```

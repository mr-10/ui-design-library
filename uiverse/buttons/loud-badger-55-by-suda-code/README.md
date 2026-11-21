# Loud Badger 55

A button UI element from Uiverse.io by suda-code.

Source: https://uiverse.io/suda-code/loud-badger-55

Author: suda-code

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: blue, button, hover

Colors: #2ba8fb, #3d94cf, #6fc5ff, #6fc5ff50, #ffffff

Fonts: See styles.css

Spacing and radius: 100px

## Source Code

### index.html

```html
<button>
    Button
</button>
```

### styles.css

```css
/* From Uiverse.io by suda-code - Tags: blue, button, hover */
button {
  padding: 12.5px 30px;
  border: 0;
  border-radius: 100px;
  background-color: #2ba8fb;
  color: #ffffff;
  font-weight: Bold;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}

button:hover {
  background-color: #6fc5ff;
  box-shadow: 0 0 20px #6fc5ff50;
  transform: scale(1.1);
}

button:active {
  background-color: #3d94cf;
  transition: all 0.25s;
  -webkit-transition: all 0.25s;
  box-shadow: none;
  transform: scale(0.98);
}
```

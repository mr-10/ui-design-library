# Rude Bear 14

A button UI element from Uiverse.io by adamgiebl.

Source: https://uiverse.io/adamgiebl/rude-bear-14

Author: adamgiebl

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, button, hover

Colors: #725ac1

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<button> Button
</button>
```

### styles.css

```css
/* From Uiverse.io by adamgiebl - Tags: simple, button, hover */
button {
  position: relative;
  display: inline-block;
  margin: 15px;
  padding: 15px 30px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #725AC1;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid #725AC1;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #725AC1;
}

button:hover {
  color: white;
  box-shadow: inset 0 -100px 0 0 #725AC1;
}

button:active {
  transform: scale(0.9);
}
```

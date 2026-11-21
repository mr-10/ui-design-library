# Nasty Mule 87

A button UI element from Uiverse.io by sujithg444.

Source: https://uiverse.io/sujithg444/nasty-mule-87

Author: sujithg444

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, button, hover effect, hoverme, buttons, multicolor

Colors: #ff5370, #ff869a

Fonts: See styles.css

Spacing and radius: 25px

## Source Code

### index.html

```html
<button class="gradient-button">⚡ Join now</button>
```

### styles.css

```css
/* From Uiverse.io by sujithg444  - Tags: simple, button, hover effect, hoverme, buttons, multicolor */
.gradient-button {
  background: linear-gradient(
    to right,
    #ff5370,
    #ff869a
  ); /* Gradient from pink to orange */
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}
.gradient-button:hover {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}
```

# Quiet Panther 30

A button UI element from Uiverse.io by asgardOP.

Source: https://uiverse.io/asgardOP/quiet-panther-30

Author: asgardOP

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, button, hover, smooth, game, html, css

Colors: See styles.css

Fonts: "Courier New", Courier, monospace

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button class="button">Minecraft</button>
```

### styles.css

```css
/* From Uiverse.io by asgardOP  - Tags: simple, button, hover, smooth, game, html, css */
.button {
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  padding: 15px;
  background-color: rgb(223, 223, 223);
  border-left: 3px solid white;
  border-top: 3px solid white;
  border-right: 3px solid gray;
  border-bottom: 3px solid gray;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.1rem;
  font-weight: 900;
  outline: 2px solid black;
}

.button:hover {
  background-color: rgb(0, 197, 0);
  color: white;
  outline-color: white;
  border-left: 3px solid rgb(0, 255, 0);
  border-top: 3px solid rgb(0, 255, 0);
  border-right: 3px solid green;
  border-bottom: 3px solid green;
}

.button:active {
  border-left: 3px solid green;
  border-top: 3px solid green;
  border-right: 3px solid rgb(0, 255, 0);
  border-bottom: 3px solid rgb(0, 255, 0);
}
```

# Massive Tiger 88

A button UI element from Uiverse.io by Ratinax.

Source: https://uiverse.io/Ratinax/massive-tiger-88

Author: Ratinax

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, red, button, active

Colors: #aa1111

Fonts: See styles.css

Spacing and radius: 100%

## Source Code

### index.html

```html
<div class="container">
  <button class="button">
    Button
  </button>
</div>
```

### styles.css

```css
/* From Uiverse.io by Ratinax - Tags: simple, red, button, active */
.container {
  position: relative;
  width: 4.5em;
  height: 4em;
  background-color: red;
  overflow: hidden;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  scale: 2;
  box-shadow: 0 .5em #AA1111;
}

.button {
  cursor: pointer;
  position: absolute;
  text-transform: uppercase;
  height: 110%;
  width: 110%;
  background-color: red;
  color: white;
  text-shadow: 0 0.1em 0.1em black;
}

.container:has(.button:active) {
  box-shadow: none;
  margin-top: 2em;
}
```

# Spotty Treefrog 35

A button UI element from Uiverse.io by Brian-Pob.

Source: https://uiverse.io/Brian-Pob/spotty-treefrog-35

Author: Brian-Pob

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, css animation, button hover effect

Colors: See styles.css

Fonts: sans-serif

Spacing and radius: 5px

## Source Code

### index.html

```html
<button class="button">
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by Brian-Pob - Tags: button, css animation, button hover effect  */
button {
  position: relative;
  z-index: 1;
  overflow: hidden;
  border: none;
  border-radius: 5px;
  padding: 1rem 2rem;
  font-size: 20px;
  font-family: sans-serif;
  background-color: purple;
  color: white;
  transition: all .7s ease-in-out;
}

button:hover {
  color: purple;
}

button::before {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
  width: 0;
  height: 100%;
  content: "";
  background-color: white;
  transition: all 700ms ease-in-out;
}

button:hover::before {
  left: unset;
  right: 0;
  width: 100%;
  transform: rotate(180deg);
}
```

# Horrible Goat 29

A button UI element from Uiverse.io by mostafabazyar.

Source: https://uiverse.io/mostafabazyar/horrible-goat-29

Author: mostafabazyar

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 3px, 50%, 8px

## Source Code

### index.html

```html
<button>Notification By HTML Data attribute</button>
```

### styles.css

```css
/* From Uiverse.io by mostafabazyar - Tags: button */
button {
  position: relative;
  margin: 1rem;
  z-index: 2;
  border-radius: 8px;
  appearance: none;
  padding: 1em 2em;
  transition: all 0.2s;
}

button {
  padding: 1.2rem;
  position: relative;
  z-index: 1;
}

button::before {
  content: "6";
  position: absolute;
  display: flex;
  top: -0.75em;
  right: -0.75em;
  height: 1.8em;
  width: 1.8em;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: red;
  color: white;
  z-index: 999;
  transition: all 0.2s;
}

button:hover {
  border-radius: 3px;
  border-color: red;
}

button:hover::before {
  height: 2em;
  width: 2em;
  font-size: 1.5em;
}
```

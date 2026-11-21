# Black Dodo 44

A button UI element from Uiverse.io by gharsh11032000.

Source: https://uiverse.io/gharsh11032000/black-dodo-44

Author: gharsh11032000

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, border, hover effect

Colors: #1a1a1a, #646cff

Fonts: inherit

Spacing and radius: 8px

## Source Code

### index.html

```html
<button class="button">
  Vite Button
</button>
```

### styles.css

```css
/* From Uiverse.io by gharsh11032000 - Tags: button, border, hover effect */
.button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  color: white;
  transition: border-color 0.25s;
}

.button:hover {
  border-color: #646cff;
}

.button:focus,
.button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
```

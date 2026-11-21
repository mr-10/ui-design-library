# Shy Eel 92

A button UI element from Uiverse.io by megasteve19.

Source: https://uiverse.io/megasteve19/shy-eel-92

Author: megasteve19

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 0.5rem

## Source Code

### index.html

```html
<button>
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by megasteve19 - Tags: button */
button {
  border: none;
  background-color: seagreen;
  color: white;
  font-size: 1.15rem;
  font-weight: 500;
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transform: translate(1) translate(0, 0);
  transition: transform 225ms, box-shadow 225ms;
}

button:hover {
  transform: scale(1.05) translate(0, -0.15rem);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.35);
}

button:active {
  transform: scale(1) translate(0, 0.15rem);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
```

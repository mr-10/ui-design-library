# Unlucky Cat 84

A button UI element from Uiverse.io by Hysean2.

Source: https://uiverse.io/Hysean2/unlucky-cat-84

Author: Hysean2

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, minimalist, button, modern

Colors: #222222, #414141

Fonts: See styles.css

Spacing and radius: 2em

## Source Code

### index.html

```html
<button class="button">Click me</button>
```

### styles.css

```css
/* From Uiverse.io by Hysean2  - Tags: simple, minimalist, button, modern */
.button {
  cursor: pointer;
  padding: 1em 1.8em;
  border-radius: 2em;
  border: 3px solid #414141;
  font-weight: bold;
  font-size: 1em;
  color: white;
  background-color: #222222;
  transition: transform 0.3s ease;
}

.button:hover {
  transform: scale(1.15);
  border: none;
  background: linear-gradient(
    -80deg,
    rgba(150, 93, 233, 1) 10%,
    rgba(99, 88, 238, 1) 95%
  );
}

.button:active {
  transform: scale(0.95);
}
```

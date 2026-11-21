# Modern Pig 84

A button UI element from Uiverse.io by Codecite.

Source: https://uiverse.io/Codecite/modern-pig-84

Author: Codecite

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, gradient, button, clean

Colors: #ea5455, #feb692

Fonts: "Dosis", sans-serif

Spacing and radius: 50px

## Source Code

### index.html

```html
<button class="btn">Hover</button>
```

### styles.css

```css
/* From Uiverse.io by Codecite - Tags: simple, gradient, button, clean */
.btn {
  transition: all 0.3s ease-in-out;
  font-family: "Dosis", sans-serif;
}

.btn {
  width: 150px;
  height: 60px;
  border-radius: 50px;
  background-image: linear-gradient(135deg, #feb692 0%, #ea5455 100%);
  box-shadow: 0 20px 30px -6px rgba(238, 103, 97, 0.5);
  outline: none;
  cursor: pointer;
  border: none;
  font-size: 24px;
  color: white;
}

.btn:hover {
  transform: translateY(3px);
  box-shadow: none;
}

.btn:active {
  opacity: 0.5;
}
```

# Grumpy Kangaroo 69

A button UI element from Uiverse.io by aadium.

Source: https://uiverse.io/aadium/grumpy-kangaroo-69

Author: aadium

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, button, glow, colorful

Colors: #4b4bff, #5de7ff, #ff53eb

Fonts: See styles.css

Spacing and radius: 5em

## Source Code

### index.html

```html
<button>
  Click Me
</button>
```

### styles.css

```css
/* From Uiverse.io by aadium - Tags: gradient, button, glow, colorful */
button {
  padding: 15px 32px;
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 5em;
  background-size: 200% 100%;
  background-image: linear-gradient(145deg, #ff53eb, #4b4bff, #5de7ff);
  box-shadow: 3px 3px 10px 2px #4b4bff, -3px -3px 10px 2px #ff53eb;
  transition: 0.5s;
}

button:hover {
  background-position: 99%;
  box-shadow: 3px 3px 10px 2px #5de7ff, -3px -3px 10px 2px #4b4bff;
}

button:active {
  transform: scale(0.8) rotate(5deg);
  box-shadow: 3px 3px 15px 3px #5de7ff, -3px -3px 15px 3px #4b4bff;
}
```

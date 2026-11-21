# Curvy Crab 71

A button UI element from Uiverse.io by biswacpcode.

Source: https://uiverse.io/biswacpcode/curvy-crab-71

Author: biswacpcode

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #f44336

Fonts: 'Poppins', sans-serif

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button>
  HOVER ME
</button>
```

### styles.css

```css
/* From Uiverse.io by biswacpcode - Tags: button */
button {
  color: white;
  text-decoration: none;
  font-size: 25px;
  border: none;
  background: none;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}

button::before {
  margin-left: auto;
}

button::after, button::before {
  content: '';
  width: 0%;
  height: 2px;
  background: #f44336;
  display: block;
  transition: 0.5s;
}

button:hover::after, button:hover::before {
  width: 100%;
}
```

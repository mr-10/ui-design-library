# Wise Goat 75

A button UI element from Uiverse.io by iZOXVL.

Source: https://uiverse.io/iZOXVL/wise-goat-75

Author: iZOXVL

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, animation, minimalist, black, button

Colors: #1a1a1a, #292929, #2c2c2c, #666666, #ffffff

Fonts: See styles.css

Spacing and radius: 30px

## Source Code

### index.html

```html
<button class="boton-elegante">Explorar</button>
```

### styles.css

```css
/* From Uiverse.io by iZOXVL  - Tags: simple, material design, animation, minimalist, black, button */
.boton-elegante {
  padding: 15px 30px;
  border: 2px solid #2c2c2c;
  background-color: #1a1a1a;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.4s ease;
  outline: none;
  position: relative;
  overflow: hidden;
  font-weight: bold;
}

.boton-elegante::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  transform: scale(0);
  transition: transform 0.5s ease;
}

.boton-elegante:hover::after {
  transform: scale(4);
}

.boton-elegante:hover {
  border-color: #666666;
  background: #292929;
}
```

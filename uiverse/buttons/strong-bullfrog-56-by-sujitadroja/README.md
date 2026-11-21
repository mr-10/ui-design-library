# Strong Bullfrog 56

A button UI element from Uiverse.io by SujitAdroja.

Source: https://uiverse.io/SujitAdroja/strong-bullfrog-56

Author: SujitAdroja

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, button, hover effect, hoverme, hover button, button hover effect , button hover

Colors: #32323c, #494958

Fonts: See styles.css

Spacing and radius: 0.3rem, 0.5rem, 50%

## Source Code

### index.html

```html
<button class="btn">Hover Me</button>
```

### styles.css

```css
/* From Uiverse.io by SujitAdroja  - Tags: simple, material design, button, hover effect, hoverme, hover button, button hover effect , button hover */
.btn {
  position: relative;
  background: none;
  border: 2px solid black;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  transition: all 0.3s;
}
.btn::before {
  content: "";
  height: 0%;
  width: 0%;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  z-index: -1;
  position: absolute;
  background-color: #494958;
  transition: all 0.3s;
}
.btn:hover {
  border: 2px solid #32323c;
  color: white;
}
.btn:hover::before {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 0.3rem;
}
```

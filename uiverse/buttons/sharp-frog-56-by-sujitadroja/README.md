# Sharp Frog 56

A button UI element from Uiverse.io by SujitAdroja.

Source: https://uiverse.io/SujitAdroja/sharp-frog-56

Author: SujitAdroja

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button class="btn">
  Diagonal Swipe
</button>
```

### styles.css

```css
/* From Uiverse.io by SujitAdroja - Tags: button */
.btn {
  color: purple;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid purple;
  padding: 10px 20px;
  font-size: 17px;
  font-weight: bold;
  background: transparent;
  position: relative;
  transition: all 1s;
  overflow: hidden;
}

.btn:hover {
  color: white;
}

.btn::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 0%;
  top: 0;
  left: -40px;
  transform: skewX(45deg);
  background-color: purple;
  z-index: -1;
  transition: all 1s;
}

.btn:hover::before {
  width: 160%;
}
```

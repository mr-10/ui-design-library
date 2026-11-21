# Wet Catfish 33

A button UI element from Uiverse.io by sofiapetushok.

Source: https://uiverse.io/sofiapetushok/wet-catfish-33

Author: sofiapetushok

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #14a1ff64, #14efff, #1b1b1b, #34ffc5, #fff

Fonts: See styles.css

Spacing and radius: 50%, 8px

## Source Code

### index.html

```html
<button class="button">Hover</button>
```

### styles.css

```css
/* From Uiverse.io by sofiapetushok  - Tags: button */
.button {
  cursor: pointer;
  position: relative;
  background: #1b1b1b;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  overflow: hidden;
  z-index: 1;
  color: #fff;
}

.button::after {
  position: absolute;
  content: "";
  top: 97%;
  left: 0;
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #14efff, #34ffc5, transparent);
  transition: width 0.3s ease-in-out;
  box-shadow: 0 0 50px 0 #14a1ff64;
  border-radius: 50%;
}
.button:hover::after {
  width: 200%;
}
```

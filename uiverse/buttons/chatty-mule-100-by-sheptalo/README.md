# Chatty Mule 100

A button UI element from Uiverse.io by sheptalo.

Source: https://uiverse.io/sheptalo/chatty-mule-100

Author: sheptalo

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button>
  HOVER ME!
</button>
```

### styles.css

```css
/* From Uiverse.io by sheptalo - Tags: button */
button {
  border-style: outset;
  font-weight: 1000;
  height: 50px;
  width: 150px;
  background: inherit;
  border: 7px solid orange;
  transition: all 900ms;
}

button::before {
  content: "";
  z-index: -1;
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0%;
  height: 100%;
  width: 0;
  background-color: yellow;
  transition-timing-function: ease-in;
  transition: all 1.3s;
}

button:hover {
  color: rgb(78, 78, 78);
  border: 2px solid yellow;
  transform: scale(1.2);
}

button:hover::before {
  left: 0%;
  width: 100%;
}
```

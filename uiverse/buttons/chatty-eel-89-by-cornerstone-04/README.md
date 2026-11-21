# Chatty Eel 89

A button UI element from Uiverse.io by Cornerstone-04.

Source: https://uiverse.io/Cornerstone-04/chatty-eel-89

Author: Cornerstone-04

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #121212, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button>
    Button
</button>
```

### styles.css

```css
/* From Uiverse.io by Cornerstone-04 - Tags: button */
button {
  position: relative;
  background: none;
  border: solid 1px #121212;
  transition: linear 250ms;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
}

button:is(:hover,:focus) {
  color: #fff;
}

button::after {
  position: absolute;
  content: '';
  inset: 0;
  z-index: -1;
  background-color: #121212;
  transform-origin: left;
  transform: scaleX(0);
  transition: linear 250ms;
}

button:is(:hover, :focus)::after {
  transform: scale(1);
}
```

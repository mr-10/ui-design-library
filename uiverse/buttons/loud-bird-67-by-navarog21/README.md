# Loud Bird 67

A button UI element from Uiverse.io by Navarog21.

Source: https://uiverse.io/Navarog21/loud-bird-67

Author: Navarog21

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #1479ea, #149cea, #212121

Fonts: See styles.css

Spacing and radius: 0.3em

## Source Code

### index.html

```html
<button>
    Hover me
</button>
```

### styles.css

```css
/* From Uiverse.io by Navarog21 - Tags: button */
button {
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge #149CEA;
  outline: none;
  background-color: transparent;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;
}

button::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 3%;
  width: 95%;
  height: 40%;
  background-color: #212121;
  transition: 0.5s;
  transform-origin: center;
}

button::before {
  content: "";
  transform-origin: center;
  position: absolute;
  top: 80%;
  left: 3%;
  width: 95%;
  height: 40%;
  background-color: #212121;
  transition: 0.5s;
}

button:hover::before, button:hover::after {
  transform: scale(0)
}

button:hover {
  box-shadow: inset 0px 0px 25px #1479EA;
}
```

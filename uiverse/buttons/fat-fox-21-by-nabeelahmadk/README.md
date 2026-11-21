# Fat Fox 21

A button UI element from Uiverse.io by NabeelAhmadK.

Source: https://uiverse.io/NabeelAhmadK/fat-fox-21

Author: NabeelAhmadK

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #334b79, #ffffff0d

Fonts: See styles.css

Spacing and radius: 8px

## Source Code

### index.html

```html
<button>
    Button
</button>
```

### styles.css

```css
/* From Uiverse.io by NabeelAhmadK - Tags: button */
button {
  width: fit-content;
  height: 45px;
  background: #ffffff0d;
  border-radius: 8px;
  border: 2px solid #334b79;
  font-size: 15px;
  font-weight: bold;
  color: #334b79;
  -webkit-transition: 0.5s all ease;
  transition: 0.5s all ease;
  position: relative;
  overflow: hidden;
  padding: 10px 25px;
  z-index: 1;
}

button:before {
  width: 50%;
  height: 100%;
  content: "";
  margin: auto;
  position: absolute;
  top: 0%;
  left: -50%;
  background: #334b79;
  transition: all 0.5s ease;
  z-index: -1;
}

button:after {
  width: 50%;
  height: 100%;
  content: "";
  margin: auto;
  position: absolute;
  top: 0%;
  left: 100%;
  background: #334b79;
  transition: all 0.5s ease;
  z-index: -1;
}

button:hover {
  color: white;
  cursor: pointer;
}

button:hover:before {
  top: 0;
  left: 0;
}

button:hover:after {
  top: 0;
  left: 50%;
}
```

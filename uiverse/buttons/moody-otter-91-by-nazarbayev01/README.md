# Moody Otter 91

A button UI element from Uiverse.io by nazarbayev01.

Source: https://uiverse.io/nazarbayev01/moody-otter-91

Author: nazarbayev01

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, active

Colors: #088178, #dcfffc

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<button class="button">button</button>
```

### styles.css

```css
/* From Uiverse.io by nazarbayev01 - Tags: button, active */
button {
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 3px;
  background: #DCFFFC;
  text-transform: uppercase;
  color: #088178;
  transition: all 1000ms;
  font-size: 15px;
  position: relative;
  overflow: hidden;
  outline: 2px solid #088178;
}

button:hover {
  color: #DCFFFC;
  transform: scale(1);
  outline: 2px solid #088178;
  box-shadow: 4px 5px 17px -4px #088178;
}

button::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #088178;
  transform: skewX(30deg);
  z-index: -1;
  transition: width 1000ms;
}

button:hover::before {
  width: 250%;
}
```

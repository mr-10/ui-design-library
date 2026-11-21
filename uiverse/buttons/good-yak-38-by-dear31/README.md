# Good Yak 38

A button UI element from Uiverse.io by Dear31.

Source: https://uiverse.io/Dear31/good-yak-38

Author: Dear31

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, button, hover

Colors: #01aaba68, #199fab

Fonts: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif

Spacing and radius: 10px, 50%

## Source Code

### index.html

```html
<button>
  Hover Me
</button>
```

### styles.css

```css
/* From Uiverse.io by Dear31 - Tags: simple, button, hover */
button {
  padding: 12px 32px;
  border-radius: 10px;
  border: 3px black solid;
  box-shadow: 2px 2px 1px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 700;
  font-size: 17px;
  background-color: #01aaba68;
  overflow: hidden;
  position: relative;
  z-index: 10;
}

button::after {
  content: "";
  position: absolute;
  background-color: #199fab;
  width: 0px;
  height: 0px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all .3s ease-in;
  z-index: -1;
}

button:hover::after {
  transform-origin: center;
  transition: all .3s ease-in;
  width: 200px;
  height: 200px;
}
```

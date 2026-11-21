# Afraid Skunk 10

A button UI element from Uiverse.io by mrhyddenn.

Source: https://uiverse.io/mrhyddenn/afraid-skunk-10

Author: mrhyddenn

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button>
    <span>Button</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by mrhyddenn - Tags: button */
button {
  background: #fff;
  border: none;
  padding: 10px 20px;
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  width: 120px;
  text-transform: uppercase;
  cursor: pointer;
  transform: skew(-21deg);
}

span {
  display: inline-block;
  transform: skew(21deg);
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  right: 100%;
  left: 0;
  background: rgb(20, 20, 20);
  opacity: 0;
  z-index: -1;
  transition: all 0.5s;
}

button:hover {
  color: #fff;
}

button:hover::before {
  left: 0;
  right: 0;
  opacity: 1;
}
```

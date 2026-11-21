# Big Baboon 18

A button UI element from Uiverse.io by LeryLey.

Source: https://uiverse.io/LeryLey/big-baboon-18

Author: LeryLey

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover, dark

Colors: #222, #fff

Fonts: See styles.css

Spacing and radius: 50%, 60px

## Source Code

### index.html

```html
<button class="button">Button</button>
```

### styles.css

```css
/* From Uiverse.io by LeryLey  - Tags: button, hover, dark */
.button {
  cursor: pointer;
  position: relative;
  width: 125px;
  height: 40px;
  border-radius: 60px;
  background: #222;
  color: #fff;
  outline: none;
  overflow: hidden;
  border: 2px solid rgb(56, 56, 56);
  font-weight: 600;
  z-index: 1;
  transition: 0.5s;
}
.button:hover {
  color: white;
}
.button::before {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    rgb(59, 59, 184),
    rgb(163, 65, 65),
    rgb(172, 26, 26)
  );
  left: -15px;
  bottom: 0;
  transform: translateY(50%);
  transition: 0.5s;
  z-index: -1;
}
.button:hover:before {
  width: 170px;
  height: 170px;
}
```

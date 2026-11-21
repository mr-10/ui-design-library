# Witty Deer 63

A button UI element from Uiverse.io by ArturCodeCraft.

Source: https://uiverse.io/ArturCodeCraft/witty-deer-63

Author: ArturCodeCraft

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, links, btn

Colors: #000, #fff

Fonts: inherit

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button class="menu__button">
  <span>Hover me!</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by ArturCodeCraft - Tags: button, links, btn */
/* <reset-style> ============================ */
button {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: inherit;
}
/* <main-style> ============================ */
.menu__button {
  min-width: 62px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid #fff;
  background-color: transparent;
  transition: background-color .4s;
}

.menu__button:hover {
  background-color: #fff;
}

.menu__button span {
  color: #fff;
  line-height: 1;
  transition: color .4s;
}

.menu__button:hover span {
  color: #000;
}
```

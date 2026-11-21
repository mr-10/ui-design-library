# Wet Owl 54

A button UI element from Uiverse.io by SevenAJJY.

Source: https://uiverse.io/SevenAJJY/wet-owl-54

Author: SevenAJJY

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover, code, click

Colors: #3f5cc3, #f5d604, #fae811, #ffce06, #fff696, #fff8c4

Fonts: See styles.css

Spacing and radius: 4px

## Source Code

### index.html

```html
<button class="btn">
  Click Me
</button>
```

### styles.css

```css
/* From Uiverse.io by SevenAJJY - Tags: button, hover, code, click */
.btn {
  --main-color: #ffce06;
  --main-alt-color: #fff696;
  height: 44px;
  font-size: 16px!important;
  line-height: 44px;
  font-weight: 700;
  color: #3f5cc3;
  text-shadow: 0 1px 1px #fff8c4;
  text-transform: uppercase;
  text-align: center;
  -webkit-box-shadow: rgb(99 121 133 / 14%) 0 0 0 4px;
  box-shadow: rgb(99 121 133 / 14%) 0 0 0 4px;
  border-radius: 4px;
  border: none;
  border-top: 1px solid var(--main-alt-color);
  border-bottom: 1px solid var(--main-color);
  background-color: var(--main-color);
  outline: 0;
  cursor: pointer;
  margin: 0 0 5px 4px;
  padding: 0 20px;
  transition: transform .3s ease;
}

.btn:hover {
  border-top-color: var(--main-alt-color);
  border-bottom-color: var(--main-color);
  background: -webkit-gradient(linear, left top, left bottom, from(#fae811), to(#f5d604));
}

.btn:active {
  transform: scale(0.7);
}
```

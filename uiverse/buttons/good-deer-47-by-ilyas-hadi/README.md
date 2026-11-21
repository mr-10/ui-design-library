# Good Deer 47

A button UI element from Uiverse.io by ilyas-hadi.

Source: https://uiverse.io/ilyas-hadi/good-deer-47

Author: ilyas-hadi

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, accessibility, 3d button, 3d form , 3d hover

Colors: #000, #f51a1a7f, #ff00007f, #ff3d00, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button class="button">
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by ilyas-hadi - Tags: button, accessibility, 3d button, 3d form , 3d hover */
.button {
  padding: 1.1rem 2.2rem;
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
  transition: all .2s;
  position: relative;
  border: none;
  background: #000;
}

.button:before,.button:after {
  content: "";
  position: absolute;
  top: 50%;
  background: #ff3d00;
  height: 108%;
  width: 0;
  z-index: -1;
  transition: all .7s;
  transform: translateY(-50%);
}

.button:before {
  left: 0%;
}

.button:after {
  right: 0%;
}

.button:hover {
  color: #fff;
  box-shadow: #f51a1a7f 0 30px 60px -12px inset, #ff00007f 0 18px 36px -18px inset;
  z-index: 2;
}

.button:hover::before {
  width: 50%;
  left: 50%;
}

.button:hover::after {
  width: 50%;
  right: 50%;
}
```

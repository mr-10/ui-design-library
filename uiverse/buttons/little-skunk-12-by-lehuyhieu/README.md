# Little Skunk 12

A button UI element from Uiverse.io by LeHuyHieu.

Source: https://uiverse.io/LeHuyHieu/little-skunk-12

Author: LeHuyHieu

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, box

Colors: #fff

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<button class="btn">
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by LeHuyHieu - Tags: button, box */
.btn {
  outline: none;
  display: inline-block;
  border: 1px solid #fff;
  padding: .8rem 2rem;
  border-radius: 5px;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  transition: .3s;
  cursor: pointer;
  position: relative;
}

.btn::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 5px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  width: 0px;
  height: 0px;
  opacity: 0;
  transition: .3s;
}

.btn::after {
  content: '';
  position: absolute;
  right: 5px;
  bottom: 5px;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  width: 0px;
  height: 0px;
  opacity: 0;
  transition: .3s;
}

.btn:hover {
  box-shadow: 4px 4px 10px rgb(184, 184, 184);
  transform: translateY(-5px);
}

.btn:hover::after, .btn:hover::before {
  height: 20px;
  width: 20px;
  opacity: 1;
}
```

# Fluffy Bear 28

A button UI element from Uiverse.io by Codecite.

Source: https://uiverse.io/Codecite/fluffy-bear-28

Author: Codecite

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover, btn, hover effect

Colors: #1e293b, #fff

Fonts: system-ui

Spacing and radius: 999px

## Source Code

### index.html

```html
<button class="btn"><span>Button</span></button>
```

### styles.css

```css
/* From Uiverse.io by Codecite - Tags: button, hover, btn, hover effect */
.btn {
  border: 0 solid;
  cursor: pointer;
  font-family: system-ui;
  font-size: 100%;
  background: linear-gradient(90deg, blue, red);
  border-radius: 999px;
  font-weight: 900;
  padding: 1.8rem 5rem;
  position: relative;
  text-transform: uppercase;
}

.btn span {
  background: #1e293b;
  border-radius: 999px;
  color: #fff;
  display: grid;
  inset: 5px;
  place-items: center;
  position: absolute;
  transition: background 0.3s;
}

.btn:hover span {
  background: none;
}
```

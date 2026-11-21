# Calm Pug 41

A button UI element from Uiverse.io by natelyt12.

Source: https://uiverse.io/natelyt12/calm-pug-41

Author: natelyt12

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button class="btn-1">Hover me!</button>
```

### styles.css

```css
/* From Uiverse.io by natelyt12  - Tags: button */
.btn-1 {
  position: relative;
  color: white;
  border: none;
  padding: 8px 20px;
  transition: 300ms;
  box-sizing: border-box;
  background-color: transparent;
}

.btn-1::before {
  content: "";
  position: absolute;
  background-color: white;
  top: 0;
  left: 0;
  width: 0px;
  height: 100%;
  transition: 300ms;
  transform: skewX(-20deg);
}

.btn-1::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0px;
  height: 100%;
  transition: 300ms;
  background-color: white;
  opacity: 0.2;
  transform: skewX(-20deg);
}

.btn-1:hover {
  padding-left: 25px;
  cursor: pointer;
}

.btn-1:hover::before {
  width: 5px;
}

.btn-1:hover::after {
  width: 100%;
}
```

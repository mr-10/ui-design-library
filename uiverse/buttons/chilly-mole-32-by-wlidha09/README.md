# Chilly Mole 32

A button UI element from Uiverse.io by Wlidha09.

Source: https://uiverse.io/Wlidha09/chilly-mole-32

Author: Wlidha09

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #232963, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button class="btn-white" href="#">
  Discover
</button>
```

### styles.css

```css
/* From Uiverse.io by Wlidha09 - Tags: button */
.btn-white {
  display: inline-flex;
  align-items: center;
  color: #fff;
  border: 1px solid #fff;
  min-height: 50px;
  padding: 0 20px;
  font-size: 17px;
  text-transform: uppercase;
  z-index: 1;
  position: relative;
  background-color: transparent;
}

.btn-white::before {
  content: "";
  background-color: #fff;
  display: block;
  width: 45px;
  height: 1px;
  margin-right: 20px;
}

.btn-white::after {
  content: "";
  background-color: #fff;
  display: block;
  width: 0%;
  height: 100%;
  right: 0;
  top: 0;
  position: absolute;
  z-index: -1;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.btn-white:hover {
  color: #232963;
  text-decoration: none;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.btn-white:hover::after {
  width: 100%;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.btn-white:hover::before {
  background-color: #232963;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
```

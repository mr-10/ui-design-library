# Grumpy Elephant 48

A button UI element from Uiverse.io by eslam-hany.

Source: https://uiverse.io/eslam-hany/grumpy-elephant-48

Author: eslam-hany

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #002b5b, #ea5455, #fff

Fonts: See styles.css

Spacing and radius: 15px

## Source Code

### index.html

```html
<button class="btn">
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by eslam-hany - Tags: button */
.btn {
  position: relative;
  padding: 10px 50px;
  font-size: 20px;
  border: 1px solid #002B5B;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 15px;
  transition: all 0.5s;
  z-index: 1;
}

.btn:hover {
  transform: scale(1.1);
  color: #fff;
  transition: all 0.5s;
}

.btn::after {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  width: 0%;
  height: 100%;
  border-radius: 15px;
  background: linear-gradient(#002B5b,#EA5455);
  transition: all 0.5s;
  z-index: -1;
}

.btn:hover::after {
  top: 0%;
  left: 0%;
  width: 100%;
  transition: all 0.5s;
}
```

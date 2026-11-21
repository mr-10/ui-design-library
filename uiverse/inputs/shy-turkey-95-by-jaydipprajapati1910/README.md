# Shy Turkey 95

A input UI element from Uiverse.io by JaydipPrajapati1910.

Source: https://uiverse.io/JaydipPrajapati1910/shy-turkey-95

Author: JaydipPrajapati1910

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, input

Colors: #222, #555, #999, #c3c6ce

Fonts: See styles.css

Spacing and radius: 25px

## Source Code

### index.html

```html
<input class="input" name="text" type="text" placeholder="Name">
```

### styles.css

```css
/* From Uiverse.io by JaydipPrajapati1910 - Tags: animation, input */
.input {
  max-width: 190px;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: #222;
  padding: 15px 5px 10px 20px;
  box-shadow: Inset 0 1px 25px rgba(0, 0, 0, 0.55);
  border-radius: 25px;
}

.input:focus {
  border: 2px solid #c3c6ce;
}

.input::placeholder {
  color: #555;
  transition: all 0.3s ease;
}

.input:focus::placeholder {
  color: #999;
}
```

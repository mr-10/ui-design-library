# Good Mouse 67

A button UI element from Uiverse.io by adamgiebl.

Source: https://uiverse.io/adamgiebl/good-mouse-67

Author: adamgiebl

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: neumorphism, button

Colors: #4d4d4d, #bcbcbc, #e0e0e0, #ffffff

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<button class="neu-button">Press me</button>
```

### styles.css

```css
/* From Uiverse.io by adamgiebl - Tags: neumorphism, button */
.neu-button {
  background-color: #e0e0e0;
  border-radius: 50px;
  box-shadow: inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff;
  color: #4d4d4d;
  cursor: pointer;
  font-size: 18px;
  padding: 15px 40px;
  transition: all 0.2s ease-in-out;
  border: 2px solid rgb(206, 206, 206);
}

.neu-button:hover {
  box-shadow: inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff;
}

.neu-button:focus {
  outline: none;
  box-shadow: inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff;
}
```

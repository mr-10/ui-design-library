# Bitter Octopus 23

A input UI element from Uiverse.io by JaydipPrajapati1910.

Source: https://uiverse.io/JaydipPrajapati1910/bitter-octopus-23

Author: JaydipPrajapati1910

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: neumorphism, input

Colors: #555, #999, #cbced1, #ffffff

Fonts: See styles.css

Spacing and radius: 25px

## Source Code

### index.html

```html
<input placeholder="Username" type="text" name="text" class="input">
```

### styles.css

```css
/* From Uiverse.io by JaydipPrajapati1910 - Tags: neumorphism, input */
.input {
  max-width: 190px;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: #555;
  padding: 15px 5px 10px 20px;
  box-shadow: inset 8px 8px 8px #cbced1,
              inset -8px -8px 8px #ffffff;
  border-radius: 25px;
}

.input::placeholder {
  color: #555;
  transition: all 0.3s ease;
}

.input:focus::placeholder {
  color: #999;
}
```

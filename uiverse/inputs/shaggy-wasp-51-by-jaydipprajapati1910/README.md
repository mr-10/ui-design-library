# Shaggy Wasp 51

A input UI element from Uiverse.io by JaydipPrajapati1910.

Source: https://uiverse.io/JaydipPrajapati1910/shaggy-wasp-51

Author: JaydipPrajapati1910

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input, transparent, input effect , box-shadow

Colors: #222, #999

Fonts: See styles.css

Spacing and radius: 25px

## Source Code

### index.html

```html
<input type="text" name="text" class="input" placeholder="Username">
```

### styles.css

```css
/* From Uiverse.io by JaydipPrajapati1910 - Tags: input, transparent, input effect , box-shadow */
.input {
  max-width: 190px;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: #222;
  padding: 15px 5px 10px 20px;
  box-shadow: inset 4px 4px 4px rgba(15, 15, 15, 0.315),4px 4px 4px rgba(28, 28, 28, 0.13);
  border-radius: 25px;
  background-clip: padding-box;
}

.input:focus {
  padding-bottom: 10px;
}

.input::placeholder {
  color: #222;
  text-transform: uppercase;
  transition: all 0.3s ease;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: .3px;
}

.input:focus::placeholder {
  color: #999;
}
```

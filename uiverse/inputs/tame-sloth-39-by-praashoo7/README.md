# Tame Sloth 39

A input UI element from Uiverse.io by Praashoo7.

Source: https://uiverse.io/Praashoo7/tame-sloth-39

Author: Praashoo7

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: neumorphism, input, smooth

Colors: #969696, #ccc, #ffffff

Fonts: See styles.css

Spacing and radius: 15px

## Source Code

### index.html

```html
<input type="text" autocomplete="off" name="text" class="input" placeholder="Username">
```

### styles.css

```css
/* From Uiverse.io by Praashoo7 - Tags: neumorphism, input, smooth */
.input {
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 1em;
  background-color: #ccc;
  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
  transition: 300ms ease-in-out;
}

.input:focus {
  background-color: white;
  transform: scale(1.05);
  box-shadow: 13px 13px 100px #969696,
             -13px -13px 100px #ffffff;
}
```

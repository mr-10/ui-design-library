# Tough Ape 65

A input UI element from Uiverse.io by Alanav29.

Source: https://uiverse.io/Alanav29/tough-ape-65

Author: Alanav29

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, email, minimalist, input, light, toggle, text animation, input effect

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="input-container">
  <input type="text" name="email" class="text-input" />
  <label for="email">Email</label>
</div>
```

### styles.css

```css
/* From Uiverse.io by Alanav29  - Tags: simple, email, minimalist, input, light, toggle, text animation, input effect  */
.input-container {
  width: auto;
  position: static;
  display: flex;
  flex-direction: column-reverse;
}

.input-container label {
  color: black;
  position: relative;
  top: 2px;
  border: solid white;
  border-top: none;
  border-right: none;
  border-left: none;
  width: fit-content;
  transition: transform 0.2s;
  margin: 0px 0px 0px 12px;
  padding: 0px 4px 0px 4px;
  font-size: 20px;
}

.input-container input:focus + label {
  color: rgb(161, 66, 249);
  transform: scale(1.2);
  transform: translateX(0.5rem);
}

.input-container input {
  border: 2px rgb(161, 66, 249) solid;
  padding: 8px;
}

.input-container input:focus {
  outline: none;
}
```

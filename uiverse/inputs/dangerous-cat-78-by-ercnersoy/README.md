# Dangerous Cat 78

A input UI element from Uiverse.io by ercnersoy.

Source: https://uiverse.io/ercnersoy/dangerous-cat-78

Author: ercnersoy

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: neumorphism, input

Colors: #c5c5c5, #e8e8e8, #ffffff

Fonts: See styles.css

Spacing and radius: 1rem

## Source Code

### index.html

```html
<input type="text" name="text" class="input" placeholder="Type here...">
```

### styles.css

```css
/* From Uiverse.io by ercnersoy - Tags: neumorphism, input */
.input {
 border: none;
 padding: 1rem;
 border-radius: 1rem;
 background: #e8e8e8;
 box-shadow: 20px 20px 60px #c5c5c5,
		-20px -20px 60px #ffffff;
 transition: 0.3s;
}

.input:focus {
 outline-color: #e8e8e8;
 background: #e8e8e8;
 box-shadow: inset 20px 20px 60px #c5c5c5,
		inset -20px -20px 60px #ffffff;
 transition: 0.3s;
}
```

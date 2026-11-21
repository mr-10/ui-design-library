# Average Firefox 86

A input UI element from Uiverse.io by Yaseen549.

Source: https://uiverse.io/Yaseen549/average-firefox-86

Author: Yaseen549

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input

Colors: #212121

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<input placeholder="Enter your text..." class="input" name="text" type="text">
```

### styles.css

```css
/* From Uiverse.io by Yaseen549 - Tags: input */
.input {
  background-color: #212121;
  max-width: 190px;
  height: 40px;
  padding: 10px;
  /* text-align: center; */
  border: 2px solid white;
  border-radius: 5px;
  /* box-shadow: 3px 3px 2px rgb(249, 255, 85); */
}

.input:focus {
  color: rgb(0, 255, 255);
  background-color: #212121;
  outline-color: rgb(0, 255, 255);
  box-shadow: -3px -3px 15px rgb(0, 255, 255);
  transition: .1s;
  transition-property: box-shadow;
}
```

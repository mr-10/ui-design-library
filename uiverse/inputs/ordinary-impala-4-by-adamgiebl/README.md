# Ordinary Impala 4

A input UI element from Uiverse.io by adamgiebl.

Source: https://uiverse.io/adamgiebl/ordinary-impala-4

Author: adamgiebl

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input

Colors: #dfd9d9, #eee

Fonts: See styles.css

Spacing and radius: 1rem

## Source Code

### index.html

```html
<div class="input-wrapper">
  <input type="text" placeholder="Type here..." name="text" class="input">
</div>
```

### styles.css

```css
/* From Uiverse.io by adamgiebl - Tags: input */
.input-wrapper input {
  background-color: #eee;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  width: 13em;
  border-radius: 1rem;
  color: lightcoral;
  box-shadow: 0 0.4rem #dfd9d9;
  cursor: pointer;
}

.input-wrapper input:focus {
  outline-color: lightcoral;
}
```

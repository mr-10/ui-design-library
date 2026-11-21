# Little Eagle 84

A input UI element from Uiverse.io by saidbl1.

Source: https://uiverse.io/saidbl1/little-eagle-84

Author: saidbl1

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input, modern, animated, clean

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 8px

## Source Code

### index.html

```html
<input class="input" name="text" type="text" placeholder="Full Name">
```

### styles.css

```css
/* From Uiverse.io by saidbl1 - Tags: input, modern, animated, clean */
.input {
  height: 40px;
  border-radius: 8px;
  border: 2px solid hsl(236, 92%, 66%);
  outline: none;
  transition: 200ms ease-in;
  padding-left: 1rem;
}

.input:focus {
  border-bottom: 4px solid hsl(236, 92%, 66%);
  padding-top: 2px;
}

.input::placeholder {
  color: hsl(236, 92%, 66%);
  opacity: 0.5;
}
```

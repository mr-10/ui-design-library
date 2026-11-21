# Helpless Swan 97

A input UI element from Uiverse.io by lenfear23.

Source: https://uiverse.io/lenfear23/helpless-swan-97

Author: lenfear23

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: neumorphism, input

Colors: #c8c8c8, #e8e8e8, #ffffff

Fonts: 'Courier New', Courier, monospace

Spacing and radius: 10px

## Source Code

### index.html

```html
<input placeholder="First name" class="input" name="firstName" type="text">
```

### styles.css

```css
/* From Uiverse.io by lenfear23 - Tags: neumorphism, input */
.input {
  max-width: 200px;
  min-height: 40px;
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;
  outline: none;
  background: #e8e8e8;
  box-shadow: 5px 5px 17px #c8c8c8,
             -5px -5px 17px #ffffff;
  border: none;
  border-radius: 10px;
  transition: all .5s;
}

.input:focus {
  background: #e8e8e8;
  box-shadow: inset 5px 5px 17px #c8c8c8,
            inset -5px -5px 17px #ffffff;
}
```

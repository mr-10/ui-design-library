# Honest Fox 62

A input UI element from Uiverse.io by ClawHack1.

Source: https://uiverse.io/ClawHack1/honest-fox-62

Author: ClawHack1

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input

Colors: #212121

Fonts: 'Segoe UI', sans-serif

Spacing and radius: 20px

## Source Code

### index.html

```html
<div class="input">
    <input type="text" required="" autocomplete="off">
    <label for="name">Username</label>
</div>
```

### styles.css

```css
/* From Uiverse.io by ClawHack1 - Tags: input */
.input {
  font-family: 'Segoe UI', sans-serif;
  margin: 1em 0 1em 0;
  max-width: 190px;
  position: relative;
}

.input input {
  font-size: 100%;
  padding: 0.8em;
  outline: none;
  border: 2px solid rgb(141, 109, 255);
  background-color: transparent;
  border-radius: 20px;
  width: 100%;
}

.input label {
  font-size: 100%;
  position: absolute;
  left: 0;
  padding: 0.8em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgb(255, 255, 255);
}

.input :is(input:focus, input:valid)~label {
  transform: translateY(-50%) scale(.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em;
  background-color: #212121;
}

.inputGroup :is(input:focus, input:valid) {
  border-color: rgb(37, 37, 211);
}
```

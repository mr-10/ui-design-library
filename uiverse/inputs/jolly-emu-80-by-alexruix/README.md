# Jolly Emu 80

A input UI element from Uiverse.io by alexruix.

Source: https://uiverse.io/alexruix/jolly-emu-80

Author: alexruix

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: email, input

Colors: #05060f, #05060f0a, #05060f99, #05060fc2

Fonts: See styles.css

Spacing and radius: .5rem

## Source Code

### index.html

```html
<div class="input-group">
    <label class="label">Email address</label>
    <input autocomplete="off" name="Email" id="Email" class="input" type="email">
    <div></div></div>
```

### styles.css

```css
/* From Uiverse.io by alexruix - Tags: email, input */
.input {
  max-width: 190px;
  height: 44px;
  background-color: #05060f0a;
  border-radius: .5rem;
  padding: 0 1rem;
  border: 2px solid transparent;
  font-size: 1rem;
  transition: border-color .3s cubic-bezier(.25,.01,.25,1) 0s, color .3s cubic-bezier(.25,.01,.25,1) 0s,background .2s cubic-bezier(.25,.01,.25,1) 0s;
}

.label {
  display: block;
  margin-bottom: .3rem;
  font-size: .9rem;
  font-weight: bold;
  color: #05060f99;
  transition: color .3s cubic-bezier(.25,.01,.25,1) 0s;
}

.input:hover, .input:focus, .input-group:hover .input {
  outline: none;
  border-color: #05060f;
}

.input-group:hover .label, .input:focus {
  color: #05060fc2;
}
```

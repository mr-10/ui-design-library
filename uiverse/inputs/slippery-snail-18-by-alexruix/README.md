# Slippery Snail 18

A input UI element from Uiverse.io by alexruix.

Source: https://uiverse.io/alexruix/slippery-snail-18

Author: alexruix

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: material design, input

Colors: #1a73e8, #212121, #2196f3, #9e9e9e, #e8e8e8, #f5f5f5

Fonts: See styles.css

Spacing and radius: 1rem

## Source Code

### index.html

```html
<div class="input-group">
  <input required="" type="text" name="text" autocomplete="off" class="input">
  <label class="user-label">First Name</label>
</div>
```

### styles.css

```css
/* From Uiverse.io by alexruix - Tags: material design, input */
.input-group {
 position: relative;
}

.input {
 border: solid 1.5px #9e9e9e;
 border-radius: 1rem;
 background: none;
 padding: 1rem;
 font-size: 1rem;
 color: #f5f5f5;
 transition: border 150ms cubic-bezier(0.4,0,0.2,1);
}

.user-label {
 position: absolute;
 left: 15px;
 color: #e8e8e8;
 pointer-events: none;
 transform: translateY(1rem);
 transition: 150ms cubic-bezier(0.4,0,0.2,1);
}

.input:focus, input:valid {
 outline: none;
 border: 1.5px solid #1a73e8;
}

.input:focus ~ label, input:valid ~ label {
 transform: translateY(-50%) scale(0.8);
 background-color: #212121;
 padding: 0 .2em;
 color: #2196f3;
}
```

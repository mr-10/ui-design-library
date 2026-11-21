# Gentle Dragon 92

A input UI element from Uiverse.io by saidbl1.

Source: https://uiverse.io/saidbl1/gentle-dragon-92

Author: saidbl1

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input, focus, floating

Colors: #212121, #ee8456, #fff

Fonts: See styles.css

Spacing and radius: 2px, 5px

## Source Code

### index.html

```html
<div class="inputBox">
  <input required="" type="text">
  <span>First name</span>
</div>
```

### styles.css

```css
/* From Uiverse.io by saidbl1 - Tags: input, focus, floating */
.inputBox {
  position: relative;
}

.inputBox input {
  padding: 15px 20px;
  outline: none;
  background: transparent;
  border-radius: 5px;
  color: #fff;
  border: 1px solid#ee8456;
  font-size: 1em;
}

.inputBox span {
  position: absolute;
  left: 0;
  padding: 15px 20px;
  pointer-events: none;
  font-size: 1em;
  transition: 0.4s cubic-bezier(0.05, 0.81, 0, 0.93);
  color: #ee8456;
  letter-spacing: 0.1em;
}

.inputBox input:focus ~ span,
.inputBox input:valid ~ span {
  font-size: 0.7em;
  transform: translateX(14px) translateY(-7.5px);
  padding: 0 5px;
  border-radius: 2px;
  background: #212121;
  letter-spacing: 0em;
  border: 1px solid #ee8456;
}
```

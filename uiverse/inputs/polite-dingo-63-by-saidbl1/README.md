# Polite Dingo 63

A input UI element from Uiverse.io by saidbl1.

Source: https://uiverse.io/saidbl1/polite-dingo-63

Author: saidbl1

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input, clean, nice

Colors: #212121, #e8e8e8

Fonts: See styles.css

Spacing and radius: 2px, 5px

## Source Code

### index.html

```html
<div class="inputBox">
  <input placeholder="Write here..." type="text" required="">
  <span>First name :</span>
</div>
```

### styles.css

```css
/* From Uiverse.io by saidbl1 - Tags: input, clean, nice */
.inputBox {
  position: relative;
}

.inputBox input {
  padding: 15px 20px;
  outline: none;
  background: transparent;
  border-radius: 5px;
  color: #212121;
  border: 1px solid#212121;
  font-size: 1em;
}

.inputBox span {
  position: absolute;
  left: 0;
  font-size: 0.7em;
  transform: translateX(14px) translateY(-7.5px);
  padding: 0 6px 1px 5px;
  border-radius: 2px;
  background: #e8e8e8;
  letter-spacing: 1px;
  border: 1px solid #212121;
  color: #212121;
}
```

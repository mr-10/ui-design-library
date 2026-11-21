# Helpless Termite 82

A radio button UI element from Uiverse.io by SlowLess0.

Source: https://uiverse.io/SlowLess0/helpless-termite-82

Author: SlowLess0

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: radio

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 100px, inherit

## Source Code

### index.html

```html
<div>

  <label class="rad-label">
    <input type="radio" class="rad-input" name="rad">
    <div class="rad-design"></div>
    <div class="rad-text">Air</div>
  </label>

  <label class="rad-label">
    <input type="radio" class="rad-input" name="rad">
    <div class="rad-design"></div>
    <div class="rad-text">Earth</div>
  </label>

  <label class="rad-label">
    <input type="radio" class="rad-input" name="rad">
    <div class="rad-design"></div>
    <div class="rad-text">Water</div>
  </label>

</div>
```

### styles.css

```css
/* From Uiverse.io by SlowLess0 - Tags: radio */
.rad-label {
  display: flex;
  padding: 14px 16px;
  margin: 10px 0;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.3s;
}

.rad-label:hover, .rad-label:focus-within {
  background: hsla(0, 0%, 40%, .14);
}

.rad-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;
}

.rad-design {
  width: 22px;
  height: 22px;
  border-radius: 100px;
  background: linear-gradient(to right bottom, hsl(172, 97%, 62%), hsl(251, 97%, 62%));
  position: relative;
}

.rad-design::before {
  content: '';
  display: inline-block;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background: hsl(0, 0%, 80%);
  transform: scale(1.1);
  transition: .3s;
}

.rad-input:checked+.rad-design::before {
  transform: scale(0);
}

.rad-text {
  color: hsl(0, 0%, 60%);
  margin-left: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 900;
  transition: .3s;
}

.rad-input:checked~.rad-text {
  color: hsl(0, 0%, 40%);
}
```

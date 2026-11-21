# Short Baboon 22

A input UI element from Uiverse.io by elijahgummer.

Source: https://uiverse.io/elijahgummer/short-baboon-22

Author: elijahgummer

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, white, black, input, dark, text animation, transition, click effect

Colors: #f0f424, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="input-field">
  <input required="" name="text" type="text" />
  <label>Enter your email</label>
</div>
```

### styles.css

```css
/* From Uiverse.io by elijahgummer  - Tags: animation, white, black, input, dark, text animation, transition, click effect */
.input-field {
  position: relative;
  border-bottom: 2px solid #f0f424;
  margin: 15px 0;
}

.input-field label {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #fff;
  font-size: 16px;
  pointer-events: none;
  transition: 0.15s ease;
}

.input-field input {
  width: 100%;
  height: 40px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: #fff;
}

.input-field input:focus ~ label,
.input-field input:valid ~ label {
  font-size: 0.8rem;
  top: 10px;
  transform: translateY(-120%);
}
```

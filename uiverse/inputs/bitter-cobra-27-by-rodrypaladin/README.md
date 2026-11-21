# Bitter Cobra 27

A input UI element from Uiverse.io by Rodrypaladin.

Source: https://uiverse.io/Rodrypaladin/bitter-cobra-27

Author: Rodrypaladin

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, form, input, animated, colorful

Colors: #212121, #e300ff, #ff00aa, #ff5956, #ffb900, #fffe00

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="box-input">
  <div class="border">
    <input type="text" name="text" class="input" placeholder="Name">
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Rodrypaladin - Tags: animation, form, input, animated, colorful */
.box-input {
  position: relative;
}

.border {
  background-image: linear-gradient(to right bottom, #e300ff, #ff00aa, #ff5956, #ffb900, #fffe00);
  box-shadow: -25px -10px 30px -5px rgba(225, 0, 255, 0.5),
    25px -10px 30px -5px rgba(255, 0, 212, 0.5),
    25px 10px 30px -5px rgba(255, 174, 0, 0.5),
    -25px 10px 30px -5px rgba(255, 230, 0, 0.5);
  padding: 4px;
}

.input {
  background-color: #212121;
  max-width: 250px;
  height: 40px;
  padding: 0 19px 0 10px;
  font-size: 1.1em;
  position: relative;
  border: none;
  color: white;
  outline: 0;
  overflow: hidden;
}

.box-input::after,
.box-input::before {
  content: "";
  width: 130px;
  height: 30px;
  position: absolute;
  z-index: -1;
}

.box-input::after {
  bottom: 0;
  right: 0;
}

.box-input::before {
  top: 0;
  left: 0;
}

.input::placeholder {
  transition: all 0.5s ease-in, transform 0.2s ease-in 0.6s;
}

.input:focus::placeholder {
  padding-left: 165px;
  transform: translateY(-50px);
}
```

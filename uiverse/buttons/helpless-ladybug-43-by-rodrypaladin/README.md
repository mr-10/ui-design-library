# Helpless Ladybug 43

A button UI element from Uiverse.io by Rodrypaladin.

Source: https://uiverse.io/Rodrypaladin/helpless-ladybug-43

Author: Rodrypaladin

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, pink, button, dark, shadow, border, color, box-shadow

Colors: #212121, #e300ff, #ff00aa, #ff5956, #ffb900, #fffe00

Fonts: See styles.css

Spacing and radius: 0, 1.3em, 1.5em

## Source Code

### index.html

```html
<button class="button">
  <div class="button__int">
    <span class="button__span">Button</span>
  </div>
</button>
```

### styles.css

```css
/* From Uiverse.io by Rodrypaladin - Tags: animation, pink, button, dark, shadow, border, color, box-shadow */
.button {
  background-image: linear-gradient(to right bottom, #e300ff, #ff00aa, #ff5956, #ffb900, #fffe00);
  border: none;
  font-size: 1.2em;
  border-radius: 0;
  padding: 4px;
  transition: border-top-left-radius 0.2s ease-in, 
  border-top-right-radius 0.2s ease-in 0.15s, 
  border-bottom-right-radius 0.2s ease-in 0.3s,
  border-bottom-left-radius 0.2s ease-in 0.45s, 
  padding 0.2s ease-in;
  position: relative;
}

.button__int {
  background-color: #212121;
  color: white;
  border-radius: 0;
  padding: 10px 40px;
  transition: all 0.2s ease-in,
  border-top-left-radius 0.2s ease-in, 
  border-top-right-radius 0.2s ease-in 0.15s, 
  border-bottom-right-radius 0.2s ease-in 0.3s,
  border-bottom-left-radius 0.2s ease-in 0.45s,
  padding 0.2s ease-in;
  font-weight: 600;
  z-index: -1;
  box-shadow: -25px -10px 30px -5px rgba(225, 0, 255, 0.7),
    25px -10px 30px -5px rgba(255, 0, 212, 0.7),
    25px 10px 30px -5px rgba(255, 174, 0, 0.7),
    -25px 10px 30px -5px rgba(255, 230, 0, 0.7);
}

.button:active .button__int {
  padding: 10px 30px;
}

.button:hover {
  border-radius: 1.5em;
}

.button:hover .button__int {
  border-radius: 1.3em;
}

.button:hover .button__int {
  box-shadow: -15px -10px 30px -5px rgba(225, 0, 255, 0.8),
    15px -10px 30px -5px rgba(255, 0, 212, 0.8),
    15px 10px 30px -5px rgba(255, 174, 0, 0.8),
    -15px 10px 30px -5px rgba(255, 230, 0.8);
}
```

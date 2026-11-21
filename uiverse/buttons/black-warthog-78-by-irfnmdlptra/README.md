# Black Warthog 78

A button UI element from Uiverse.io by irfnmdlptra.

Source: https://uiverse.io/irfnmdlptra/black-warthog-78

Author: irfnmdlptra

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #ff0080, #ff8c00, #fff

Fonts: See styles.css

Spacing and radius: 100%, 40px

## Source Code

### index.html

```html
<button class="button">
  <span>Hover</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by irfnmdlptra - Tags: button */
.button {
  position: relative;
  display: inline-block;
  padding: 12px 30px;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 40px;
  background: linear-gradient(45deg, #FF0080, #FF8C00);
  color: #fff;
  border: none;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
}

.button:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 100%;
  z-index: -1;
  transition: all 0.5s ease;
}

.button:hover:before {
  width: 500px;
  height: 500px;
}

.button span {
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.button:hover span {
  transform: scale(1.2);
}
```

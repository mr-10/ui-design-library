# Weak Fox 87

A button UI element from Uiverse.io by gharsh11032000.

Source: https://uiverse.io/gharsh11032000/weak-fox-87

Author: gharsh11032000

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover effect

Colors: #212121, #cfef00

Fonts: See styles.css

Spacing and radius: 10px, inherit

## Source Code

### index.html

```html
<button class="button">
  <span>Hover!</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by gharsh11032000 - Tags: button, hover effect */
.button {
  position: relative;
  font-size: 24px;
  font-weight: 600;
  padding: 15px 30px;
  color: #cfef00;
  background-color: transparent;
  border: 2px solid #cfef00;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
  overflow: hidden;
}

.button::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #cfef00;
  top: 0%;
  left: -100%;
  scale: 1;
  border-radius: inherit;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.button span {
  transition: all 0.7s;
  position: relative;
  overflow: hidden;
}

.button span::before {
  position: absolute;
  content: 'Hover!';
  top: 0;
  left: 0;
  color: #212121;
  width: 0;
  overflow: hidden;
}

.button:hover span::before {
  width: 100%;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  transition-delay: 0.4s;
}

.button:hover::before {
  scale: 1;
  top: 0%;
  left: 0%;
}

.button:hover {
  border-color: transparent;
}

.button:active {
  scale: 0.9;
}
```

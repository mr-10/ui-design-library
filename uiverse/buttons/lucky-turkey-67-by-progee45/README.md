# Lucky Turkey 67

A button UI element from Uiverse.io by Progee45.

Source: https://uiverse.io/Progee45/lucky-turkey-67

Author: Progee45

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: orange, button, animated, hover effect, fancy

Colors: #ff5722, #ff8c00, #fff

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<button class="custom-button">Click me</button>
```

### styles.css

```css
/* From Uiverse.io by Progee45 - Tags: orange, button, animated, hover effect, fancy */
.custom-button {
  position: relative;
  display: inline-block;
  padding: 12px 24px;
  font-size: 18px;
  color: #fff;
  background-color: #ff8c00;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
}

.custom-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 120%;
  height: 120%;
  background-color: rgba(255, 255, 255, 0.3);
  opacity: 0;
  transition: all 0.5s ease-in-out;
  transform: rotate(-45deg) translate(-50%, -50%);
  z-index: -1;
}

.custom-button:hover::before {
  opacity: 1;
  transform: rotate(-45deg) translate(-50%, -50%) scale(1.2);
}

.custom-button span {
  position: relative;
  z-index: 2;
}

.custom-button:hover {
  background-color: #ff5722;
}
```

# Tame Panther 46

A button UI element from Uiverse.io by Satwinder04.

Source: https://uiverse.io/Satwinder04/tame-panther-46

Author: Satwinder04

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #ff7f50, #ffa07a

Fonts: See styles.css

Spacing and radius: 50%, 8px, var(--border-radius)

## Source Code

### index.html

```html
<button class="complex-animated-button">Click me</button>
```

### styles.css

```css
/* From Uiverse.io by Satwinder04 - Tags: button */
.complex-animated-button {
  --primary-color: #ff7f50;
  --secondary-color: #ffa07a;
  --border-radius: 8px;
  --shadow-color: rgba(0, 0, 0, 0.2);
  --shadow-offset: 2px;
  --shadow-blur: 4px;
  --ripple-color: rgba(255, 255, 255, 0.5);
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  border: none;
  border-radius: var(--border-radius);
  color: white;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: var(--shadow-offset) var(--shadow-offset) var(--shadow-blur) var(--shadow-color);
  transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;
}

.complex-animated-button:hover {
  transform: scale(1);
  background: linear-gradient(to right, var(--secondary-color), var(--primary-color));
}

.complex-animated-button:focus {
  outline: none;
}

.complex-animated-button:active {
  animation: ripple 0.6s ease-out;
}

@keyframes ripple {
  to {
    transform: scale(1);
    opacity: 0;
  }
}

.complex-animated-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background-color: var(--ripple-color);
  border-radius: 50%;
  opacity: 0.5;
}

.complex-animated-button:active::after {
  width: 100%;
  height: 100%;
  transition: width 0.3s ease-out, height 0.3s ease-out;
}
```

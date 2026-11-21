# Odd Gecko 75

A button UI element from Uiverse.io by KhaledMatalkah.

Source: https://uiverse.io/KhaledMatalkah/odd-gecko-75

Author: KhaledMatalkah

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover, animated

Colors: #ff7730, #ffb900

Fonts: See styles.css

Spacing and radius: 25px, 30px

## Source Code

### index.html

```html
<button class="button">HOVER ME!</button>
```

### styles.css

```css
/* From Uiverse.io by KhaledMatalkah - Tags: button, hover, animated */
@keyframes glowing-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }

  70% {
    box-shadow: 0 0 0 30px rgba(255, 255, 255, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

.button {
  position: relative;
  display: inline-block;
  background: linear-gradient(to right, #FFB900, #FF7730);
  border: none;
  border-radius: 25px;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  text-transform: uppercase;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  animation: glowing-pulse 2s infinite;
}

.button::before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 30px;
  box-shadow: 0 0 20px #FF7730;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.button:hover::before {
  opacity: 1;
}
```

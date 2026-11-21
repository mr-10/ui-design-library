# Thin Wombat 41

A button UI element from Uiverse.io by Salahkarrar.

Source: https://uiverse.io/Salahkarrar/thin-wombat-41

Author: Salahkarrar

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover, light, click

Colors: #000, #ddd, #eaf2f8

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<button class="wave-button">Click me</button>
```

### styles.css

```css
/* From Uiverse.io by Salahkarrar  - Tags: button, hover, light, click */
.wave-button {
  background-color: #eaf2f8;
  border: 2px solid #ddd;
  color: #000;
  padding: 15px 30px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.wave-button:before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0px;
  background-color: rebeccapurple;
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.4);
  transition: all 0.5s ease;
}

.wave-button:hover {
  background-color: #ddd;
  border-color: rebeccapurple;
}

.wave-button:hover:before {
  height: 5%;
  width: 100%;
  animation: wave-animation 0.5s linear forwards;
}

@keyframes wave-animation {
  to {
    right: 100%;
  }
}

.wave-button span {
  position: relative;
  z-index: 1;
}
```

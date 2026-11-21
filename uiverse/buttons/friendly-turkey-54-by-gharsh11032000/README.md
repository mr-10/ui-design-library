# Friendly Turkey 54

A button UI element from Uiverse.io by gharsh11032000.

Source: https://uiverse.io/gharsh11032000/friendly-turkey-54

Author: gharsh11032000

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, button

Colors: #333, #7b4397, #dc2430, #e8e8e8

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<button class="button"></button>
```

### styles.css

```css
/* From Uiverse.io by gharsh11032000 - Tags: gradient, button */
.button {
  position: relative;
  background-color: transparent;
  color: #e8e8e8;
  font-size: 17px;
  font-weight: 600;
  border-radius: 10px;
  width: 150px;
  height: 60px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(51, 51, 51, 0.2);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
}

.button::before {
  content: "Hello!";
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(135deg,#7b4397,#dc2430 );
  transform: translate(0%,90%);
  z-index: 99;
  position: relative;
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.button::after {
  content: "Hover me";
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transform-origin: top;
  transform: translate(0%,-100%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.button:hover::before {
  transform: translate(0%,0%);
}

.button:hover::after {
  transform: translate(0%,-200%);
}

.button:focus {
  outline: none;
}

.button:active {
  scale: 0.95;
}
```

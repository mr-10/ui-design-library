# Splendid Badger 80

A button UI element from Uiverse.io by gharsh11032000.

Source: https://uiverse.io/gharsh11032000/splendid-badger-80

Author: gharsh11032000

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #333, #7b4397, #dc2430, #e8e8e8

Fonts: See styles.css

Spacing and radius: 50em

## Source Code

### index.html

```html
<button class="button"></button>
```

### styles.css

```css
/* From Uiverse.io by gharsh11032000 - Tags: button */
.button {
  position: relative;
  background-color: #333;
  color: #e8e8e8;
  font-size: 17px;
  font-weight: 600;
  width: 150px;
  height: 60px;
  border-radius: 50em;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
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
  border-radius: 50em;
  background: linear-gradient(135deg,#7b4397,#dc2430 );
  transform: translate(-100%, 0%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.button::after {
  content: "Hover me";
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: 50em;
  transform: translate(0%,-100%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.button:hover::before {
  transform: translate(0%, 0%);
}

.button:hover::after {
  transform: translate(100%,-100%);
}

.button:focus {
  outline: none;
}

.button:active {
  scale: 0.95;
}
```

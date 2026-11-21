# Old Emu 32

A button UI element from Uiverse.io by KhaledMatalkah.

Source: https://uiverse.io/KhaledMatalkah/old-emu-32

Author: KhaledMatalkah

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover

Colors: #fff

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<button class="button">
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by KhaledMatalkah - Tags: button, hover */
.button {
  background: transparent;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  transition: background-color 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
}

.button:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  pointer-events: none;
}

.button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.button:hover:before {
  transform: translateX(0);
}
```

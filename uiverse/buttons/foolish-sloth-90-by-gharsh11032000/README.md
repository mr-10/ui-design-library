# Foolish Sloth 90

A button UI element from Uiverse.io by gharsh11032000.

Source: https://uiverse.io/gharsh11032000/foolish-sloth-90

Author: gharsh11032000

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover effect, cool btn

Colors: #212121

Fonts: See styles.css

Spacing and radius: 34px, inherit

## Source Code

### index.html

```html
<button class="button">
  Subscribe
</button>
```

### styles.css

```css
/* From Uiverse.io by gharsh11032000 - Tags: button, hover effect, cool btn */
.button {
  cursor: pointer;
  position: relative;
  padding: 10px 24px;
  font-size: 18px;
  color: rgb(193, 163, 98);
  border: 2px solid rgb(193, 163, 98);
  border-radius: 34px;
  background-color: transparent;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  overflow: hidden;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  border-radius: inherit;
  scale: 0;
  z-index: -1;
  background-color: rgb(193, 163, 98);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.button:hover::before {
  scale: 3;
}

.button:hover {
  color: #212121;
  scale: 1.1;
  box-shadow: 0 0px 20px rgba(193, 163, 98,0.4);
}

.button:active {
  scale: 1;
}
```

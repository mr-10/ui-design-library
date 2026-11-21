# Bright Warthog 8

A button UI element from Uiverse.io by gharsh11032000.

Source: https://uiverse.io/gharsh11032000/bright-warthog-8

Author: gharsh11032000

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #8364e8, #e8e8e8

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<button class="button">
  Hover me
</button>
```

### styles.css

```css
/* From Uiverse.io by gharsh11032000 - Tags: button */
.button {
  position: relative;
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #e8e8e8;
  padding: 15px 30px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.4s ease;
}

.button:before {
  content: "";
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 20%;
  background-color: #e8e8e8;
  translate: -100% 0;
  rotate: 45deg;
  transition: all 0.4s ease;
}

.button:hover {
  color: #e8e8e8;
  background-color: #8364e8;
  box-shadow: 0 0 24px 8px rgba(131, 100, 232, 0.4);
}

.button:hover:before {
  translate: 100%;
}

.button:active {
  scale: 0.95;
  box-shadow: 0 0 16px 4px rgba(131, 100, 232, 0.4);
}
```

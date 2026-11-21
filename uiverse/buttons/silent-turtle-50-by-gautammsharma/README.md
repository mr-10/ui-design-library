# Silent Turtle 50

A button UI element from Uiverse.io by Gautammsharma.

Source: https://uiverse.io/Gautammsharma/silent-turtle-50

Author: Gautammsharma

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #000, #d63031, #e17055, #fdcb6e, #ff7675, #fff

Fonts: See styles.css

Spacing and radius: 2rem

## Source Code

### index.html

```html
<button class="comic-btn">Click me!</button>
```

### styles.css

```css
/* From Uiverse.io by Gautammsharma - Tags: button */
.comic-btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 2rem;
  border: none;
  background-color: #ff7675;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px #000;
  box-shadow: 6px 6px 0px #d63031;
  cursor: pointer;
  transition: all 0.3s ease;
}

.comic-btn:hover {
  background-color: #fdcb6e;
  box-shadow: 4px 4px 0px #e17055;
  transform: translate(2px, 2px);
}

.comic-btn:active {
  background-color: #e17055;
  box-shadow: 0px 0px 0px #d63031;
  transform: translate(6px, 6px);
}
```

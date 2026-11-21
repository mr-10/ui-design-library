# Wicked Cobra 3

A button UI element from Uiverse.io by Gautammsharma.

Source: https://uiverse.io/Gautammsharma/wicked-cobra-3

Author: Gautammsharma

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #000, #fcf414, #ff5252, #fff

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<button class="comic-button">Click me!</button>
```

### styles.css

```css
/* From Uiverse.io by Gautammsharma - Tags: button */
.comic-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #ff5252;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 5px 5px 0px #000;
  transition: all 0.3s ease;
}

.comic-button:hover {
  background-color: #fff;
  color: #ff5252;
  border: 2px solid #ff5252;
  box-shadow: 5px 5px 0px #ff5252;
}

.comic-button:active {
  background-color: #fcf414;
  box-shadow: none;
  transform: translateY(4px);
}
```

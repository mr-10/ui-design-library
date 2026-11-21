# Big Liger 46

A button UI element from Uiverse.io by RichestsoftSukhbir.

Source: https://uiverse.io/RichestsoftSukhbir/big-liger-46

Author: RichestsoftSukhbir

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, minimalist, white, black, button, hover, hover effect, hover button

Colors: #121212, #fff

Fonts: See styles.css

Spacing and radius: 0, 50%, 50px

## Source Code

### index.html

```html
<button class="button">Hover Over Me</button>
```

### styles.css

```css
/* From Uiverse.io by RichestsoftSukhbir  - Tags: simple, minimalist, white, black, button, hover, hover effect, hover button */
.button {
  padding: 12px 25px;
  background: #fff;
  border: 1px solid #121212;
  color: #121212;
  font-weight: 700;
  cursor: pointer;
  border-radius: 50px;
  position: relative;
  z-index: 2;
  overflow: hidden;
  transition: all 0.5s ease;
}
.button::after {
  content: "";
  width: 100%;
  height: 100%;
  background: #121212;
  position: absolute;
  bottom: -100%;
  left: 0;
  border-radius: 50%;
  z-index: -1;
  transition: all 0.5s ease;
}
.button:hover {
  color: #fff;
}
.button:hover::after {
  bottom: 0;
  border-radius: 0;
}
```

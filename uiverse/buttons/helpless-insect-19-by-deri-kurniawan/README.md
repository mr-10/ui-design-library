# Helpless Insect 19

A button UI element from Uiverse.io by Deri-Kurniawan.

Source: https://uiverse.io/Deri-Kurniawan/helpless-insect-19

Author: Deri-Kurniawan

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover, click, slide, hover effect, hover button, button hover effect

Colors: #000, #007bff, #00bfff, #fff

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<button class="button">
  hover me!
</button>
```

### styles.css

```css
/* From Uiverse.io by Deri-Kurniawan - Tags: button, hover, click, slide, hover effect, hover button, button hover effect  */
.button {
  position: relative;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 50px;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.button:hover {
  transform: scale(1.05);
  color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.button:active {
  transform: scale(0.9);
}

.button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #007bff, #00bfff);
  transition: all 0.4s ease-in-out;
  z-index: -1;
  border-radius: 50px;
}

.button:hover::before {
  left: 0;
}
```

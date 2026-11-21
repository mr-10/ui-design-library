# Smooth Elephant 43

A button UI element from Uiverse.io by PriyanshuGupta28.

Source: https://uiverse.io/PriyanshuGupta28/smooth-elephant-43

Author: PriyanshuGupta28

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, button

Colors: #00dbde, #4158d0, #c850c0, #fc00ff, #ffcc70

Fonts: See styles.css

Spacing and radius: 4px

## Source Code

### index.html

```html
<button class="my-button">Click Me</button>
```

### styles.css

```css
/* From Uiverse.io by PriyanshuGupta28 - Tags: gradient, button */
.my-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  transition: 0.2s ease-in-out;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

.my-button:hover {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.my-button:active {
  background-color: #00DBDE;
  background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);
}
```

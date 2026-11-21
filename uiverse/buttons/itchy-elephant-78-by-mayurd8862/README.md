# Itchy Elephant 78

A button UI element from Uiverse.io by mayurd8862.

Source: https://uiverse.io/mayurd8862/itchy-elephant-78

Author: mayurd8862

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, cool btn

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<button class="button">
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by mayurd8862 - Tags: button, cool btn */
.button {
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 18px;
  background: linear-gradient(to right, rgb(231, 71, 132), 
  rgb(0, 170, 255));
  /* Gradient background */
  border-radius: 10px;
  border: none;
  color: aliceblue;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  /* Text shadow effect */
  box-shadow: 0 0 10px rgba(55, 0, 255, 0.5);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
}

.button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px rgb(231, 71, 132);
  color: white;
}
```

# Short Horse 44

A button UI element from Uiverse.io by PriyanshuGupta28.

Source: https://uiverse.io/PriyanshuGupta28/short-horse-44

Author: PriyanshuGupta28

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, bootsrap button, button hover effect , 2d button

Colors: #2ecc71, #3498db, #9b59b6, #e74c3c, #fff

Fonts: sans-serif

Spacing and radius: 5px

## Source Code

### index.html

```html
<button class="swipe-button">Hover Me</button>
```

### styles.css

```css
/* From Uiverse.io by PriyanshuGupta28 - Tags: button, bootsrap button, button hover effect , 2d button */
.swipe-button {
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  background: linear-gradient(45deg, #3498db, #e74c3c, #9b59b6, #2ecc71);
  background-size: 200% 200%;
  background-position: 0 0;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-family: sans-serif;
  transition: background-position 0.5s ease-in-out, transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
}

.swipe-button:hover {
  background-position: 100% 100%;
  transform: scale(1.05);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}

.swipe-button:active {
  transform: translateY(2px);
  color: #fff;
 /* Change text color when active */
}
```

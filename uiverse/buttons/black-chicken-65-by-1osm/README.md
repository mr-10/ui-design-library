# Black Chicken 65

A button UI element from Uiverse.io by 1osm.

Source: https://uiverse.io/1osm/black-chicken-65

Author: 1osm

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #ff5858

Fonts: See styles.css

Spacing and radius: 20px

## Source Code

### index.html

```html
<button class="Btn">Click Me</button>
```

### styles.css

```css
/* From Uiverse.io by 1osm - Tags: button */
/* Button 1 */
.Btn {
  width: 150px;
  height: 50px;
  background-color: transparent;
  color: white;
  font-weight: bold;
  border-width: 2px;
  border-color: #FF5858;
  border-radius: 20px;
  transition: all 0.3s;
}

.Btn:hover {
  transform: translateY(-10px);
  background-color: #FF5858;
}

.Btn::after {
  transform: translateY(0);
}
```

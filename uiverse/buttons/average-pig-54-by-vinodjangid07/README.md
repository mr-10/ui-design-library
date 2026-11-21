# Average Pig 54

A button UI element from Uiverse.io by vinodjangid07.

Source: https://uiverse.io/vinodjangid07/average-pig-54

Author: vinodjangid07

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, black, button, code, hover effect

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<button class="button">
  <span class="bracket left">❴</span>
  <span class="text">Code</span>
  <span class="bracket right">❵</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by vinodjangid07  - Tags: animation, black, button, code, hover effect */
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 45px;
  width: 45px;
  border: none;
  border-radius: 10px;
  background-color: black;
  cursor: pointer;
  transition: all 0.3s;
  overflow: hidden;
}
.bracket {
  font-size: 18px;
  transition: all 0.3s;
  color: rgb(182, 104, 255);
}
.text {
  font-size: 15px;
  width: 0;
  transform: scale(0);
  transition: all 0.3s;
  color: white;
}
.button:hover {
  width: 100px;
}
.button:hover .text {
  transform: scale(1);
  width: 40px;
}
```

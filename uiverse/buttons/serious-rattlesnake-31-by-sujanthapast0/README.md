# Serious Rattlesnake 31

A button UI element from Uiverse.io by Sujanthapast0.

Source: https://uiverse.io/Sujanthapast0/serious-rattlesnake-31

Author: Sujanthapast0

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, 3d button, 2d button

Colors: #fdceb6

Fonts: See styles.css

Spacing and radius: 30px

## Source Code

### index.html

```html
<button>
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by Sujanthapast0 - Tags: button, 3d button, 2d button */
button {
  border: 1px solid black;
  padding: 12px 30px 12px 30px;
  border-radius: 30px;
  background-color: #fdceb6;
  font-weight: bolder;
  font-size: 15px;
  box-shadow: 0px 0px 1px;
  transform: all 2s esase;
  transition-duration: .3s;
}

button:hover {
  transform: translateY(-10px);
  box-shadow: 0px 7px 1px rgb(0, 0, 0);
  border: 1px solid black;
}

button:active {
  transform: translateY(10px);
  box-shadow: 0px 0px 1px;
}
```

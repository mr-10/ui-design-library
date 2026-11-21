# Calm Octopus 51

A card UI element from Uiverse.io by Brola2008.

Source: https://uiverse.io/Brola2008/calm-octopus-51

Author: Brola2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, card, box-shadow

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 20px, 20px 80px

## Source Code

### index.html

```html
<div class="one-div"></div>
```

### styles.css

```css
/* From Uiverse.io by Brola2008 - Tags: gradient, card, box-shadow */
.one-div {
  width: 190px;
  height: 250px;
  background: linear-gradient(-45deg, rgb(9, 16, 109) ,  rgba(0,255,239,1));
  border-radius: 20px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.5);
  transition: 0.5s ease;
}

.one-div::after {
  content: "HOVER ME";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-weight: bold;
  text-shadow: 1px 1px 4px rgb(0,0,0);
  transition: .3s;
}

.one-div:hover {
  scale: 1.1;
  border-radius: 20px 80px;
  box-shadow: 11px 11px 25px rgba(0, 0, 0, 0.5);
}

.one-div:hover::after {
  content: "THANKS";
  color: aqua;
}
```

# Rotten Mouse 64

A card UI element from Uiverse.io by vk-uiux.

Source: https://uiverse.io/vk-uiux/rotten-mouse-64

Author: vk-uiux

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card, unique, challenge, css, design, one-div, coffee mug

Colors: #3c2415, #3f2616, #442918, #f79c25, #fe9407, #ffae43

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="one-div"></div>
```

### styles.css

```css
/* From Uiverse.io by vk-uiux - Tags: card, unique, challenge, css, design, one-div, coffee mug */
.one-div {
  top: -30px;
  left: 0;
  position: relative;
  width: 100px;
  height: 100px;
  background-color: #3f2616;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 10px #442918, 0 0 0 25px #3c2415, 0 0 0 44px #fe9407, 0 0 0 65px #ffae43, 0 115px 0 -20px #442918, 95px 70px 0 -25px #442918, 60px 115px 0 -10px #442918, 10px 170px 0 -35px #442918, 30px 200px 0 -42px #442918;
}

.one-div::before {
  content: "";
  position: absolute;
  width: 45px;
  height: 60px;
  background-color: #f79c25;
  top: -80px;
  right: -70px;
  transform: rotate(45deg);
}
```

# Black Dragon 31

A card UI element from Uiverse.io by Spacious74.

Source: https://uiverse.io/Spacious74/black-dragon-31

Author: Spacious74

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: flashy, card, neon

Colors: #1f1f1f, #353535, #bbbbbb, #bebebe, #fff

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="container">
  <div class="card1"></div>
  <div class="card2"></div>
  <div class="card3">
    * Card stacks are awesome and inspired by real card stack at your table.
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Spacious74  - Tags: flashy, card, neon */
.container {
  position: relative;
  margin-top: -100px;
  width: 360px;
}

.container > * {
  width: 340px;
  height: 120px;
  border: solid 1px #bebebe;
  background-color: #1f1f1f;
  position: absolute;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
  box-shadow: 0px 8px 20px -10px #bbbbbb;
  text-shadow: 0px 0px 5px #fff;
  letter-spacing: 1px;
  background-image: radial-gradient(circle 160px at 50% 120%, #353535, #1f1f1f);
}

.card1 {
  width: 300px;
  margin: -20px 0px 0px 20px;
}
.card2 {
  width: 320px;
  margin: -10px 0px 0px 10px;
}
```

# Wicked Rat 71

A card UI element from Uiverse.io by Spacious74.

Source: https://uiverse.io/Spacious74/wicked-rat-71

Author: Spacious74

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: 3d, social, card, social media, 3d card, airpods, case

Colors: #00000036, #0000004b, #00000060, #000000e0, #3eff4b, #66f66f, #b4b2b2, #d6d6d6, #e8e9eb, #fff

Fonts: See styles.css

Spacing and radius: 100px, 200px, 70px

## Source Code

### index.html

```html
<div class="card">
  <div class="lc cavity"></div>
  <div class="lc line"></div>
  <div class="led"></div>
  <div class="text">UIVERSE</div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Spacious74  - Tags: 3d, social, card, social media, 3d card, airpods, case */
.card {
  width: 270px;
  height: 220px;
  background-color: #e8e9eb;
  border-radius: 70px;
  box-shadow: inset 0px 35px 25px #ffffffe0, inset 10px 0px 25px #0000004b,
    inset 40px 0px 20px #ffffff, inset -10px 0px 25px #0000004b,
    inset -40px 0px 20px #fff, inset 0px 10px 10px #000000e0,
    inset 0px -15px 25px #00000036, 10px 25px 40px -10px #00000060;
  position: relative;
}

.card .line {
  width: 100%;
  height: 2px;
  background-color: #b4b2b2;
  margin-top: 30%;
  position: relative;
}
.line::after,
.line::before {
  content: "";
  position: absolute;
  width: 5%;
  height: 2px;
  background-color: #fff;
}
.line::before {
  right: 0;
}
.card .cavity {
  width: 150px;
  height: 20px;
  background: linear-gradient(180deg, #d6d6d6, #fff);
  border-radius: 200px;
  margin: auto;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 30%);
}
.card .led {
  width: 7px;
  aspect-ratio: 1;
  background-color: #66f66f;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 30%);
  border-radius: 100px;
  box-shadow: 0 0 6px #3eff4b;
}
.card .text {
  text-align: center;
  margin-top: 70px;
  color: #00000036;
  font-weight: bolder;
}
```

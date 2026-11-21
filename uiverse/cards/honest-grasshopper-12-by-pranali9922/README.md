# Honest Grasshopper 12

A card UI element from Uiverse.io by Pranali9922.

Source: https://uiverse.io/Pranali9922/honest-grasshopper-12

Author: Pranali9922

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card, cool card, card animation, card hover

Colors: #3023ae, #ff0099

Fonts: See styles.css

Spacing and radius: 35% 30% 75% 30% / 49% 30% 70% 51%, 8px

## Source Code

### index.html

```html
<div class="card">
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="card-inner"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Pranali9922  - Tags: card, cool card, card animation, card hover */
.card {
  width: 200px;
  height: 200px;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
}

.card-inner {
  width: inherit;
  height: inherit;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 8px;
}

.card:hover {
  transform: scale(1.04) rotate(1deg);
}

.circle {
  width: 100px;
  height: 100px;
  background: repeating-linear-gradient(48deg, #3023ae 0%, #ff0099 100%);
  border-radius: 35% 30% 75% 30% / 49% 30% 70% 51%;
  position: absolute;
  animation: move-up6 2s ease-in infinite alternate-reverse;
}

.circle:nth-child(1) {
  top: -25px;
  left: -25px;
}

.circle:nth-child(2) {
  bottom: -25px;
  right: -25px;
  animation-name: move-down1;
}

@keyframes move-up6 {
  to {
    transform: translateY(-10px);
  }
}

@keyframes move-down1 {
  to {
    transform: translateY(10px);
  }
}
```

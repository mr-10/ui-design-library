# Soft Shrimp 94

A card UI element from Uiverse.io by vamsidevendrakumar.

Source: https://uiverse.io/vamsidevendrakumar/soft-shrimp-94

Author: vamsidevendrakumar

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, card, hover, animated, hover effect, card flip, hoverme, card template, hover slide

Colors: #6a2c70, #f08a5d, #fff

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="card">
  <div class="card-inner">
    <div class="card-front">
      <p>Front Side</p>
    </div>
    <div class="card-back">
      <p>Back Side</p>
    </div>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by vamsidevendrakumar - Tags: animation, card, hover, animated, hover effect, card flip, hoverme, card template, hover slide */
.card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color: #6A2C70;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #6A2C70;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(0deg);
}

.card-back {
  background-color: #F08A5D;
  color: #fff;
  display: flex;
  align-items: center;
  border: 10px solid #F08A5D;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(180deg);
}
```

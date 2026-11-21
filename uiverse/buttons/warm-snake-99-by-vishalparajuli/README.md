# Warm Snake 99

A button UI element from Uiverse.io by vishalparajuli.

Source: https://uiverse.io/vishalparajuli/warm-snake-99

Author: vishalparajuli

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, 3d button, 3d card

Colors: #3498db, #e74c3c, #fff

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<div class="button">
    <div class="button__front">rocket</div>
    <div class="button__back">roll</div>
  </div>
```

### styles.css

```css
/* From Uiverse.io by vishalparajuli - Tags: button, 3d button, 3d card */
.button {
  width: 100px;
  height: 50px;
  position: relative;
  perspective: 800px;
}

.button__front,
  .button__back {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  background-color: #3498db;
  border-radius: 5px;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.5s ease;
}

.button__back {
  background-color: #e74c3c;
  transform: rotateY(180deg);
}

.button:hover .button__front {
  transform: rotateY(-180deg);
}

.button:hover .button__back {
  transform: rotateY(0);
}
```

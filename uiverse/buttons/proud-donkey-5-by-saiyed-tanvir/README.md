# Proud Donkey 5

A button UI element from Uiverse.io by Saiyed-Tanvir.

Source: https://uiverse.io/Saiyed-Tanvir/proud-donkey-5

Author: Saiyed-Tanvir

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, box

Colors: #8c00bd, #bd00ff, #bd5000, #ff6b00

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container">
  <div class="btn">
    <div class="sides top">
      BUTTON
    </div>
    <div class="sides front"></div>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Saiyed-Tanvir - Tags: button, box */
.btn {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.sides {
  transition: all 0.07s;
  cursor: pointer;
}

.top {
  background: linear-gradient(259.35deg, #FF6B00 0%, #BD00FF 100%);
  height: 2cm;
  width: 4cm;
  transform: rotateX(60deg);
  font-weight: bolder;
  padding: 0.5cm 1cm;
  color: white;
}

.front {
  background: linear-gradient(280.65deg, #BD5000 0%, #8C00BD 100%);
  height: 2cm;
  width: 4cm;
  transform: translateY(-38px) rotateX(-60deg);
}

.btn:active .top {
  transform: rotateX(60deg) translateZ(0px);
}

.btn:active .front {
  height: 0.1cm;
  transform: rotateX(-60deg) translateZ(-26px);
}
```

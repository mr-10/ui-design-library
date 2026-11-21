# Dangerous Donkey 85

A card UI element from Uiverse.io by yariklnv.

Source: https://uiverse.io/yariklnv/dangerous-donkey-85

Author: yariklnv

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card, box, div

Colors: #111

Fonts: See styles.css

Spacing and radius: 100px, 19px, 20px

## Source Code

### index.html

```html
<div class="border"><div class="content"></div></div>
```

### styles.css

```css
/* From Uiverse.io by yariklnv - Tags: card, box, div */
@keyframes rotate {
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(360deg);
  }
}

.border {
  background-image: linear-gradient(to left, red, blue);
  width: 100px;
  height: 100px;
  border-radius: 20px;
}

.border::before {
  background-image: linear-gradient(to left, red, blue);
  content: "";
  position: absolute;
  z-index: -1;
  height: 100px;
  width: 100px;
  scale: 1.1;
  filter: blur(25px);
  animation: rotate 4s linear infinite;
  border-radius: 100px;
}

.content {
  background-color: #111;
  width: 100px;
  height: 100px;
  border-radius: 19px;
  scale: 0.9;
}
```

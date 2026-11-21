# Dry Insect 94

A loader UI element from Uiverse.io by mobinkakei.

Source: https://uiverse.io/mobinkakei/dry-insect-94

Author: mobinkakei

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loading, loader, space

Colors: #a19dad, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<span class="loader"></span>
```

### styles.css

```css
/* From Uiverse.io by mobinkakei  - Tags: loading, loader, space */
.loader {
  position: relative;
  width: 60px;
  height: 60px;
  background: #a19dad;
  transform: rotateX(65deg) rotate(45deg);
  // remove bellows command for perspective change
  //transform: perspective(200px) rotateX(65deg) rotate(45deg);
  color: #fff;
  animation: layers1 1s linear infinite alternate;
}
.loader:after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.7);
  animation: layerTr 1s linear infinite alternate;
}

@keyframes layers1 {
  0% {
    box-shadow: 0px 0px 0 0px;
  }
  90%,
  100% {
    box-shadow: 20px 20px 0 -4px;
  }
}
@keyframes layerTr {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(-25px, -25px) scale(1);
  }
}
```

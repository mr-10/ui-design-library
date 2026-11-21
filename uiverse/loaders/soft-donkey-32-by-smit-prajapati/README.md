# Soft Donkey 32

A loader UI element from Uiverse.io by Smit-Prajapati.

Source: https://uiverse.io/Smit-Prajapati/soft-donkey-32

Author: Smit-Prajapati

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: blue, loader, light, neon

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader">
  <div class="light"></div>
  <div class="black_overlay"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Smit-Prajapati  - Tags: blue, loader, light, neon */
.loader {
  height: 2px;
  width: 300px;
  background: rgb(44, 44, 44);
  position: relative;
  overflow: hidden;
}
.loader .black_overlay {
  background: linear-gradient(
    87deg,
    rgb(0, 0, 0) 0%,
    rgba(0, 0, 0, 0.14) 30%,
    rgba(0, 0, 0, 0.14) 70%,
    rgb(0, 0, 0) 100%
  );
  position: absolute;
  inset: 0px;
}
.loader .light {
  width: 70px;
  height: 100%;
  position: absolute;
  left: -20%;
  top: 0px;
  background: linear-gradient(
    87deg,
    rgba(0, 0, 0, 0) 0%,
    rgb(0, 204, 255) 40%,
    rgb(0, 204, 255) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  animation: light 2s infinite ease-in-out;
}

@keyframes light {
  from {
    left: -30%;
  }
  to {
    left: 100%;
  }
}
```

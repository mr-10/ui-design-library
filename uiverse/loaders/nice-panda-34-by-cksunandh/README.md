# Nice Panda 34

A loader UI element from Uiverse.io by Cksunandh.

Source: https://uiverse.io/Cksunandh/nice-panda-34

Author: Cksunandh

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #6554b388, #8086e0, #949494

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="cssloader">
  <div class="triangle1"></div>
  <div class="triangle2"></div>
  <p class="text">Please Wait</p>
</div>
```

### styles.css

```css
/* From Uiverse.io by Cksunandh  - Tags: loader */
.triangle1 {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 50px 0 0;
  border-color: #8086e0 transparent transparent transparent;
  margin: 0 auto;
  animation: shk1 1s ease-in-out infinite normal;
}

.triangle2 {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 50px 50px;
  border-color: transparent transparent #6554b388 transparent;
  margin: -50px auto 0;
  animation: shk2 1s ease-in-out infinite alternate;
}
@keyframes shk1 {
  0% {
    transform: rotate(-360deg);
  }

  100% {
  }
}

@keyframes shk2 {
  0% {
    transform: rotate(360deg);
  }
  100% {
  }
}

.text {
  color: #949494;
  margin: 30px auto;
  text-align: center;
  font-weight: 500;
  letter-spacing: 4px;
}
```

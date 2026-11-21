# Green Rat 73

A loader UI element from Uiverse.io by PriyanshuGupta28.

Source: https://uiverse.io/PriyanshuGupta28/green-rat-73

Author: PriyanshuGupta28

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, car loader, 3d loader

Colors: #0093e9, #00dbde, #3eecac, #4158d0, #80d0c7, #c850c0, #ee74e1, #fc00ff, #ffcc70

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader-container">
    <div class="loader">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
```

### styles.css

```css
/* From Uiverse.io by PriyanshuGupta28 - Tags: loader, car loader, 3d loader */
.loader-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%
}

.loader {
  width: 80px;
  height: 80px;
  position: relative;
}

.loader .circle {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: pulse 1.2s infinite ease-in-out;
}

.loader .circle:nth-child(1) {
  top: 0;
  left: 30px;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

.loader .circle:nth-child(2) {
  top: 30px;
  left: 60px;
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  animation-delay: 0.4s;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

.loader .circle:nth-child(3) {
  top: 60px;
  left: 30px;
  background-color: #00DBDE;
  background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);
  animation-delay: 0.8s;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

.loader .circle:nth-child(4) {
  top: 30px;
  left: 0;
  background-color: #3EECAC;
  background-image: linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%);
  animation-delay: 1.2s;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.2);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
  }
}
```

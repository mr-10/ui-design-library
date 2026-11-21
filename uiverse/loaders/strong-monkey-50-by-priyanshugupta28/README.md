# Strong Monkey 50

A loader UI element from Uiverse.io by PriyanshuGupta28.

Source: https://uiverse.io/PriyanshuGupta28/strong-monkey-50

Author: PriyanshuGupta28

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, circle loader, cool loader, 3d loader

Colors: #0093e9, #00dbde, #4158d0, #80d0c7, #8bc6ec, #8ec5fc, #9599e2, #c850c0, #e0c3fc, #fc00ff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
```

### styles.css

```css
/* From Uiverse.io by PriyanshuGupta28 - Tags: loader, circle loader, cool loader, 3d loader */
.loader {
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle {
  width: 20px;
  height: 20px;
  background-color: #8BC6EC;
  background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
  border-radius: 50%;
  margin-right: 1rem;
  animation: pulse 1.2s ease-in-out infinite;
}

.circle:nth-child(2) {
  animation-delay: 0.2s;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}

.circle:nth-child(3) {
  animation-delay: 0.4s;
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
}

.circle:nth-child(4) {
  animation-delay: 0.6s;
  background-color: #8EC5FC;
  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
}

.circle:nth-child(5) {
  animation-delay: 0.8s;
  background-color: #00DBDE;
  background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.7;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(0.8);
    opacity: 0.7;
  }
}
```

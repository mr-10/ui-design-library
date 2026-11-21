# Wicked Fish 61

A loader UI element from Uiverse.io by shadowmurphy.

Source: https://uiverse.io/shadowmurphy/wicked-fish-61

Author: shadowmurphy

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, loader, animated

Colors: #00ddeb, #5b42f3, #af40ff

Fonts: See styles.css

Spacing and radius: 10px, 25px

## Source Code

### index.html

```html
<div class="loader">
  <div class="shape"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by shadowmurphy - Tags: gradient, loader, animated */
.loader {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  height: 15px;
  background-color: rgb(2, 2, 17);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-top: 15px;
}

.shape {
  width: 50px;
  height: 15px;
  background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
  border-radius: 25px;
  position: absolute;
  animation: slide 1.9s linear infinite;
  background-size: 200%;
}

@keyframes slide {
  0% {
    left: 0;
  }

  50% {
    left: calc(100% - 50px);
  }

  100% {
    left: 0;
  }
}

@keyframes gradientChange {
  0%, 100% {
    background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
  }

  50% {
    background-image: linear-gradient(144deg, #00DDEB, #5B42F3 50%, #AF40FF);
  }
}
```

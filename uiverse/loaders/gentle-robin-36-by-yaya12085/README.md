# Gentle Robin 36

A loader UI element from Uiverse.io by Yaya12085.

Source: https://uiverse.io/Yaya12085/gentle-robin-36

Author: Yaya12085

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, moon

Colors: #212121, #e8e8e8

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="container">
<div class="loader">
<div class="shadow"></div>
</div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Yaya12085 - Tags: loader, moon */
.container {
  background-color: #212121;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #e8e8e8;
  border: 4px solid #e8e8e8;
  box-shadow: 0 0 3px #e8e8e8;
  filter: blur(.4px);
}

.shadow {
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background-color: #212121;
  top: -5px;
  left: 0;
  animation: animate 3s infinite 1.5s;
}

@keyframes animate {
  0% {
    transform: translateX(150px);
    background-color: #212121;
  }

  50% {
    transform: translateX(-10px);
    background-color: #212121;
  }

  100% {
    transform: translateX(-170px);
    background-color: #212121;
  }
}
```

# Rude Shrimp 72

A loader UI element from Uiverse.io by jeremyssocial.

Source: https://uiverse.io/jeremyssocial/rude-shrimp-72

Author: jeremyssocial

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, white, loader, effect loader

Colors: #666, #fff

Fonts: See styles.css

Spacing and radius: 10px 10px 35px 35px, 25px, 5px 5px 30px 30px

## Source Code

### index.html

```html
<div class="milk-loader">
  <div class="glass">
    <div class="milk"></div>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by jeremyssocial  - Tags: animation, white, loader, effect loader */
.milk-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.glass {
  position: relative;
  width: 100px;
  height: 150px;
  background-color: transparent;
  border: 3px solid #666;
  border-radius: 10px 10px 35px 35px;
  overflow: hidden;
}

.milk {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0;
  background-color: #fff;
  border-radius: 5px 5px 30px 30px;
  animation: fillMilk 2s ease-in-out infinite;
}

/* Keyframes to animate the milk in a non-uniform way, simulating a filling glass */
@keyframes fillMilk {
  0%,
  100% {
    height: 10%;
    border-radius: 5px 5px 30px 30px;
  }
  50% {
    height: 80%;
    border-radius: 25px;
  }
}
```

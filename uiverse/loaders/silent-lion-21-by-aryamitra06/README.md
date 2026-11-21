# Silent Lion 21

A loader UI element from Uiverse.io by aryamitra06.

Source: https://uiverse.io/aryamitra06/silent-lion-21

Author: aryamitra06

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #ffff

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="loader">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
</div>
```

### styles.css

```css
/* From Uiverse.io by aryamitra06 - Tags: loader */
.loader {
  display: flex;
  align-items: center;
}

.bar {
  display: inline-block;
  width: 3px;
  height: 20px;
  background-color: rgba(255, 255, 255, .5);
  border-radius: 10px;
  animation: scale-up4 1s linear infinite;
}

.bar:nth-child(2) {
  height: 35px;
  margin: 0 5px;
  animation-delay: .25s;
}

.bar:nth-child(3) {
  animation-delay: .5s;
}

@keyframes scale-up4 {
  20% {
    background-color: #ffff;
    transform: scaleY(1.5);
  }

  40% {
    transform: scaleY(1);
  }
}
```

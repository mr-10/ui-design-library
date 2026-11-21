# Strange Hound 0

A button UI element from Uiverse.io by BurgiSimon.

Source: https://uiverse.io/BurgiSimon/strange-hound-0

Author: BurgiSimon

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: flashy, 3d, white, gradient, button, hover, smooth, neon

Colors: #03a9f4, #c5c5c5, #cfcece, #e2e2e2, #e8e8e8, #f441a5, #fcfcfc, #ffeb3b, #ffffff

Fonts: See styles.css

Spacing and radius: 20px, 30px

## Source Code

### index.html

```html
<div class="div">
  <button class="button">
    <span class="span"> HOVER ME </span>
  </button>
</div>
```

### styles.css

```css
/* From Uiverse.io by BurgiSimon  - Tags: flashy, 3d, white, gradient, button, hover, smooth, neon */
.button {
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #e8e8e8;
  border: 1.6px solid #e2e2e2;
  box-shadow: 6px 6px 10px #c5c5c5, -6px -6px 12px #ffffff;
  transform: skewX(-5deg);
  position: relative;
  overflow: hidden;
}

.button::before {
  content: "";
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  z-index: -1;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 30px;
  opacity: 0;
  transition: opacity 0.5s, filter 0.5s;
}

.button:hover::before {
  filter: blur(10px);
  opacity: 1;
  animation: animateBorder 8s linear infinite;
  border: 4px solid rgb(255, 255, 255);
}

@keyframes animateBorder {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
}

.span {
  color: black;
  letter-spacing: 3px;
  font-size: 18px;
}

.button:active {
  box-shadow: 5px 5px 12px #cfcece, -4px -4px 12px #fcfcfc;
}
```

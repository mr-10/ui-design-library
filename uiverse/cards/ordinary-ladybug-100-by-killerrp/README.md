# Ordinary Ladybug 100

A card UI element from Uiverse.io by KillerRP.

Source: https://uiverse.io/KillerRP/ordinary-ladybug-100

Author: KillerRP

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: 3d, clock, animated

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 100%, 20px

## Source Code

### index.html

```html
<div class="one-div"></div>
```

### styles.css

```css
/* From Uiverse.io by KillerRP - Tags: 3d, clock, animated */
.one-div {
  --box-width: 100px;
  width: var(--box-width);
  height: var(--box-width);
  border: 2px solid red;
  background-color: white;
  border-radius: 100%;
  position: relative;
  transform: scale(1);
  transition: 2s ease;
  cursor: pointer;
  box-shadow: 2px 2px 10px white;
}

.one-div:hover {
  transform: scale(1.5);
  box-shadow: 2px 2px 50px yellow;
}

.one-div::before, .one-div::after {
  content: "";
  width: 2px;
  display: block;
  height: 100%;
  background: linear-gradient(black 50%, transparent 50%);
  border-radius: 20px;
  position: absolute;
  left: 50%;
  transform-origin: translate(-100%, -100%);
}

.one-div::after {
  height: 100%;
  animation: secondsMotion 120s  infinite linear;
}

.one-div::before {
  animation: secondsMotion 6s infinite linear;
}

@keyframes secondsMotion {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
```

# Friendly Skunk 89

A card UI element from Uiverse.io by SouravBandyopadhyay.

Source: https://uiverse.io/SouravBandyopadhyay/friendly-skunk-89

Author: SouravBandyopadhyay

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, card, hover, bubble, transition

Colors: #ff5f6d, #ffc371, #ffd800, #ffffff

Fonts: See styles.css

Spacing and radius: 1.5rem, 50%

## Source Code

### index.html

```html
<div class="one-div"></div>
```

### styles.css

```css
/* From Uiverse.io by SouravBandyopadhyay - Tags: animation, card, hover, bubble, transition */
.one-div {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #ff5f6d, #ffc371, #ffd800);
  position: relative;
  overflow: hidden;
  transform: rotate(45deg);
  animation: rotate 5s infinite linear;
  border-radius: 1.5rem;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.one-div::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, #ffffff, transparent);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.8;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.8;
  }

  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.4;
  }

  100% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.8;
  }
}

.one-div:hover {
  animation-play-state: paused;
}
```

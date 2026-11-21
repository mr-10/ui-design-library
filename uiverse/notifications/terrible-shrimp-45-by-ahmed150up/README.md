# Terrible Shrimp 45

A notification UI element from Uiverse.io by ahmed150up.

Source: https://uiverse.io/ahmed150up/terrible-shrimp-45

Author: ahmed150up

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: notification

Colors: #000, #ffd700, #fff

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="notification">
  <svg viewBox="0 0 200 200">
    <path id="star" d="M100,25 L129,79 L186,79 L139,119 L158,173 L100,137 L42,173 L61,119 L14,79 L71,79 z"></path>
    <text x="50%" y="50%" text-anchor="middle" alignment-baseline="central">Level Up!</text>
  </svg>
</div>
```

### styles.css

```css
/* From Uiverse.io by ahmed150up - Tags: notification */
.notification {
  background-color: #FFF;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.notification svg {
  width: 140px;
  height: 140px;
  fill: #FFD700;
  animation: rotate 3s ease-in-out infinite;
}

.notification #star {
  animation: fill 3s ease-in-out infinite;
  transform-origin: center;
}

.notification text {
  font-size: 30px;
  font-weight: bold;
  fill: #000;
}

@keyframes fill {
  0% {
    fill: transparent;
    transform: scale(1);
  }

  50% {
    fill: #FFD700;
    transform: scale(1.2);
  }

  100% {
    fill: transparent;
    transform: scale(1);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
```

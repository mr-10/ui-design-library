# Green Goat 59

A loader UI element from Uiverse.io by Praashoo7.

Source: https://uiverse.io/Praashoo7/green-goat-59

Author: Praashoo7

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, loader, dots

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="load">
    <div class="progress"></div>
    <div class="progress"></div>
    <div class="progress"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Praashoo7 - Tags: animation, loader, dots */
.load {
  display: flex;
  border-radius: 50%;
  flex-direction: row;
}

.progress {
  width: 2em;
  height: 2em;
  margin: 0.4em;
  scale: 0;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  animation: loading_492 2s ease infinite;
  animation-delay: 1s;
}

@keyframes loading_492 {
  50% {
    scale: 1;
  }
}

.progress:nth-child(2) {
  animation-delay: 1.3s;
}

.progress:nth-child(3) {
  animation-delay: 1.7s;
}
```

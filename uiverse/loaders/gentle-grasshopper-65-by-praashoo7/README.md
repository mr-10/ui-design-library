# Gentle Grasshopper 65

A loader UI element from Uiverse.io by Praashoo7.

Source: https://uiverse.io/Praashoo7/gentle-grasshopper-65

Author: Praashoo7

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, smooth

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<div class="loader">
  <p class="heading">Loading</p>
  <div class="loading">
    <div class="load"></div>
    <div class="load"></div>
    <div class="load"></div>
    <div class="load"></div>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Praashoo7 - Tags: loader, smooth */
.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.heading {
  color: black;
  letter-spacing: 0.2em;
  margin-bottom: 1em;
}

.loading {
  display: flex;
  width: 5em;
  align-items: center;
  justify-content: center;
}

.load {
  width: 23px;
  height: 3px;
  background-color: limegreen;
  animation: 1s move_5011 infinite;
  border-radius: 5px;
  margin: 0.1em;
}

.load:nth-child(1) {
  animation-delay: 0.2s;
}

.load:nth-child(2) {
  animation-delay: 0.4s;
}

.load:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes move_5011 {
  0% {
    width: 0.2em;
  }

  25% {
    width: 0.7em;
  }

  50% {
    width: 1.5em;
  }

  100% {
    width: 0.2em;
  }
}
```

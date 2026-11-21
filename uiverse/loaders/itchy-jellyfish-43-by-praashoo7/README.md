# Itchy Jellyfish 43

A loader UI element from Uiverse.io by Praashoo7.

Source: https://uiverse.io/Praashoo7/itchy-jellyfish-43

Author: Praashoo7

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: arrow, transition, cool checkbox, loader, arrow

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<div class="main">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Praashoo7  - Tags: arrow, transition, cool checkbox, loader, arrow */
.main {
  display: flex;
  flex-wrap: wrap;
  width: 15em;
  align-items: center;
  justify-content: center;
}

.card {
  width: 40px;
  height: 40px;
  border-top-left-radius: 10px;
  background: lightgrey;
  transition: 0.4s ease-in-out, 0.2s background-color;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  margin: 0.2em;
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: 2s loading90 infinite;
}

.card:nth-child(2) {
  animation-delay: 1s;
}

.card:nth-child(4) {
  animation-delay: 1s;
}

.card:nth-child(6) {
  animation-delay: 1s;
}

.card:nth-child(8) {
  animation-delay: 1s;
}

.card:nth-child(10) {
  animation-delay: 1s;
}

.card:nth-child(12) {
  animation-delay: 1s;
}

.card:nth-child(14) {
  animation-delay: 1s;
}

@keyframes loading90 {
  0% {
    background: rgba(255, 255, 255, 0.2);
  }

  50% {
    background: limegreen;
  }

  100% {
    background: rgba(255, 255, 255, 0.2);
  }
}
```

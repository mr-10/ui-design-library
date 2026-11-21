# Light Monkey 24

A loader UI element from Uiverse.io by JkHuger.

Source: https://uiverse.io/JkHuger/light-monkey-24

Author: JkHuger

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #fff

Fonts: See styles.css

Spacing and radius: 3px

## Source Code

### index.html

```html
<div class="container">
  <div class="block"></div>
  <div class="block"></div>
  <div class="block"></div>
  <div class="block"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by JkHuger - Tags: loader */
.container {
  width: 80px;
  margin: 100px auto;
}

.block {
  position: relative;
  box-sizing: border-box;
  float: left;
  margin: 0 10px 10px 0;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: #FFF;
}

.block:nth-child(4n+1) {
  animation: wave_23 2s ease .0s infinite;
}

.block:nth-child(4n+2) {
  animation: wave_23 2s ease .2s infinite;
}

.block:nth-child(4n+3) {
  animation: wave_23 2s ease .4s infinite;
}

.block:nth-child(4n+4) {
  animation: wave_23 2s ease .6s infinite;
  margin-right: 0;
}

@keyframes wave_23 {
  0% {
    top: 0;
    opacity: 1;
  }

  50% {
    top: 30px;
    opacity: .2;
  }

  100% {
    top: 0;
    opacity: 1;
  }
}
```

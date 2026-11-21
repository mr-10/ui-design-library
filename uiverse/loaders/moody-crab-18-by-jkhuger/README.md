# Moody Crab 18

A loader UI element from Uiverse.io by JkHuger.

Source: https://uiverse.io/JkHuger/moody-crab-18

Author: JkHuger

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #333

Fonts: See styles.css

Spacing and radius: 30px

## Source Code

### index.html

```html
<div id="col">
  <div id="img-wrap">
    <span class="loader"></span>
</div></div>
```

### styles.css

```css
/* From Uiverse.io by JkHuger - Tags: loader */
#col {
  width: 50%;
  margin: 0 auto;
}

.loader {
  content: ' ';
  border: 5px solid #333;
  border-radius: 30px;
  height: 30px;
  left: 50%;
  margin: -15px 0 0 -15px;
  opacity: 0;
  position: absolute;
  top: 50%;
  width: 30px;
  animation: pulsate 1s ease-out;
  animation-iteration-count: infinite;
}

@keyframes pulsate {
  0% {
    transform: scale(.1);
    opacity: 0.0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
```

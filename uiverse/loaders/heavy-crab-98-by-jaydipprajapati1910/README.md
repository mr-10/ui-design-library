# Heavy Crab 98

A loader UI element from Uiverse.io by JaydipPrajapati1910.

Source: https://uiverse.io/JaydipPrajapati1910/heavy-crab-98

Author: JaydipPrajapati1910

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, circle, gold, golden effect

Colors: #ffbb00, #ffecba

Fonts: See styles.css

Spacing and radius: 100%

## Source Code

### index.html

```html
<div class="loader">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by JaydipPrajapati1910 - Tags: loader, circle, gold, golden effect  */
.loader {
  height: 30px;
  display: inline-block;
}

.loader > div {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  box-shadow: 0 0 10px orange;
  background: #FFECBA;
  float: left;
  margin: 5px;
  transform: scale(2);
}

.loader > div:nth-child(1) {
  animation: anm-BL-53-move1 1s infinite linear;
}

.loader > div:nth-child(2) {
  animation: anm-BL-53-move2 1s infinite linear;
  animation-delay: 0.2s;
}

.loader > div:nth-child(3) {
  animation: anm-BL-53-move3 1s infinite linear;
  animation-delay: 0.3s;
}

.loader > div:nth-child(4) {
  animation: anm-BL-53-move4 1s infinite linear;
  animation-delay: 0.4s;
}

.loader > div:nth-child(5) {
  animation: anm-BL-53-move5 1s infinite linear;
  animation-delay: 0.5s;
}

@keyframes anm-BL-53-move1 {
  50% {
    background: #FFBB00;
    transform: scale(1);
  }
}

@keyframes anm-BL-53-move2 {
  50% {
    background: #FFBB00;
    transform: scale(1);
  }
}

@keyframes anm-BL-53-move3 {
  50% {
    background: #FFBB00;
    transform: scale(1);
  }
}

@keyframes anm-BL-53-move4 {
  50% {
    background: #FFBB00;
    transform: scale(1);
  }
}

@keyframes anm-BL-53-move5 {
  50% {
    background: #FFBB00;
    transform: scale(1);
  }
}
```

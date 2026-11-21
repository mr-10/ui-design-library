# Spicy Dolphin 98

A loader UI element from Uiverse.io by mrhyddenn.

Source: https://uiverse.io/mrhyddenn/spicy-dolphin-98

Author: mrhyddenn

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #15a0f7, #333, #5ad15a, #6ed15a, #ee280e

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
```

### styles.css

```css
/* From Uiverse.io by mrhyddenn - Tags: loader */
.loader {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(#ee280e, #15a0f7, #6ed15a);
  animation: animate7712 1.2s linear infinite;
}

@keyframes animate7712 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loader span {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(#ee280e, #15a0f7, #5ad15a);
}

.loader:after {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background: #333;
  border: solid #333 10px;
  border-radius: 50%;
}

.loader span:nth-child(1) {
  filter: blur(5px);
}

.loader span:nth-child(2) {
  filter: blur(10px);
}

.loader span:nth-child(3) {
  filter: blur(25px);
}

.loader span:nth-child(4) {
  filter: blur(50px);
}
```

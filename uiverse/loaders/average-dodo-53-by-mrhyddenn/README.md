# Average Dodo 53

A loader UI element from Uiverse.io by mrhyddenn.

Source: https://uiverse.io/mrhyddenn/average-dodo-53

Author: mrhyddenn

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #9ae932, #ccc

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader">
    <div class="circle"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by mrhyddenn - Tags: loader */
.loader {
  background: transparent;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  width: 80px;
  height: 80px;
  border: 2px solid #ccc;
  position: absolute;
  border-radius: 50%;
  animation: circle14512 2s linear infinite;
}

.circle::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #9ae932;
  box-shadow: 0 0 20px #9ae932, 0 0 60px #9ae932;
}

@keyframes circle14512 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
```

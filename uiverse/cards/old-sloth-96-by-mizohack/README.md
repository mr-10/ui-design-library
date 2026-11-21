# Old Sloth 96

A card UI element from Uiverse.io by Mizohack.

Source: https://uiverse.io/Mizohack/old-sloth-96

Author: Mizohack

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #14ffe9, #1b1b1b, #ff00e0, #ffeb3b, #fff

Fonts: See styles.css

Spacing and radius: 10px, 6px

## Source Code

### index.html

```html
<div class="wrapper">
  <div class="display">
    <div id="time"></div>
  </div>
  <span></span>
  <span></span>
</div>
```

### styles.css

```css
/* From Uiverse.io by Mizohack  - Tags: card */
.wrapper {
  height: 100px;
  width: 240px;
  position: relative;
  background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
  border-radius: 10px;
  cursor: default;
  animation: animate 1.5s linear infinite;
}
.wrapper .display,
.wrapper span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.wrapper .display {
  z-index: 999;
  height: 85px;
  width: calc(100% - 16px);
  background: #1b1b1b;
  border-radius: 6px;
  text-align: center;
}
.display #time {
  line-height: 85px;
  color: #fff;
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animate 1.5s linear infinite;
}
@keyframes animate {
  100% {
    filter: hue-rotate(360deg);
  }
}
.wrapper span {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background: inherit;
}
.wrapper span:first-child {
  filter: blur(7px);
}
.wrapper span:last-child {
  filter: blur(20px);
}
```

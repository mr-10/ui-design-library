# Smart Cow 19

A loader UI element from Uiverse.io by david-mohseni.

Source: https://uiverse.io/david-mohseni/smart-cow-19

Author: david-mohseni

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #c1aac6, #db9edf, #df00ff, #fde9ea, #fff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="ball"></div>
<div class="shadow"></div>
```

### styles.css

```css
/* From Uiverse.io by david-mohseni - Tags: loader */
.ball {
  animation: float612 2.4s ease-in-out infinite;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  position: relative;
  background: radial-gradient( circle at 75% 30%, white 5px, #DF00FF 8%, #DB9EDF 60%, #DF00FF 100%);
  box-shadow: inset 0 0 20px #C1AAC6, inset 10px 0 46px #DF00FF, inset 88px 0px 60px #DB9EDF, inset -20px -60px 100px #fde9ea, inset 0 50px 140px #fde9ea, 0 0 90px #fff;
}

@keyframes float612 {
  0% {
    transform: translatey(0px);
  }

  50% {
    transform: translatey(-50px);
  }

  100% {
    transform: translatey(0px);
  }
}

.shadow {
  background: #DB9EDF;
  width: 80px;
  height: 25px;
  top: 65%;
  animation: expand6234 2.4s ease-in-out infinite;
  position: absolute;
  border-radius: 50%;
}

@keyframes expand6234 {
  0%,
            100% {
    transform: scale(0.6);
  }

  50% {
    transform: scale(0.3);
    filter: blur(5px);
  }
}
```

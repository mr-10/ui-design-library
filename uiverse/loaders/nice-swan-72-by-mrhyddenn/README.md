# Nice Swan 72

A loader UI element from Uiverse.io by mrhyddenn.

Source: https://uiverse.io/mrhyddenn/nice-swan-72

Author: mrhyddenn

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #e5e5e5, #fff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader-box">
    <div class="loading-wrapper">
        <div class="loader">
            <div class="loader-inner">
            </div>
        </div>
    </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by mrhyddenn - Tags: loader */
loader-box {
  background: #fff;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

.loading-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.loading-wrapper .loader {
  height: 80px;
  width: 80px;
  border: 3px solid #e5e5e5;
  border-radius: 50%;
  -webkit-animation: pulse1572 1200ms ease-in-out;
  animation: pulse1572 1200ms ease-in-out;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.loading-wrapper .loader .loader-inner {
  display: block;
  height: 40px;
  width: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  background: linear-gradient(180deg, rgb(0, 140, 255) 0%, rgb(218, 67, 218) 100%);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  border-radius: 50%;
  -webkit-animation: innerPulse934 1200ms ease-in-out;
  animation: innerPulse934 1200ms ease-in-out;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-delay: 600ms;
  animation-delay: 600ms;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

@keyframes pulse1572 {
  0% {
    border: 3px solid #fff;
  }

  50% {
    border: 40px solid #fff;
  }

  100% {
    border: 3px solid #fff;
  }
}

@keyframes innerPulse934 {
  0% {
    height: 30px;
    width: 30px;
  }

  50% {
    height: 53.33333px;
    width: 53.33333px;
  }

  100% {
    height: 30px;
    width: 30px;
  }
}
```

# Smart Falcon 33

A loader UI element from Uiverse.io by JaydipPrajapati1910.

Source: https://uiverse.io/JaydipPrajapati1910/smart-falcon-33

Author: JaydipPrajapati1910

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, circle, colorful, circle loader

Colors: #212121, #282828, #292929, #ff7402, #ffe700, #fff55e

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader">
  <span></span>
</div>
```

### styles.css

```css
/* From Uiverse.io by JaydipPrajapati1910 - Tags: loader, circle, colorful, circle loader */
.loader {
  position: relative;
  width: 160px;
  height: 160px;
  border: 4px solid #282828;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.1),
    10px 10px 10px rgba(0, 0, 0, 0.4),
    inset -5px -5px 5px rgba(255, 255, 255, 0.2),
    inset 10px 10px 10px rgba(0, 0, 0, 0.4);
}

.loader:before {
  content: "";
  position: absolute;
  top: 25px;
  left: 25px;
  right: 25px;
  bottom: 25px;
  z-index: 10;
  background: #212121;
  border-radius: 50%;
  border: 2px solid #292929;
  box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 0.2),
    inset 3px 3px 5px rgba(0, 0, 0, 0.5);
}

.loader span {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: linear-gradient(
    -225deg,
    #ff7402 0%,
    #ffe700 50%,
    #fff55e 100%
  );
  filter: blur(20px);
  z-index: -1;
  animation: animate 0.5s linear infinite;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
```

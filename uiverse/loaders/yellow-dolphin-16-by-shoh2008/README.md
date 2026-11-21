# Yellow Dolphin 16

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/yellow-dolphin-16

Author: Shoh2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #fff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<span class="loader"></span>
```

### styles.css

```css
/* From Uiverse.io by Shoh2008 - Tags: loader */
.loader {
  display: block;
  width: 84px;
  height: 84px;
  position: relative;
}

.loader:before , .loader:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #FFF;
  transform: translate(-50% , -100%)  scale(0);
  animation: push_401 2s infinite linear;
}

.loader:after {
  animation-delay: 1s;
}

@keyframes push_401 {
  0% , 50% {
    transform: translate(-50% , 0%)  scale(1)
  }

  100% {
    transform: translate(-50%, -100%) scale(0)
  }
}
```

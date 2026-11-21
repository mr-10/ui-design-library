# Ancient Lionfish 44

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/ancient-lionfish-44

Author: Shoh2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #263238, #fff

Fonts: Arial, Helvetica, sans-serif

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<span class="loader">Loading</span>
```

### styles.css

```css
/* From Uiverse.io by Shoh2008 - Tags: loader */
.loader {
  font-size: 48px;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #FFF;
  letter-spacing: 2px;
  position: relative;
  box-sizing: border-box;
}

.loader::after {
  content: 'Loading';
  position: absolute;
  left: 0;
  top: 0;
  color: #263238;
  text-shadow: 0 0 2px #FFF, 0 0 1px #FFF, 0 0 1px #FFF;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
}

@keyframes animloader {
  0% {
    height: 100%;
  }

  100% {
    height: 0%;
  }
}
```

# Nice Dog 2

A loader UI element from Uiverse.io by Mike11jr.

Source: https://uiverse.io/Mike11jr/nice-dog-2

Author: Mike11jr

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #162534, #36f372, #4bc8eb, #f13a8f, #fff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader-wrapper">
<div class="loader">
  <div class="loader loader-inner"></div>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Mike11jr - Tags: loader */
.loader-wrapper {
 width: 60px;
 height: 60px;
}

.loader {
 box-sizing: border-box;
 width: 100%;
 height: 100%;
 border: 10px solid #162534;
 border-top-color: #4bc8eb;
 border-bottom-color: #f13a8f;
 border-radius: 50%;
 animation: rotate0925 5s linear infinite;
}

.loader-inner {
 border-top-color: #36f372;
 border-bottom-color: #fff;
 animation-duration: 2.5s;
}

@keyframes rotate0925 {
 0% {
  transform: scale(1) rotate(360deg);
 }

 50% {
  transform: scale(.8) rotate(-360deg);
 }

 100% {
  transform: scale(1) rotate(360deg);
 }
}
```

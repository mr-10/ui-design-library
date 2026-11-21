# Fresh Tiger 75

A loader UI element from Uiverse.io by sabbircoder07.

Source: https://uiverse.io/sabbircoder07/fresh-tiger-75

Author: sabbircoder07

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, animated, css3

Colors: #0081e2, #0085e6, #0088eb, #008cef, #0090de, #009bd2, #00a2f1, #00a3c1, #00b4e3, #00c2c9

Fonts: See styles.css

Spacing and radius: 100px

## Source Code

### index.html

```html
<div class="progress">
      <div class="inner"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by sabbircoder07 - Tags: loader, animated, css3 */
.progress {
  background-color: #ffffff;
  width: 220px;
  height: 20px;
  border-radius: 100px;
  overflow: hidden;
  backface-visibility: hidden;
}

.inner {
  background-image: linear-gradient(to left, #00cdac, #00c2c9, #00b4e3, #00a2f1, #008cef, #0088eb, #0085e6, #0081e2, #0090de, #009bd2, #00a3c1, #02aab0);
  height: 100%;
  transform-origin: left;
  animation: progress 2s infinite;
}

@keyframes progress {
  0% {
    transform: scaleX(10%) translateX(-10%);
  }

  100% {
    transform: scaleX(80%) translateX(150%);
  }
}
```

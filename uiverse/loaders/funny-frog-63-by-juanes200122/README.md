# Funny Frog 63

A loader UI element from Uiverse.io by Juanes200122.

Source: https://uiverse.io/Juanes200122/funny-frog-63

Author: Juanes200122

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, animation, red, loading, loader

Colors: #ff3d00, #fff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<span class="loader"></span>
```

### styles.css

```css
/* From Uiverse.io by Juanes200122  - Website: https://cssloaders.github.io/ - Name: css-loader - Tags: simple, animation, red, loading, loader */
.loader {
  width: 48px;
  height: 48px;
  border: 3px dotted #fff;
  border-style: solid solid dotted dotted;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 3px dotted #ff3d00;
  border-style: solid solid dotted;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  animation: rotationBack 1s linear infinite;
  transform-origin: center center;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
```

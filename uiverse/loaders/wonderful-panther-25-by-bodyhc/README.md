# Wonderful Panther 25

A loader UI element from Uiverse.io by Bodyhc.

Source: https://uiverse.io/Bodyhc/wonderful-panther-25

Author: Bodyhc

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loading, loader, circle loader

Colors: #000, #0000, #766df440, #766df480, #766df4bf, #766df4ff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="custom-loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Bodyhc - Tags: loading, loader, circle loader */
.custom-loader {
  width: 50px;
  height: 50px;
  display: grid;
  border-radius: 50%;
  -webkit-mask: radial-gradient(farthest-side,#0000 40%,#000 41%);
  background: linear-gradient(0deg ,#766DF480 50%,#766DF4FF 0) center/4px 100%,
    linear-gradient(90deg,#766DF440 50%,#766DF4BF 0) center/100% 4px;
  background-repeat: no-repeat;
  animation: s3 1s infinite steps(12);
}

.custom-loader::before,
.custom-loader::after {
  content: "";
  grid-area: 1/1;
  border-radius: 50%;
  background: inherit;
  opacity: 0.915;
  transform: rotate(30deg);
}

.custom-loader::after {
  opacity: 0.83;
  transform: rotate(60deg);
}

@keyframes s3 {
  100% {
    transform: rotate(1turn)
  }
}
```

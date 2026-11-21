# Wicked Seahorse 54

A loader UI element from Uiverse.io by omar-alghaish.

Source: https://uiverse.io/omar-alghaish/wicked-seahorse-54

Author: omar-alghaish

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #2d60ec, #3ccfda

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader">loading...</div>
```

### styles.css

```css
/* From Uiverse.io by omar-alghaish - Tags: loader */
@keyframes animate8345 {
  0%,100% {
    filter: hue-rotate(0deg);
  }

  50% {
    filter: hue-rotate(360deg);
  }
}

.loader {
  color: rgb(0, 0, 0);
  background: linear-gradient(to right, #2d60ec, #3ccfda);
  font-size: 30px;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: animate8345 9s linear infinite;
  font-weight: bold;
}
```

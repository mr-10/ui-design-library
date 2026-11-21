# Breezy Bullfrog 65

A loader UI element from Uiverse.io by bernethe.

Source: https://uiverse.io/bernethe/breezy-bullfrog-65

Author: bernethe

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by bernethe - Tags: loader */
.loader {
  border-radius: 50%;
  border-top: 16px rgba(0,0,0,0.75) solid;
  border-left: 16px rgba(0,0,0,0.25) solid;
  border-bottom: 16px rgba(0,0,0,0.25) solid;
  border-right: 16px rgba(0,0,0,0.25) solid;
  animation: spSlices 1s infinite linear;
}

@keyframes spSlices {
  0% {
    border-top: 16px rgba(0,0,0,0.75) solid;
    border-right: 16px rgba(0,0,0,0.25) solid;
    border-bottom: 16px rgba(0,0,0,0.25) solid;
    border-left: 16px rgba(0,0,0,0.25) solid;
  }

  25% {
    border-top: 16px rgba(0,0,0,0.25) solid;
    border-right: 16px rgba(0,0,0,0.75) solid;
    border-bottom: 16px rgba(0,0,0,0.25) solid;
    border-left: 16px rgba(0,0,0,0.25) solid;
  }

  50% {
    border-top: 16px rgba(0,0,0,0.25) solid;
    border-right: 16px rgba(0,0,0,0.25) solid;
    border-bottom: 16px rgba(0,0,0,0.75) solid;
    border-left: 16px rgba(0,0,0,0.25) solid;
  }

  75% {
    border-top: 16px rgba(0,0,0,0.25) solid;
    border-right: 16px rgba(0,0,0,0.25) solid;
    border-bottom: 16px rgba(0,0,0,0.25) solid;
    border-left: 16px rgba(0,0,0,0.75) solid;
  }

  100% {
    border-top: 16px rgba(0,0,0,0.75) solid;
    border-right: 16px rgba(0,0,0,0.25) solid;
    border-bottom: 16px rgba(0,0,0,0.25) solid;
    border-left: 16px rgba(0,0,0,0.25) solid;
  }
}
```

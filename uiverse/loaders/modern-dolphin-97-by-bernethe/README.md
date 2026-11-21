# Modern Dolphin 97

A loader UI element from Uiverse.io by bernethe.

Source: https://uiverse.io/bernethe/modern-dolphin-97

Author: bernethe

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #000

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
  width: 2rem;
  height: 2rem;
  clear: both;
  margin: 1rem auto;
  border-radius: 50%;
  border-left: 0 #000 solid;
  border-right: 0 #000 solid;
  animation: spSphere 1s infinite linear;
}

@keyframes spSphere {
  0% {
    border-left: 0 #000 solid;
    border-right: 0 #000 solid;
  }

  33% {
    border-left: 2rem #000 solid;
    border-right: 0 #000 solid;
  }

  34% {
    border-left: 0 #000 solid;
    border-right: 2rem #000 solid;
  }

  66% {
    border-left: 0 #000 solid;
    border-right: 0 #000 solid;
  }
}
```

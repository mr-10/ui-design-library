# Dry Rat 94

A loader UI element from Uiverse.io by cohencoo.

Source: https://uiverse.io/cohencoo/dry-rat-94

Author: cohencoo

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #000, #0000, #ffa600

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<div class="custom-loader"></div>
```

### styles.css

```css
/* From Uiverse.io by cohencoo - Tags: loader */
.custom-loader {
  width: 70px;
  height: 70px;
  background: #ffa600;
  border-radius: 50px;
  -webkit-mask: radial-gradient(circle 31px at 50% calc(100% + 13px),#000 95%,#0000) top 4px left 50%,
    radial-gradient(circle 31px,#000 95%,#0000) center,
    radial-gradient(circle 31px at 50% -13px,#000 95%,#0000) bottom 4px left 50%,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  -webkit-mask-repeat: no-repeat;
  animation: cu10 1.5s infinite;
}

@keyframes cu10 {
  0% {
    -webkit-mask-size: 0    18px,0    18px,0    18px,auto
  }

  16.67% {
    -webkit-mask-size: 100% 18px,0    18px,0    18px,auto
  }

  33.33% {
    -webkit-mask-size: 100% 18px,100% 18px,0    18px,auto
  }

  50% {
    -webkit-mask-size: 100% 18px,100% 18px,100% 18px,auto
  }

  66.67% {
    -webkit-mask-size: 0    18px,100% 18px,100% 18px,auto
  }

  83.33% {
    -webkit-mask-size: 0    18px,0    18px,100% 18px,auto
  }

  100% {
    -webkit-mask-size: 0    18px,0    18px,0    18px,auto
  }
}
```

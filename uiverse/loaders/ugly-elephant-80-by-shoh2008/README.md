# Ugly Elephant 80

A loader UI element from Uiverse.io by Shoh2008.

Source: https://uiverse.io/Shoh2008/ugly-elephant-80

Author: Shoh2008

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #0000, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Shoh2008 - Tags: loader */
.loader {
  width: 45px;
  height: 40px;
  background: linear-gradient(#0000 calc(1*100%/6),#fff 0 calc(3*100%/6),#0000 0),
            linear-gradient(#0000 calc(2*100%/6),#fff 0 calc(4*100%/6),#0000 0),
            linear-gradient(#0000 calc(3*100%/6),#fff 0 calc(5*100%/6),#0000 0);
  background-size: 10px 400%;
  background-repeat: no-repeat;
  animation: matrix 1s infinite linear;
}

@keyframes matrix {
  0% {
    background-position: 0% 100%, 50% 100%, 100% 100%
  }

  100% {
    background-position: 0% 0%, 50% 0%, 100% 0%
  }
}
```

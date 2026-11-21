# Pretty Mouse 82

A loader UI element from Uiverse.io by doniaskima.

Source: https://uiverse.io/doniaskima/pretty-mouse-82

Author: doniaskima

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, skeuomorphism, glassmorphism, animation, loader

Colors: #612329, #bbb6aa, #e4e0d7, #eb6b3e

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by doniaskima - Tags: simple, material design, skeuomorphism, glassmorphism, animation, loader */
/* HTML: <div class="loader"></div> */
.loader {
  width: 35px;
  height: 80px;
  position: relative;
}

.loader:after {
  content: "";
  position: absolute;
  inset: 0;
  padding: 3px 5px;
  border-top: 1px solid #bbb6aa;
  border-bottom: 4px solid #bbb6aa;
  background: linear-gradient(#612329 0 0) bottom no-repeat content-box, 
    #e4e0d7;
  mix-blend-mode: darken;
  animation: l1 1.5s infinite linear;
}

.loader:before {
  content: "";
  position: absolute;
  inset: -18px calc(50% - 2px) 8px;
  background: #eb6b3e;
  transform-origin: bottom;
  transform: rotate(8deg);
}

@keyframes l1 {
  0% {
    background-size: 100% 100%
  }

  100% {
    background-size: 100% 5%
  }
}
```

# Helpless Elephant 82

A loader UI element from Uiverse.io by r7chardgh.

Source: https://uiverse.io/r7chardgh/helpless-elephant-82

Author: r7chardgh

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loading, loader, adidas

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader">
  <div class="leaf"></div>
  <div class="leaf"></div>
  <div class="leaf"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by r7chardgh - Tags: loading, loader, adidas */
.loader {
  display: flex;
  gap: .5em;
}

.leaf {
  width: 1em;
  height: 3em;
  background-color: rgb(0, 0, 0,.3);
  clip-path: polygon(0% 0%,100% 0%,100% 100%,0% 81%);
  transform: rotate(-30deg);
  animation: color 1200ms infinite;
  animation-delay: 800ms;
}

.leaf:nth-child(2) {
  clip-path: polygon(0% 35%,100% 35%,100% 100%,0% 81%);
  animation-delay: 400ms;
}

.leaf:nth-child(1) {
  clip-path: polygon(0% 70%,100% 70%,100% 100%,0% 81%);
  animation-delay: 0ms;
}

@keyframes color {
  from {
    background-color: lightblue;
  }

  to {
  }
}
```

# Hungry Elephant 87

A loader UI element from Uiverse.io by AbanoubMagdy1.

Source: https://uiverse.io/AbanoubMagdy1/hungry-elephant-87

Author: AbanoubMagdy1

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #2596be

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by AbanoubMagdy1 - Tags: loader */
.loader {
  --dim: 5rem;
  width: var(--dim);
  height: var(--dim);
  border: 7px solid #2596be;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: spin_51 1.5s infinite linear;
}

@keyframes spin_51 {
  from {
    transform: rotate(0)
  }

  to {
    transform: rotate(360deg)
  }
}
```

# Afraid Sheep 52

A pattern UI element from Uiverse.io by jeremyssocial.

Source: https://uiverse.io/jeremyssocial/afraid-sheep-52

Author: jeremyssocial

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: dark, animated, pattern

Colors: #121212, #1a1a1a

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by jeremyssocial  - Tags: dark, animated, pattern */
.container {
  /* Basic dimensions and centering */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Dark mode colors and gradient */
  background: #121212; /* Fallback for browsers that don't support gradients */
  background: linear-gradient(
    135deg,
    #121212 25%,
    #1a1a1a 25%,
    #1a1a1a 50%,
    #121212 50%,
    #121212 75%,
    #1a1a1a 75%,
    #1a1a1a
  );
  background-size: 40px 40px;

  /* Animation */
  animation: move 4s linear infinite;
}

@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 40px;
  }
}
```

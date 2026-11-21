# Brown Cheetah 84

A pattern UI element from Uiverse.io by elijahgummer.

Source: https://uiverse.io/elijahgummer/brown-cheetah-84

Author: elijahgummer

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, blue, modern, pattern

Colors: #3498db, #f0f0f0

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by elijahgummer  - Tags: simple, blue, modern, pattern */
.container {
  width: 100%;
  height: 100%;
  position: relative;
  background: #f0f0f0;
}

.container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      45deg,
      #3498db 25%,
      transparent 25%,
      transparent 50%,
      #3498db 50%,
      #3498db 75%,
      transparent 75%,
      transparent
    ),
    linear-gradient(
      -45deg,
      #3498db 25%,
      transparent 25%,
      transparent 50%,
      #3498db 50%,
      #3498db 75%,
      transparent 75%,
      transparent
    );
  background-size: 20px 20px;
  opacity: 0.8;
}
```

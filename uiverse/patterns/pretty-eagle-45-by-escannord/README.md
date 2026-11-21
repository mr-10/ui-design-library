# Pretty Eagle 45

A pattern UI element from Uiverse.io by escannord.

Source: https://uiverse.io/escannord/pretty-eagle-45

Author: escannord

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: 3d, white, black, gradient, pattern

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by escannord  - Tags: 3d, white, black, gradient, pattern */
.container {
  width: 100%;
  height: 100%;
  --bg: linear-gradient(
      45deg,
      rgb(0, 0, 0) 25%,
      transparent 25%,
      transparent 75%,
      rgb(0, 0, 0) 75%,
      rgb(0, 0, 0)
    ),
    linear-gradient(
      45deg,
      rgb(0, 0, 0) 25%,
      white 25%,
      white 75%,
      rgb(0, 0, 0) 75%,
      rgb(0, 0, 0)
    );
  --bgsize: 60px 60px;
  --bgposition: 0 0, 30px 30px;
  background-color: white;
  background-image: var(--bg);
  background-size: var(--bgsize);
  background-position: var(--bgposition);
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  overflow: hidden;
  box-shadow: inset 0px 0px 500px rgb(15, 15, 15);
}

.container::before {
  content: "";
  width: 100%;
  height: 150%;
  box-shadow: 0px -100px 500px black, inset 0px 100px 500px rgb(15, 15, 15);
  position: absolute;
  top: 55%;
  background-image: var(--bg);
  background-size: var(--bgsize);
  background-position: var(--bgposition);
  transform-origin: top;
  transform: rotateX(80deg);
}
```

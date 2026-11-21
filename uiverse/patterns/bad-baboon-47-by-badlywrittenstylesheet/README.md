# Bad Baboon 47

A pattern UI element from Uiverse.io by BadlyWrittenStylesheet.

Source: https://uiverse.io/BadlyWrittenStylesheet/bad-baboon-47

Author: BadlyWrittenStylesheet

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, dark, colorful, rainbow, multicolor, pattern, background

Colors: #0000

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="container"></div>
```

### styles.css

```css
/* From Uiverse.io by BadlyWrittenStylesheet  - Tags: gradient, dark, colorful, rainbow, multicolor, pattern, background */
.container {
  width: 100%;
  height: 100%;
  /* Add your background pattern here */
  /* background-color: lightblue; */
  background-image: radial-gradient(black 55%, #0000),
    /* radial-gradient(black 55%, #0000), */
      linear-gradient(
        135deg,
        red,
        orange,
        yellow,
        lime,
        cyan,
        blue,
        indigo,
        deeppink
      );
  background-size: 100% 0.5%, contain;
  /* background-blend-mode: hard-light; */
  /* background-position: 0 0, 1em 1em, 0 0; */
}
```

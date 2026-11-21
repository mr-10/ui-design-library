# Stale Wombat 66

A button UI element from Uiverse.io by r7chardgh.

Source: https://uiverse.io/r7chardgh/stale-wombat-66

Author: r7chardgh

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: 3d, button, keyboard style

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button class="button">
  Enter
</button>
```

### styles.css

```css
/* From Uiverse.io by r7chardgh - Tags: 3d, button, keyboard style */
.button {
  position: relative;
  padding: 1em 1.5em;
  transform: rotateX(40deg)rotateZ(40deg);
  transform-style: preserve-3d;
  border: .1em solid black;
  transition: all 150ms;
  background-color: rgb(233, 211, 184);
  cursor: pointer;
}

.button::before {
  content: "";
  position: absolute;
  width: 2em;
  height: 99%;
  border: .1em solid black;
  top: -.15em;
  right: 0;
  transform-origin: right;
  transform: rotateY(-90deg);
  transition: all 150ms;
  background-color: rgb(155, 139, 120);
}

.button::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2em;
  border: .1em solid black;
  bottom: 0;
  left: -.15em;
  transform-origin: bottom;
  transform: rotateX(90deg);
  transition: all 150ms;
  background-color: rgb(199, 179, 155);
}

.button:active {
  transform: rotateX(40deg)rotateZ(40deg) translateZ(-1em);
}

.button:active::before {
  width: 0;
}

.button:active::after {
  height: 0;
}
```

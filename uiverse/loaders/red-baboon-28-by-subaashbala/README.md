# Red Baboon 28

A loader UI element from Uiverse.io by Subaashbala.

Source: https://uiverse.io/Subaashbala/red-baboon-28

Author: Subaashbala

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, smooth, loading animation

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader">
  <span>&lt;</span>
  <span>LOADING</span>
  <span>/&gt;</span>
</div>
```

### styles.css

```css
/* From Uiverse.io by Subaashbala  - Tags: loader, smooth, loading animation */
.loader {
  font-size: 2em;
  font-weight: 900;
}
.loader > * {
  color: black;
}
.loader span {
  display: inline-flex;
}
.loader span:nth-child(2) {
  letter-spacing: -1em;
  overflow: hidden;
  animation: reveal 1500ms cubic-bezier(0.645, 0.045, 0.355, 1) infinite
    alternate;
}
@keyframes reveal {
  0%,
  100% {
    opacity: 0.5;
    letter-spacing: -1em;
  }
  50% {
    opacity: 1;
    letter-spacing: 0em;
  }
}
```

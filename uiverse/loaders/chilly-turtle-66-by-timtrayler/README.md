# Chilly Turtle 66

A loader UI element from Uiverse.io by TimTrayler.

Source: https://uiverse.io/TimTrayler/chilly-turtle-66

Author: TimTrayler

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="spinner">
  <span class="spinner-part-0"></span>
  <span class="spinner-part-1"></span>
  <span class="spinner-part-2"></span>
  <span class="spinner-part-3"></span>
  <span class="spinner-part-0"></span>
  <span class="spinner-part-1"></span>
  <span class="spinner-part-2"></span>
  <span class="spinner-part-3"></span>
</div>
```

### styles.css

```css
/* From Uiverse.io by TimTrayler - Tags: loader */
.spinner {
 --accent: fuchsia;
 --max-scale: 4;
 --speed: 0.2;
 display: flex;
 gap: 0.3em;
 transform: skew(15deg, 10deg);
}

.spinner span {
 display: block;
 background-color: var(--accent);
 box-shadow: 1px 1px 5px 0.2px var(--accent);
 width: 0.7px;
 height: 0.6em;
}

.spinner .spinner-part-0 {
 animation: load432 calc(1s/var(--speed)) linear infinite;
}

.spinner .spinner-part-1 {
 animation: load432 calc(0.16s/var(--speed)) linear infinite;
}

.spinner .spinner-part-2 {
 animation: load432 calc(0.4s/var(--speed)) linear infinite;
}

.spinner .spinner-part-3 {
 animation: load432 calc(0.5s/var(--speed)) linear infinite;
}

@keyframes load432 {
 50% {
  transform: scaleY(var(--max-scale));
 }
}
```

# Wet Dolphin 100

A loader UI element from Uiverse.io by gagan-gv.

Source: https://uiverse.io/gagan-gv/wet-dolphin-100

Author: gagan-gv

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: 'Courier New', Courier, monospace

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader">
  <span>L</span>
  <span>O</span>
  <span>A</span>
  <span>D</span>
  <span>I</span>
  <span>N</span>
  <span>G</span>
</div>
```

### styles.css

```css
/* From Uiverse.io by gagan-gv - Tags: loader */
.loader span {
 font-size: 22px;
 font-family: 'Courier New', Courier, monospace;
 font-weight: 600;
 animation: blur 3s linear infinite;
 line-height: 20px;
 transition: all 0.5s;
 letter-spacing: 0.2em;
}

@keyframes blur {
 0%, 90% {
  filter: blur(0);
 }

 50% {
  filter: blur(10px);
 }
}
```

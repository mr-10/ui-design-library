# Foolish Sloth 24

A loader UI element from Uiverse.io by bociKond.

Source: https://uiverse.io/bociKond/foolish-sloth-24

Author: bociKond

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: minimalist, loading, loader, animated, color, minimal

Colors: #05a8aa

Fonts: See styles.css

Spacing and radius: 5rem

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by bociKond - Tags: minimalist, loading, loader, animated, color, minimal */
.loader {
  /* color of choise */
  --clr: #05A8AA;
  /* loading time of choice */
  --load-time: 2s;
  outline: 5px solid var(--clr);
  outline-offset: 5px;
  position: relative;
  overflow: hidden;
  border-radius: 5rem;
  /* width: 10rem; */
  /* height: 2rem; */
  padding: 1rem 5rem;
  /* use either padding or width + height*/
  /* I prefer the padding one */
  /* rotate: -90deg; */
  /* rotate if you want/need vertical loader */
}

.loader::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--clr);
  z-index: 2;
  animation: loading var(--load-time) ease-in-out infinite;
}

@keyframes loading {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}
```

# Tall Impala 21

A loader UI element from Uiverse.io by gharsh11032000.

Source: https://uiverse.io/gharsh11032000/tall-impala-21

Author: gharsh11032000

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, loader, rolling

Colors: #0974f1

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<label class="loader">
  <span class="slider"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by gharsh11032000 - Tags: animation, loader, rolling */
.loader {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 8em;
  height: 2em;
}

.slider {
  position: absolute;
  inset: 0;
  background: #0974f1;
  box-shadow: 0 0px 20px rgba(9, 117, 241, 0.4);
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  left: 0.3em;
  bottom: 0.3em;
  background-color: white;
  animation: move 1.5s cubic-bezier(0.23, 1, 0.320, 1) infinite alternate;
}

@keyframes move {
  0% {
    transform: translateX(0em) rotate(0deg);
  }

  100% {
    transform: translateX(6em) rotate(270deg);
  }
}
```

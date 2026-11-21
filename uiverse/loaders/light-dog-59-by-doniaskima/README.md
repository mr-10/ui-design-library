# Light Dog 59

A loader UI element from Uiverse.io by doniaskima.

Source: https://uiverse.io/doniaskima/light-dog-59

Author: doniaskima

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, material design, loader, code, modern

Colors: #000, #0000, #fff

Fonts: monospace

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by doniaskima - Tags: simple, material design, loader, code, modern */
.loader {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  background: radial-gradient(circle closest-side,#000 94%,#0000) right/calc(200% - 1em) 100%;
  animation: l24 1s infinite alternate linear;
}

.loader::before {
  content: "Loading...";
  line-height: 1em;
  color: #0000;
  background: inherit;
  background-image: radial-gradient(circle closest-side,#fff 94%,#000);
  -webkit-background-clip: text;
  background-clip: text;
}

@keyframes l24 {
  100% {
    background-position: left
  }
}
```

# Short Swan 83

A loader UI element from Uiverse.io by Yaya12085.

Source: https://uiverse.io/Yaya12085/short-swan-83

Author: Yaya12085

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loading, progress bar, loader, colorful

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 3px

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Yaya12085 - Tags: loading, progress bar, loader, colorful */
.loader {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 60px;
  height: 22px;
  border: 2px solid;
  border-radius: 3px;
  margin-left: -3px
}

.loader::after,
.loader::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  height: 12px;
  background: currentColor;
  top: 3px
}

.loader::before {
  right: -4px;
  border-radius: 3px;
  width: 4px
}

.loader::after {
  width: 1px;
  left: 3px;
  animation: full 2s ease-in-out infinite;
}

@keyframes full {
  20% {
    background-color: red
  }

  45% {
    background-color: yellow;
  }

  to {
    width: 50px;
    background-color: greenyellow;
  }
}
```

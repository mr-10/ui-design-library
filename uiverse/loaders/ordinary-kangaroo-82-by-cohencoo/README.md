# Ordinary Kangaroo 82

A loader UI element from Uiverse.io by cohencoo.

Source: https://uiverse.io/cohencoo/ordinary-kangaroo-82

Author: cohencoo

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loading, loader, download, downloading

Colors: #f4bf00

Fonts: See styles.css

Spacing and radius: 20px, inherit

## Source Code

### index.html

```html
<div class="custom-loader"></div>
```

### styles.css

```css
/* From Uiverse.io by cohencoo - Tags: loading, loader, download, downloading */
.custom-loader {
  width: 120px;
  height: 22px;
  border-radius: 20px;
  color: #F4BF00;
  border: 2px solid;
  position: relative;
}

.custom-loader::before {
  content: "";
  position: absolute;
  margin: 2px;
  inset: 0 100% 0 0;
  border-radius: inherit;
  background: #F4BF00;
  animation: p6 2s infinite;
}

@keyframes p6 {
  100% {
    inset: 0
  }
}
```

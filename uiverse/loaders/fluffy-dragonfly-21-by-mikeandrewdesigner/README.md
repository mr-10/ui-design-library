# Fluffy Dragonfly 21

A loader UI element from Uiverse.io by MikeAndrewDesigner.

Source: https://uiverse.io/MikeAndrewDesigner/fluffy-dragonfly-21

Author: MikeAndrewDesigner

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, loader, circle loader, spin, loading animation

Colors: #a23ffc

Fonts: See styles.css

Spacing and radius: 45%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by MikeAndrewDesigner - Tags: animation, loader, circle loader, spin, loading animation */
.loader {
  width: 5.4em;
  height: 5.4em;
  border: 0.4em solid rgb(84, 84, 84);
  border-left-color: #a23ffc;
  border-radius: 45%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

# Yellow Panther 46

A loader UI element from Uiverse.io by gagan-gv.

Source: https://uiverse.io/gagan-gv/yellow-panther-46

Author: gagan-gv

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, progress, loader, smooth

Colors: #47a7ff, #47a7ff44

Fonts: See styles.css

Spacing and radius: 8px

## Source Code

### index.html

```html
<div class="loader">
    <div></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by gagan-gv - Tags: animation, progress, loader, smooth */
.loader {
  width: 12em;
  height: 1em;
  border-radius: 8px;
  background-color: #47a7ff44;
}

.loader div {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background-color: #47a7ff;
  animation: width7435 5s linear infinite;
  transition: all;
}

@keyframes width7435 {
  from {
    /*width: 0;*/
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}
```

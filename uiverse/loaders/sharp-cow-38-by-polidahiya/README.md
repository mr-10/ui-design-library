# Sharp Cow 38

A loader UI element from Uiverse.io by polidahiya.

Source: https://uiverse.io/polidahiya/sharp-cow-38

Author: polidahiya

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, loading, loader, download, downloading

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loadingtext">
  <p>Loading</p>
</div>
```

### styles.css

```css
/* From Uiverse.io by polidahiya  - Tags: simple, loading, loader, download, downloading */
.loadingtext p {
  color: white;
  position: relative;
}

.loadingtext p::after {
  position: absolute;
  animation: b 3s infinite linear;
  color: white;
  content: "";
  left: 105%;
}

@keyframes b {
  0% {
    content: "";
  }

  10% {
    content: ".";
  }

  40% {
    content: "..";
  }

  70% {
    content: "...";
  }

  100% {
    content: "";
  }
}
```

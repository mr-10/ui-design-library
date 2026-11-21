# Fat Impala 67

A loader UI element from Uiverse.io by bernethe.

Source: https://uiverse.io/bernethe/fat-impala-67

Author: bernethe

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #000

Fonts: See styles.css

Spacing and radius: 0.25rem

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by bernethe - Tags: loader */
.loader {
  clear: both;
  width: 2rem;
  height: 2rem;
  margin: 1rem auto;
  border: 0.0625rem #000 solid;
  border-radius: 0.25rem;
  position: relative;
  background: linear-gradient(45deg, transparent 49%, #000 50%, #000 50%, transparent 51%, transparent),
				linear-gradient(-45deg, transparent 49%, #000 50%, #000 50%, transparent 51%, transparent);
  background-size: 1rem 1rem;
  background-position: 0% 0%;
  -webkit-animation: spTexture 1s infinite linear;
  animation: spTexture 1s infinite linear;
}

@keyframes spTexture {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -1rem 0;
  }
}
```

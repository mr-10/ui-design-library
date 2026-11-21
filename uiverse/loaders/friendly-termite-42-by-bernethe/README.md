# Friendly Termite 42

A loader UI element from Uiverse.io by bernethe.

Source: https://uiverse.io/bernethe/friendly-termite-42

Author: bernethe

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #000

Fonts: See styles.css

Spacing and radius: .25rem, 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by bernethe - Tags: loader */
.loader {
  width: 2rem;
  height: 2rem;
  clear: both;
  margin: 1rem auto;
  border: 0.0625rem #000 solid;
  border-radius: .25rem;
  overflow: hidden;
  position: relative;
}

.loader:after, .loader:before {
  content: '';
  border-radius: 50%;
  position: absolute;
  width: inherit;
  height: inherit;
  animation: spVortex 2s infinite linear;
}

.loader:before {
  border-top: 0.375rem #000 solid;
  top: -0.1875rem;
  left: calc( -50% - 0.1875rem );
  transform-origin: right center;
}

.loader:after {
  border-bottom: 0.375rem #000 solid;
  top: 0.1875rem;
  right: calc( -50% - 0.1875rem );
  transform-origin: left center;
}

@keyframes spVortex {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}
```

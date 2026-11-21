# Shaggy Vampirebat 38

A loader UI element from Uiverse.io by coding-masala.

Source: https://uiverse.io/coding-masala/shaggy-vampirebat-38

Author: coding-masala

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #333

Fonts: See styles.css

Spacing and radius: 4px

## Source Code

### index.html

```html
<div class="loader">
  <div class="loader-bar"></div>
  <div class="loader-bar"></div>
  <div class="loader-bar"></div>
  <div class="loader-bar"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by coding-masala - Tags: loader */
.loader {
  display: flex;
  justify-content: center;
}

.loader-bar {
  width: 4px;
  height: 18px;
  margin: 0 8px;
  border-radius: 4px;
  animation: loading_3194 1s ease-in-out infinite;
  background-color: #333;
}

@keyframes loading_3194 {
  0% {
    transform: scale(1);
  }

  20% {
    transform: scaleY(3);
  }

  40% {
    transform: scale(1);
  }
}
```

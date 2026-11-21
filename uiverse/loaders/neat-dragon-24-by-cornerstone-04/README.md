# Neat Dragon 24

A loader UI element from Uiverse.io by Cornerstone-04.

Source: https://uiverse.io/Cornerstone-04/neat-dragon-24

Author: Cornerstone-04

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #43cec7

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader">
    <div></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Cornerstone-04 - Tags: loader */
.loader {
  width: 50px;
  height: 50px;
  border: 7px double;
  border-color: #43cec7 transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: spin13213 2s linear infinite;
}

.loader div {
  width: 50%;
  height: 50%;
  background-color: #43cec7;
  border-radius: 50%;
}

@keyframes spin13213 {
  to {
    transform: rotate(360deg);
  }
}
```

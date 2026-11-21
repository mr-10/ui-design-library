# Giant Shrimp 51

A loader UI element from Uiverse.io by Yaya12085.

Source: https://uiverse.io/Yaya12085/giant-shrimp-51

Author: Yaya12085

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, pulse

Colors: #69ffa8, #69ffa800

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Yaya12085 - Tags: loader, pulse */
.loader {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #69ffa8;
  animation: 1.5s pulse infinite ease-in-out;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 #69ffa8;
  }

  100% {
    box-shadow: 0 0 0 14px #69ffa800;
  }
}
```

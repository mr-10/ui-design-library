# Soft Eagle 25

A card UI element from Uiverse.io by Luciifer666.

Source: https://uiverse.io/Luciifer666/soft-eagle-25

Author: Luciifer666

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loading, card, one-div

Colors: #3468db, #e67e22

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="one-div"></div>
```

### styles.css

```css
/* From Uiverse.io by Luciifer666 - Tags: loading, card, one-div */
.one-div {
  width: 100px;
  height: 100px;
  margin: 100px auto;
  position: relative;
}

.one-div::before, .one-div::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 6px solid transparent;
}

.one-div::before {
  border-top-color: #3468db;
  animation: spin 1.5s infinite linear;
}

.one-div::after {
  border-top-color: #e67e22;
  animation: spin-reverse 1.5s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
```

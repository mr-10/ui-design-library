# Ugly Rattlesnake 41

A loader UI element from Uiverse.io by Cornerstone-04.

Source: https://uiverse.io/Cornerstone-04/ugly-rattlesnake-41

Author: Cornerstone-04

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #38ff8e, #ff086e, #ffbe0b

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Cornerstone-04 - Tags: loader */
.loader {
  width: 150px;
  height: 150px;
  border-left: 5px solid #38ff8e;
  border-radius: 50%;
  animation: right5231 0.9s linear infinite;
}

.loader::before,
  .loader::after {
  content: "";
  width: 120px;
  height: 120px;
  display: block;
  position: absolute;
  top: calc(50% - 60px);
  left: calc(50% - 60px);
  border-right: 5px solid #ffbe0b;
  border-radius: 50%;
  animation: left036 0.9s linear infinite;
}

.loader::after {
  width: 90px;
  height: 90px;
  top: calc(50% - 45px);
  left: calc(50% - 45px);
  border: 0;
  border-top: 5px solid #ff086e;
  animation: none;
}

@keyframes right5231 {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes left036 {
  from {
    transform: rotate(720deg);
  }

  to {
    transform: rotate(0deg);
  }
}
```

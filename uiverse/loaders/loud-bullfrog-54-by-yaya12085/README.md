# Loud Bullfrog 54

A loader UI element from Uiverse.io by Yaya12085.

Source: https://uiverse.io/Yaya12085/loud-bullfrog-54

Author: Yaya12085

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loading, loader, colorful

Colors: #35a2d2, #5a4ff3, #9c40fc

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="loader"></div>
```

### styles.css

```css
/* From Uiverse.io by Yaya12085 - Tags: loading, loader, colorful */
.loader ,.loader::before,.loader::after {
  border-width: 2px;
  border-style: solid;
  border-radius: 10px;
  animation: rotate 5s linear infinite;
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40px;
  height: 40px;
  border-color: #5a4ff3;
}

.loader::before,.loader::after {
  position: absolute;
  content: "";
}

.loader::before {
  border-color: #35a2d2;
  width: 110%;
  height: 110%;
  animation-delay: .5s
}

.loader::after {
  border-color: #9c40fc;
  width: 120%;
  height: 120%;
  animation-delay: .10s;
}

@keyframes rotate {
  to {
    transform: rotate(360deg)
  }
}
```

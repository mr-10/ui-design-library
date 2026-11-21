# Loud Lizard 23

A loader UI element from Uiverse.io by Alaner-xs.

Source: https://uiverse.io/Alaner-xs/loud-lizard-23

Author: Alaner-xs

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #147ec5, #1bbeff, #f3f3f3

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="shake">
<div class="loader"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Alaner-xs - Tags: loader */
.loader {
 --border-width: 10px;
 --size: 60px;
 border: var(--border-width) solid #f3f3f3;
 border-radius: 50%;
 border-top: var(--border-width) solid #1bbeff;
 border-bottom: var(--border-width) solid #1bbeff;
 border-left: var(--border-width) solid #147ec5;
 border-right: var(--border-width) solid #147ec5;
 width: var(--size);
 height: var(--size);
 animation: spin35112 2s linear infinite;
}

@keyframes spin35112 {
 0% {
  transform: rotate(0deg);
 }

 100% {
  transform: rotate(360deg);
 }
}

.shake {
 animation: shake61790 1s linear infinite;
}

@keyframes shake61790 {
 0% {
  transform: skewX(0deg);
 }

 50% {
  transform: skewX(20deg);
 }

 100% {
  transform: skewX(0deg);
 }
}
```

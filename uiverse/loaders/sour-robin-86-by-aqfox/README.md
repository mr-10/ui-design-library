# Sour Robin 86

A loader UI element from Uiverse.io by AqFox.

Source: https://uiverse.io/AqFox/sour-robin-86

Author: AqFox

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #004dff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="spinner">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by AqFox - Tags: loader */
.spinner {
 position: relative;
 width: 16px;
 height: 16px;
}

.spinner div {
 width: 100%;
 height: 100%;
 background-color: #004dff;
 border-radius: 50%;
 animation: spinner-4t3wzl 1.25s infinite backwards;
}

.spinner div:nth-child(1) {
 animation-delay: 0.15s;
 background-color: rgba(0,77,255,0.9);
}

.spinner div:nth-child(2) {
 animation-delay: 0.3s;
 background-color: rgba(0,77,255,0.8);
}

.spinner div:nth-child(3) {
 animation-delay: 0.45s;
 background-color: rgba(0,77,255,0.7);
}

.spinner div:nth-child(4) {
 animation-delay: 0.6s;
 background-color: rgba(0,77,255,0.6);
}

.spinner div:nth-child(5) {
 animation-delay: 0.75s;
 background-color: rgba(0,77,255,0.5);
}

@keyframes spinner-4t3wzl {
 0% {
  transform: rotate(0deg) translateY(-200%);
 }

 60%, 100% {
  transform: rotate(360deg) translateY(-200%);
 }
}
```

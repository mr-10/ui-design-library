# Orange Fox 63

A loader UI element from Uiverse.io by dvhoang2106.

Source: https://uiverse.io/dvhoang2106/orange-fox-63

Author: dvhoang2106

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #fff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="spinner">
<div></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by dvhoang2106 - Tags: loader */
.spinner {
 display: inline-block;
 transform: translateZ(1px);
}

.spinner > div {
 display: inline-block;
 width: 64px;
 height: 64px;
 margin: 8px;
 border-radius: 50%;
 background: #fff;
 animation: spinner8344 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

@keyframes spinner8344 {
 0%,
  100% {
  animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
 }

 0% {
  transform: rotateY(0deg);
 }

 50% {
  transform: rotateY(1800deg);
  animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
 }

 100% {
  transform: rotateY(3600deg);
 }
}
```

# Young Puma 4

A loader UI element from Uiverse.io by satyamchaudharydev.

Source: https://uiverse.io/satyamchaudharydev/young-puma-4

Author: satyamchaudharydev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #08c18a, #8bc34a24

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="spinner">
</div>
```

### styles.css

```css
/* From Uiverse.io by satyamchaudharydev - Tags: loader */
.spinner {
 --size-of-spinner: 50px;
 --spinner-border-width: 4px;
 --spinner-color: #08c18a;
 --circle-color: #8bc34a24;
 --speed-of-animation: 2s;
 --scale: 1.3;
 width: var(--size-of-spinner);
 height: var(--size-of-spinner);
 background: var(--circle-color);
 border-radius: 50%;
 position: relative;
}

.spinner::after {
 content: "";
 display: block;
 position: absolute;
 border-radius: 50%;
 inset: 0;
 border: var(--spinner-border-width) solid var(--spinner-color);
 border-left-color: transparent;
 border-right-color: transparent;
 animation: spinny var(--speed-of-animation) linear infinite;
}

@keyframes spinny {
 0% {
  transform: rotate(0deg) scale(1)
 }

 50% {
  transform: rotate(45deg) scale(var(--scale))
 }

 100% {
  transform: rotate(360deg) scale(1)
 }
}
```

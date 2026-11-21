# Spicy Warthog 11

A loader UI element from Uiverse.io by satyamchaudharydev.

Source: https://uiverse.io/satyamchaudharydev/spicy-warthog-11

Author: satyamchaudharydev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="spinner"></div>
```

### styles.css

```css
/* From Uiverse.io by satyamchaudharydev - Tags: loader */
.spinner {
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
 width: 100px;
 height: 100px;
}

.spinner::after {
 content: "";
 position: absolute;
 width: 50px;
 height: 50px;
 background-color: var(--blue);
 animation: flip 1s infinite;
}

@keyframes flip {
 0% {
  transform: rotate(0);
 }

 50% {
  transform: rotateY(180deg);
 }

 100% {
  transform: rotateY(180deg)  rotateX(180deg);
 }
}
```

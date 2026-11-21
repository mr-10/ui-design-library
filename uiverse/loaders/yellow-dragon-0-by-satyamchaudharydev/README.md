# Yellow Dragon 0

A loader UI element from Uiverse.io by satyamchaudharydev.

Source: https://uiverse.io/satyamchaudharydev/yellow-dragon-0

Author: satyamchaudharydev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #d62d20

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="spinner">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
```

### styles.css

```css
/* From Uiverse.io by satyamchaudharydev - Tags: loader */
.spinner {
 --gap: 5px;
 --clr: #d62d20;
 --height: 23px;
 width: 100px;
 height: 100px;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: var(--gap);
}

.spinner span {
 background: var(--clr);
 width: 6px;
 height: var(--height);
 animation: grow 1s ease-in-out infinite;
}

.spinner span:nth-child(2) {
 animation: grow 1s ease-in-out 0.15s infinite;
}

.spinner span:nth-child(3) {
 animation: grow 1s ease-in-out 0.3s infinite;
}

.spinner span:nth-child(4) {
 animation: grow 1s ease-in-out 0.475s infinite;
}

@keyframes grow {
 0%,100% {
  transform: scaleY(1);
 }

 50% {
  transform: scaleY(1.8);
 }
}
```

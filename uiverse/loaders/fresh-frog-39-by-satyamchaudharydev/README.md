# Fresh Frog 39

A loader UI element from Uiverse.io by satyamchaudharydev.

Source: https://uiverse.io/satyamchaudharydev/fresh-frog-39

Author: satyamchaudharydev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 100%

## Source Code

### index.html

```html
<div class="spinner">
  <span></span>
  <span></span>
  <span></span>
</div>
```

### styles.css

```css
/* From Uiverse.io by satyamchaudharydev - Tags: loader */
.spinner {
 --clr: rgb(0, 113, 128);
 --gap: 6px;
   /* gap between each circle */
 width: 100px;
 height: 100px;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: var(--gap);
}

.spinner span {
 width: 20px;
 height: 20px;
 border-radius: 100%;
 background-color: var(--clr);
 opacity: 0;
}

.spinner span:nth-child(1) {
 animation: fade 1s ease-in-out infinite;
}

.spinner span:nth-child(2) {
 animation: fade 1s ease-in-out 0.33s infinite;
}

.spinner span:nth-child(3) {
 animation: fade 1s ease-in-out 0.66s infinite;
}

@keyframes fade {
 0%, 100% {
  opacity: 1;
 }

 60% {
  opacity: 0;
 }
}
```

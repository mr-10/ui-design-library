# Little Skunk 97

A loader UI element from Uiverse.io by AqFox.

Source: https://uiverse.io/AqFox/little-skunk-97

Author: AqFox

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #0000, #004dff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="spinner"></div>
```

### styles.css

```css
/* From Uiverse.io by AqFox - Tags: loader */
.spinner {
 width: 56px;
 height: 56px;
 display: grid;
 border: 4px solid #0000;
 border-radius: 50%;
 border-right-color: #004dff;
 animation: spinner-a4dj62 1s infinite linear;
}

.spinner::before,
.spinner::after {
 content: "";
 grid-area: 1/1;
 margin: 2px;
 border: inherit;
 border-radius: 50%;
 animation: spinner-a4dj62 2s infinite;
}

.spinner::after {
 margin: 8px;
 animation-duration: 3s;
}

@keyframes spinner-a4dj62 {
 100% {
  transform: rotate(1turn);
 }
}
```

# Fluffy Mule 69

A loader UI element from Uiverse.io by Mike11jr.

Source: https://uiverse.io/Mike11jr/fluffy-mule-69

Author: Mike11jr

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="spinner">
<div class="dot"></div>
<div class="dot"></div>
<div class="dot"></div>
<div class="dot"></div>
<div class="dot"></div></div>
```

### styles.css

```css
/* From Uiverse.io by Mike11jr - Tags: loader */
.spinner {
 width: 60px;
 height: 60px;
 position: relative;
}

.spinner .dot {
 position: absolute;
 inset: 0;
 display: flex;
 justify-content: center;
}

.spinner .dot::after {
 content: "";
 width: 7px;
 height: 7px;
 border-radius: 50%;
 background-color: rgb(12, 180, 231);
}

@keyframes spin {
 to {
  transform: rotate(360deg);
 }
}

.spinner .dot {
 animation: spin 2s infinite;
}

.spinner .dot:nth-child(2) {
 animation-delay: 100ms;
}

.spinner .dot:nth-child(3) {
 animation-delay: 200ms;
}

.spinner .dot:nth-child(4) {
 animation-delay: 300ms;
}

.spinner .dot:nth-child(5) {
 animation-delay: 400ms;
}
```

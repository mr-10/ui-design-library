# Ancient Mule 46

A loader UI element from Uiverse.io by Mike11jr.

Source: https://uiverse.io/Mike11jr/ancient-mule-46

Author: Mike11jr

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #2495ff

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="spinner">
<div class="dot1"></div>
<div class="dot2"></div>
<div class="dot3"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Mike11jr - Tags: loader */
.spinner {
 flex-direction: row;
 display: flex;
 align-items: center;
 justify-content: center;
}

.dot1, .dot2, .dot3 {
 width: 15px;
 height: 15px;
 border: double;
 border-color: white;
 border-radius: 50%;
 margin: 10px;
}

.dot1 {
 animation: jump765 1.6s -0.32s linear infinite;
 background: #2495ff;
}

.dot2 {
 animation: jump765 1.6s -0.16s linear infinite;
 background: #2495ff;
}

.dot3 {
 animation: jump765 1.6s linear infinite;
 background: #2495ff;
}

@keyframes jump765 {
 0%, 80%, 100% {
  -webkit-transform: scale(0);
  transform: scale(0);
 }

 40% {
  -webkit-transform: scale(2.0);
  transform: scale(2.0);
 }
}
```

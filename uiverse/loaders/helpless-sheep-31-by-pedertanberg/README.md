# Helpless Sheep 31

A loader UI element from Uiverse.io by pedertanberg.

Source: https://uiverse.io/pedertanberg/helpless-sheep-31

Author: pedertanberg

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 50% 0 0 50%, 50% 50% 0 0

## Source Code

### index.html

```html
<div class="loader"><div></div></div>
```

### styles.css

```css
/* From Uiverse.io by pedertanberg - Tags: loader */
.loader {
 display: inline-block;
 position: relative;
 width: 80px;
 height: 80px;
 transform: rotate(45deg);
 transform-origin: 40px 40px;
}

.loader div {
 top: 32px;
 left: 32px;
 position: absolute;
 width: 32px;
 height: 32px;
 background: red;
 animation: loader45 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}

.loader div:after,
.loader div:before {
 content: " ";
 position: absolute;
 display: block;
 width: 32px;
 height: 32px;
 background: red;
}

.loader div:before {
 left: -24px;
 border-radius: 50% 0 0 50%;
}

.loader div:after {
 top: -24px;
 border-radius: 50% 50% 0 0;
}

@keyframes loader45 {
 0% {
  transform: scale(0.95);
 }

 5% {
  transform: scale(1.1);
 }

 39% {
  transform: scale(0.85);
 }

 45% {
  transform: scale(1);
 }

 60% {
  transform: scale(0.95);
 }

 100% {
  transform: scale(0.9);
 }
}
```

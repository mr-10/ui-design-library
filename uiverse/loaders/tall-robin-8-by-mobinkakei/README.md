# Tall Robin 8

A loader UI element from Uiverse.io by mobinkakei.

Source: https://uiverse.io/mobinkakei/tall-robin-8

Author: mobinkakei

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #a52a2a

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="loader-1">
<div class="dot"></div>
<div class="dot"></div>
<div class="dot"></div>
<div class="dot"></div>
<div class="dot"></div>
<div class="dot"></div>
<div class="dot"></div>
<div class="dot"></div>
<div class="dot"></div></div>
```

### styles.css

```css
/* From Uiverse.io by mobinkakei - Tags: loader */
.loader-1 {
 width: 7em;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 font-size: 13px;
}

.dot {
 width: 0.7em;
 height: 0.7em;
 border-radius: 50%;
 background-color: #a52a2a;
 margin: 0.4rem;
 opacity: 0.6;
 font-size: 15px;
}

.dot:nth-child(1) {
 animation: animateLoader1 1.5s infinite;
}

.dot:nth-child(2) {
 animation: animateLoader1 1.3s infinite;
}

.dot:nth-child(3) {
 animation: animateLoader1 1.7s infinite;
}

.dot:nth-child(4) {
 animation: animateLoader1 1.1s infinite;
}

.dot:nth-child(5) {
 animation: animateLoader1 0.9s infinite;
}

.dot:nth-child(6) {
 animation: animateLoader1 0.7s infinite;
}

.dot:nth-child(7) {
 animation: animateLoader1 0.5s infinite;
}

.dot:nth-child(8) {
 animation: animateLoader1 1.3s infinite;
}

.dot:nth-child(9) {
 animation: animateLoader1 1.5s infinite;
}

@keyframes animateLoader1 {
 0% {
  transform: scale(1);
 }

 50% {
  transform: scale(1.5);
  opacity: 1;
 }

 100% {
  transform: scale(1);
  opacity: 0.6;
 }
}
```

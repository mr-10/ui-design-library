# Ugly Bulldog 75

A loader UI element from Uiverse.io by satyamchaudharydev.

Source: https://uiverse.io/satyamchaudharydev/ugly-bulldog-75

Author: satyamchaudharydev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #2196f3, #49a84c, #4c86f9, #f6bb02

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
```

### styles.css

```css
/* From Uiverse.io by satyamchaudharydev - Tags: loader */
.loading {
 --speed-of-animation: 0.9s;
 --gap: 6px;
 --first-color: #4c86f9;
 --second-color: #49a84c;
 --third-color: #f6bb02;
 --fourth-color: #f6bb02;
 --fifth-color: #2196f3;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100px;
 gap: 6px;
 height: 100px;
}

.loading span {
 width: 4px;
 height: 50px;
 background: var(--first-color);
 animation: scale var(--speed-of-animation) ease-in-out infinite;
}

.loading span:nth-child(2) {
 background: var(--second-color);
 animation-delay: -0.8s;
}

.loading span:nth-child(3) {
 background: var(--third-color);
 animation-delay: -0.7s;
}

.loading span:nth-child(4) {
 background: var(--fourth-color);
 animation-delay: -0.6s;
}

.loading span:nth-child(5) {
 background: var(--fifth-color);
 animation-delay: -0.5s;
}

@keyframes scale {
 0%, 40%, 100% {
  transform: scaleY(0.05);
 }

 20% {
  transform: scaleY(1);
 }
}
```

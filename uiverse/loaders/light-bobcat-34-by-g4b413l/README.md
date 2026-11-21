# Light Bobcat 34

A loader UI element from Uiverse.io by G4b413l.

Source: https://uiverse.io/G4b413l/light-bobcat-34

Author: G4b413l

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="momentum"></div>
```

### styles.css

```css
/* From Uiverse.io by G4b413l - Tags: loader */
.momentum {
 --uib-size: 40px;
 --uib-speed: 1s;
 --uib-color: rgb(221, 255, 242);
 position: relative;
 display: flex;
 align-items: center;
 justify-content: center;
 height: var(--uib-size);
 width: var(--uib-size);
 animation: rotate01561 var(--uib-speed) linear infinite;
}

.momentum::before,
.momentum::after {
 content: '';
 height: 25%;
 width: 25%;
 border-radius: 50%;
 background-color: var(--uib-color);
}

.momentum::before {
 animation: wobble290123 calc(var(--uib-speed) * 1.25) ease-in-out infinite;
}

.momentum::after {
 animation: wobble9123 calc(var(--uib-speed) * 1.25) ease-in-out infinite;
}

.momentum::before {
 margin-right: 10%;
}

@keyframes wobble9123 {
 0%,
  100% {
  transform: translateX(0);
 }

 50% {
  transform: translateX(calc(var(--uib-size) * 0.2)) scale(1.1);
 }
}

@keyframes wobble290123 {
 0%,
  100% {
  transform: translateX(0);
 }

 50% {
  transform: translateX(calc(var(--uib-size) * -0.2)) scale(1.1);
 }
}

@keyframes rotate01561 {
 0% {
  transform: rotate(0deg);
 }

 100% {
  transform: rotate(360deg);
 }
}
```

# Slimy Otter 89

A loader UI element from Uiverse.io by G4b413l.

Source: https://uiverse.io/G4b413l/slimy-otter-89

Author: G4b413l

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: #3950cf

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="ping"></div>
```

### styles.css

```css
/* From Uiverse.io by G4b413l - Tags: loader */
.ping {
 --uib-size: 50px;
 --uib-speed: 1s;
 --uib-color: #3950cf;
 position: relative;
 height: var(--uib-size);
 width: var(--uib-size);
}

.ping::before,
.ping::after {
 content: '';
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 100%;
 border-radius: 50%;
 background-color: var(--uib-color);
 animation: pulse7132 var(--uib-speed) linear infinite;
 transform: scale(0);
 opacity: 0;
}

.ping::after {
 animation-delay: calc(var(--uib-speed) / -2);
}

@keyframes pulse7132 {
 0% {
  transform: scale(0);
  opacity: 1;
 }

 100% {
  transform: scale(1);
  opacity: 0;
 }
}
```

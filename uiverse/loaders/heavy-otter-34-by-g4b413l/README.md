# Heavy Otter 34

A loader UI element from Uiverse.io by G4b413l.

Source: https://uiverse.io/G4b413l/heavy-otter-34

Author: G4b413l

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="pulsar"></div>
```

### styles.css

```css
/* From Uiverse.io by G4b413l - Tags: loader */
.pulsar {
  --uib-size: 40px;
  --uib-speed: 0.9s;
  --uib-color: white;
  position: relative;
  height: var(--uib-size);
  width: var(--uib-size);
}

.pulsar::before,
.pulsar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: var(--uib-color);
  animation: pulse9173412 var(--uib-speed) ease-in-out infinite;
  transform: scale(0);
}

.pulsar::after {
  animation-delay: calc(var(--uib-speed) / -2);
}

@keyframes pulse9173412 {
  0%,
  100% {
    transform: scale(0);
    opacity: 1;
  }

  50% {
    transform: scale(1);
    opacity: 0.25;
  }
}
```

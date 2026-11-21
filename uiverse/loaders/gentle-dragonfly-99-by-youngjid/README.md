# Gentle Dragonfly 99

A loader UI element from Uiverse.io by youngjid.

Source: https://uiverse.io/youngjid/gentle-dragonfly-99

Author: youngjid

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader, dark, glitch, text animation, css effect, glitch Effect

Colors: #00ffff, #ff00ff, #ffffff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="glitch" data-text="Loading ...">Loading ...</div>
```

### styles.css

```css
/* From Uiverse.io by youngjid  - Tags: loader, dark, glitch, text animation, css effect, glitch Effect */
.glitch {
  position: relative;
  font-size: 60px;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 3px;
  z-index: 1;
}

.glitch:before,
.glitch:after {
  display: block;
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}

.glitch:before {
  animation: glitch-it 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  color: #00ffff;
  z-index: -1;
}

.glitch:after {
  animation: glitch-it 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
    infinite;
  color: #ff00ff;
  z-index: -2;
}

@keyframes glitch-it {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  to {
    transform: translate(0);
  }
}
```

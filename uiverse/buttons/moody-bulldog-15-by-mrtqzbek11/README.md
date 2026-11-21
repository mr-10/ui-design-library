# Moody Bulldog 15

A button UI element from Uiverse.io by mrtqzbek11.

Source: https://uiverse.io/mrtqzbek11/moody-bulldog-15

Author: mrtqzbek11

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, button, active, neon

Colors: #100720, #fff

Fonts: See styles.css

Spacing and radius: 1rem

## Source Code

### index.html

```html
<button>
  Hold that
</button>
```

### styles.css

```css
/* From Uiverse.io by mrtqzbek11 - Tags: gradient, button, active, neon */
button {
  width: 165px;
  height: 62px;
  cursor: pointer;
  color: #fff;
  font-size: 17px;
  border-radius: 1rem;
  border: none;
  position: relative;
  background: #100720;
  transition: 0.1s;
}

button::after {
  content: '';
  width: 100%;
  height: 100%;
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% );
  filter: blur(15px);
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
}

button:active {
  transform: scale(0.9) rotate(3deg);
  background: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% );
  transition: 0.5s;
}
```

# Tender Sheep 90

A button UI element from Uiverse.io by itay1313.

Source: https://uiverse.io/itay1313/tender-sheep-90

Author: itay1313

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #3a3544, #d0bcff

Fonts: See styles.css

Spacing and radius: 4vmin, var(--border-radius)

## Source Code

### index.html

```html
<button class="box">
    <span class="button">How Are you today?</span>
  </button>
```

### styles.css

```css
/* From Uiverse.io by itay1313 - Tags: button */
.box {
  --border-radius: 4vmin;
  --bg: #3A3544;
  --color: #D0BCFF;
  --deg: 30deg;
  -webkit-perspective: 200px;
  perspective: 200px;
  -webkit-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
  max-width: 350px;
  text-align: center;
  outline: none;
  border: none;
  background: none;
}

.button {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: rotateY(var(--deg));
  transform: rotateY(var(--deg));
  -webkit-transition: all 800ms ease-in-out;
  transition: all 800ms ease-in-out;
  border-radius: var(--border-radius);
  font-style: normal;
  border: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 2vmin;
  letter-spacing: 0.03vmin;
  padding: 1.3vmin 2.5vmin;
  background: var(--bg);
  color: var(--color);
}

.button:hover {
  -webkit-transform: rotateY(calc(-1 * var(--deg)));
  transform: rotateY(calc(-1 * var(--deg)));
}

.box:active .button {
  -webkit-transform: rotateY(calc(-1 * var(--deg) / 3));
  transform: rotateY(calc(-1 * var(--deg) / 3));
}

.box:focus .button {
  border: 0.05vmin solid var(--color);
}
```

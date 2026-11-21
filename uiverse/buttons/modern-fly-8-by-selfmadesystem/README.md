# Modern Fly 8

A button UI element from Uiverse.io by SelfMadeSystem.

Source: https://uiverse.io/SelfMadeSystem/modern-fly-8

Author: SelfMadeSystem

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, ripple, animated

Colors: #0007

Fonts: See styles.css

Spacing and radius: 0.5em, 0.8em, 999em

## Source Code

### index.html

```html
<button class="btn">
  <span>Border ripple</span>
  <div class="ripple-container">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>

    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>

    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>

    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>

    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>

    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</button>
```

### styles.css

```css
/* From Uiverse.io by SelfMadeSystem - Tags: button, ripple, animated */
.btn {
  font-size: larger;
  height: 3em;
  width: 8em;
  position: relative;
  border: none;
  isolation: isolate;
}

.btn > span {
  position: absolute;
  border-radius: 0.5em;
  pointer-events: none;
  inset: 0;
  background-color: hsl(218, 68%, 52%);
  color: white;
  box-shadow: 1px 2px 4px #0007;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ripple-container {
  position: absolute;
  inset: -0.3em;
  display: grid;
  grid-template-columns: repeat(16, 0.5em);
  border-radius: 0.8em;
  padding: 0.3em;
  overflow: hidden;
}

.ripple-container > span {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ripple-container > span::after {
  content: "";
  pointer-events: none;
  position: absolute;
  background-color: hsl(218, 68%, 65%);
  transition: width 0.5s ease-out, height 0.5s ease-out, opacity 1s;
  width: 18em;
  height: 18em;
  opacity: 0;
  border-radius: 999em;
}

.ripple-container > span:active::after {
  transition: 0s;
  width: 0em;
  height: 0em;
  opacity: 1;
}

.ripple-container::before {
  content: "";
  pointer-events: none;
  position: absolute;
  background-color: hsla(218, 68%, 65%, 0.5);
  width: 13em;
  height: 13em;
  border-radius: 999em;
  transition: transform 0.25s ease-out;
  transform: translate(-25%, -25%) scale(0);
}

.ripple-container:hover::before {
  transform: translate(-25%, -25%) scale(1);
}
```

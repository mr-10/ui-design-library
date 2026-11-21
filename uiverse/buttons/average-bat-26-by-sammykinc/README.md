# Average Bat 26

A button UI element from Uiverse.io by sammykINC.

Source: https://uiverse.io/sammykINC/average-bat-26

Author: sammykINC

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, menu, animated, settings

Colors: #fff

Fonts: See styles.css

Spacing and radius: 50%, inherit

## Source Code

### index.html

```html
<button class="button">
  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,72a12,12,0,1,0-12-12A12,12,0,0,0,128,72Zm0,112a12,12,0,1,0,12,12A12,12,0,0,0,128,184Z"></path></svg>
</button>
```

### styles.css

```css
/* From Uiverse.io by sammykINC - Tags: button, menu, animated, settings */
/* works only on a dark background with these paremeters*/

.button {
  border-radius: 50%;
  border: none;
  display: flex;
  place-items: center;
  background-color: transparent;
  cursor: pointer;
}

.button > svg {
  border-radius: inherit;
  padding: 0.5rem;
  fill: #fff;
 /* SVG color */
  width: 38px;
 /* default width 32px */
  height: 38px;
 /* default height 32px */
}

.button > svg:active {
  background-color: rgba(65, 65, 65, 0.5);
}

.button > svg:not(:active) {
  animation: fadeOut 0.9s;
}

@keyframes fadeOut {
  0% {
    outline: 1px solid rgba(90, 90, 90, 0.5);
 /* If you use border it will take space inside and slightly move the SVG */
  }

  100% {
    background-color: transparent;
  }
}
```

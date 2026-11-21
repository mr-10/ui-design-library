# Popular Cobra 99

A button UI element from Uiverse.io by Dashrath-Sharma.

Source: https://uiverse.io/Dashrath-Sharma/popular-cobra-99

Author: Dashrath-Sharma

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, active, neon, futuristic, animated, border, advanced, transparent

Colors: #c77dff, #e0aaff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button class="button">
  Button
  <span></span>
  <span></span>
</button>
```

### styles.css

```css
/* From Uiverse.io by Dashrath-Sharma  - Tags: button, active, neon, futuristic, animated, border, advanced, transparent */
.button {
  position: relative;
  font-size: 17px;
  font-weight: 800;
  color: #c77dff;
  padding: 1em 2em;
  border: none;
  background: none;
  clip-path: polygon(0 0, 67% 0, 100% 100%, 33% 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.3s 0.3s;
}

button:hover {
  text-shadow: 1px 1px 20px #e0aaff, 1px 1px 60px #e0aaff;
}

button:active {
  transform: scale(0.89);
}

.button::before,
.button::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background: #c77dff;
  transition: width 0.3s 0.6s;
}

.button::before {
  top: 0;
  left: 0;
  transform-origin: top;
}

.button::after {
  bottom: 0;
  right: 0;
  transform-origin: bottom;
}

.button:hover::before,
.button:hover::after {
  width: 65%;
}

.button span {
  position: absolute;
  width: 0;
  height: 2px;
  background: #c77dff;
  transition: width 0.3s, transform 0.3s 0.3s;
  transform: rotate(22.3deg);
}

.button span:nth-child(1) {
  top: 0;
  left: 0;
  transform-origin: left;
}

.button span:nth-child(2) {
  bottom: 0;
  right: 0;
  transform-origin: right;
}

.button:hover span {
  width: 55%;
  transform: rotate(50deg);
}
```

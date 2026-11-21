# Weak Firefox 5

A button UI element from Uiverse.io by cssbuttons-io.

Source: https://uiverse.io/cssbuttons-io/weak-firefox-5

Author: cssbuttons-io

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, ripple

Colors: #1f2937

Fonts: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace

Spacing and radius: 0.6em, 9999px

## Source Code

### index.html

```html
<button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Button</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by cssbuttons-io - Tags: button, ripple */
button {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 17px;
  padding: 1em 2.7em;
  font-weight: 500;
  background: #1F2937;
  color: white;
  border: none;
  position: relative;
  overflow: hidden;
  border-radius: 0.6em;
}

.gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 0.6em;
  margin-top: -0.25em;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
}

.label {
  position: relative;
  top: -1px;
}

.transition {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 500ms;
  background-color: rgba(16, 185, 129, 0.6);
  border-radius: 9999px;
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

button:hover .transition {
  width: 14em;
  height: 14em;
}

button:active {
  transform: scale(0.97);
}
```

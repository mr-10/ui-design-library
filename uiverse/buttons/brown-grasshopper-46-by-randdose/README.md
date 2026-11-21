# Brown Grasshopper 46

A button UI element from Uiverse.io by Randdose.

Source: https://uiverse.io/Randdose/brown-grasshopper-46

Author: Randdose

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, transition, transform

Colors: #212121

Fonts: See styles.css

Spacing and radius: 0.25em, 50%

## Source Code

### index.html

```html
<button class="button">
  <p>Button</p>
</button>
```

### styles.css

```css
/* From Uiverse.io by Randdose - Tags: button, transition, transform */
.button {
  all: unset;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.6em 2em;
  border: mediumspringgreen solid 0.15em;
  border-radius: 0.25em;
  color: mediumspringgreen;
  font-size: 1.5em;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: border 300ms, color 300ms;
  user-select: none;
}

.button p {
  z-index: 1;
}

.button:hover {
  color: #212121;
}

.button:active {
  border-color: teal;
}

.button::after, .button::before {
  content: "";
  position: absolute;
  width: 9em;
  aspect-ratio: 1;
  background: mediumspringgreen;
  opacity: 50%;
  border-radius: 50%;
  transition: transform 500ms, background 300ms;
}

.button::before {
  left: 0;
  transform: translateX(-8em);
}

.button::after {
  right: 0;
  transform: translateX(8em);
}

.button:hover:before {
  transform: translateX(-1em);
}

.button:hover:after {
  transform: translateX(1em);
}

.button:active:before,
.button:active:after {
  background: teal;
}
```

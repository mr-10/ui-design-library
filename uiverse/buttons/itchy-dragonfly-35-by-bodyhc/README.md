# Itchy Dragonfly 35

A button UI element from Uiverse.io by Bodyhc.

Source: https://uiverse.io/Bodyhc/itchy-dragonfly-35

Author: Bodyhc

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, bootsrap button, business, 3d button

Colors: #3a0ca3, #560bad, #fff

Fonts: inherit

Spacing and radius: 50px, 6px

## Source Code

### index.html

```html
<button class="button">
  CLICK ME
</button>
```

### styles.css

```css
/* From Uiverse.io by Bodyhc - Tags: button, bootsrap button, business, 3d button */
button {
  --color: #560bad;
  background-color: #fff;
  font-family: inherit;
  display: inline-block;
  width: 8em;
  height: 2.6em;
  line-height: 2.5em;
  margin: 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid var(--color);
  transition: color .5s;
  z-index: 1;
  font-size: 17px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  color: var(--color);
}

button:before {
  content: "";
  position: absolute;
  z-index: -1;
  background: var(--color);
  height: 150px;
  width: 200px;
  border-radius: 50px;
  bottom: 100%;
  right: 100%;
  transition: .8s ease;
}

button:hover {
  color: #fff;
}

button:hover:before {
  bottom: -30px;
  left: -30px;
}

button:active:before {
  background: #3a0ca3;
  transition: background 2s;
}
```

# New Robin 92

A tooltip UI element from Uiverse.io by nabilbdt.

Source: https://uiverse.io/nabilbdt/new-robin-92

Author: nabilbdt

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, tooltip, action, alert, green, creative

Colors: #003b12, #00641e, #28282817, #ebebeb

Fonts: See styles.css

Spacing and radius: 0.8em, 5px

## Source Code

### index.html

```html
<div class="Tooltip">
  Tooltip
  <div class="Tip">Uiverse.io</div>
</div>
```

### styles.css

```css
/* From Uiverse.io by nabilbdt  - Tags: simple, tooltip, action, alert, green, creative */
.Tooltip {
  color: #ebebeb;
  border-radius: 0.8em;
  padding: 1em 4em;
  position: relative;
  display: inline-block;
  cursor: pointer;
  background-color: #00641e;
  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;
}
.Tooltip .Tip {
  color: #003b12;
  text-align: center;
  border-radius: 5px;
  visibility: hidden;
  width: 100px;
  left: 100%;
  transform: translateX(-50%);
  opacity: 0;
  background-color: #28282817;
  padding: 10px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  transition: opacity 0.3s;
}
.Tooltip:hover .Tip {
  opacity: 1;
  visibility: visible;
}
.Tooltip:hover {
  background-color: rgb(100, 100, 100);
}
.Tooltip .Tip::after {
  left: 10%;
  border-width: 8px;
  border-style: solid;
  content: "";
  position: absolute;
  top: 100%;
  border-color: #28282817 transparent transparent transparent;
}
```

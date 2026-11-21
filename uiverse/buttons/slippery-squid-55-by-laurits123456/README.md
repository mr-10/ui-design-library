# Slippery Squid 55

A button UI element from Uiverse.io by Laurits123456.

Source: https://uiverse.io/Laurits123456/slippery-squid-55

Author: Laurits123456

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hamburger, menu, menuicon, 3d button, cool hamburger

Colors: #000000, #090909, #171717, #3a3a3a, #495057, #666

Fonts: See styles.css

Spacing and radius: 0.5em, 100px

## Source Code

### index.html

```html
<label class="menuButton" for="check">
    <input type="checkbox" id="check">
    <span class="top"></span>
    <span class="mid"></span>
    <span class="bot"></span>
</label>
```

### styles.css

```css
/* From Uiverse.io by Laurits123456 - Tags: button, hamburger, menu, menuicon, 3d button, cool hamburger */
/*pushing a hamburger menu into a pillow texture like background*/

.menuButton {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 13%;
  color: #090909;
  width: 3.5em;
  height: 3.5em;
  border-radius: 0.5em;
  background: #171717;
  border: 1px solid #171717;
  transition: all .3s;
  box-shadow: inset 4px 4px 12px #3a3a3a,
             inset -4px -4px 12px #000000;
}

.menuButton:hover {
  border: 1px solid black;
}

.menuButton:active {
  color: #666;
  box-shadow: 6px 6px 12px #3a3a3a,
             -6px -6px 12px #000000;
}

input[type = "checkbox"] {
  -webkit-appearance: none;
  display: none;
  visibility: hidden;
}

.menuButton span {
  width: 30px;
  height: 4px;
  background: rgb(200,200,200);
  border-radius: 100px;
  transition: 0.3s ease;
}

input[type]:checked ~ span.top {
  transform: translateY(290%)rotate(45deg);
  width: 40px;
}

input[type]:checked ~ span.bot {
  transform: translateY(-270%) rotate(-45deg);
  width: 40px;
  box-shadow: 0 0 10px #495057;
}

input[type]:checked ~ span.mid {
  transform: translateX(-20px);
  opacity: 0;
}
```

# Moody Dragonfly 90

A button UI element from Uiverse.io by gksckt.

Source: https://uiverse.io/gksckt/moody-dragonfly-90

Author: gksckt

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #000, #06d6a0, #073b4c, #118ab2, #ef476f, #ffd166, #fff

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<button class="btn">Hover Me</button>
```

### styles.css

```css
/* From Uiverse.io by gksckt - Tags: button */
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  width: 170px;
  height: 60px;
  font-size: 18px;
  background: #fff;
  border: none;
  border-radius: 50px;
  color: #000;
  outline: none;
  cursor: pointer;
  transition: all 0.4s;
}

.btn:hover {
  box-shadow: inset 0 0 0 4px #ef476f, 
              inset 0 0 0 8px #ffd166, 
              inset 0 0 0 12px #06d6a0,
              inset 0 0 0 16px #118ab2;
  background: #073b4c;
  color: #fff;
}
```

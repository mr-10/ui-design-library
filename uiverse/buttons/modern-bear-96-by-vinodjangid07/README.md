# Modern Bear 96

A button UI element from Uiverse.io by vinodjangid07.

Source: https://uiverse.io/vinodjangid07/modern-bear-96

Author: vinodjangid07

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, button, hover effect

Colors: #ff2525, #ffe53b

Fonts: See styles.css

Spacing and radius: 5px, 7px

## Source Code

### index.html

```html
<button class="Btn">
  <p class="text">Button</p>
  <span class="BG"></span>
</button>
```

### styles.css

```css
/* From Uiverse.io by vinodjangid07 - Tags: gradient, button, hover effect */
.Btn {
  position: relative;
  background-color: transparent;
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  transition: all .3s;
}

.text {
  width: 100%;
  height: 100%;
  background-color: rgba(230, 230, 230, 0.466);
  border: none;
  border-radius: 7px;
  backdrop-filter: blur(5px);
  color: rgb(26, 26, 26);
  display: flex;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.8px;
}

.BG {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-image: linear-gradient(147deg, #FFE53B, #FF2525);
  z-index: -1;
  left: 6px;
  top: 6px;
  border-radius: 7px;
  pointer-events: none;
  transition: all .3s;
}

.Btn:hover {
  transform: translateY(-2px);
}

.Btn:hover .BG {
  transform: translateY(-1px);
}
```

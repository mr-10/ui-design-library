# New Dog 56

A button UI element from Uiverse.io by ArturCodeCraft.

Source: https://uiverse.io/ArturCodeCraft/new-dog-56

Author: ArturCodeCraft

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover, btn, hover effect, hoverme, hover button, diia, Primary button

Colors: #000, #4b8bfa, #80c0c8, #9ec, #c3aab2, #fff

Fonts: inherit

Spacing and radius: 40px

## Source Code

### index.html

```html
<button class="primary-button">
  Primary button
</button>
```

### styles.css

```css
/* From Uiverse.io by ArturCodeCraft - Tags: button, hover, btn, hover effect, hoverme, hover button, diia, Primary button */
/* <reset-style> ============================ */
button {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: inherit;
}
/* <main-style> ============================ */
.primary-button {
  min-width: 111px;
  height: 56px;
  border-radius: 40px;
  background: #000;
  padding: 16px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.32px;
  transition: background .2s ease-in-out, color .2s ease-in-out;
  position: relative;
}

.primary-button::before {
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 40px;
  background: linear-gradient(69deg, #c3aab2 -4.77%, #9ec 46.72%, #80c0c8 90.23%, #4B8bfa 134.46%);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
  transition: opacity .2s ease-in-out;
}

.primary-button:hover {
  background: transparent;
  color: #000;
}

.primary-button:hover::before {
  opacity: 1;
}
```

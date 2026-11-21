# Weak Moose 10

A button UI element from Uiverse.io by RenouxM.

Source: https://uiverse.io/RenouxM/weak-moose-10

Author: RenouxM

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, 3d, button

Colors: See styles.css

Fonts: arial

Spacing and radius: 12px

## Source Code

### index.html

```html
<button class="button">
  <span class="front"> ⚡Join Now </span>
</button>
```

### styles.css

```css
/* From Uiverse.io by RenouxM  - Tags: simple, 3d, button */
.button {
  box-sizing: border-box;
  cursor: pointer;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  background-color: rgb(245, 134, 161);
  font-family: arial;
  font-size: 20px;
  font-weight: bold;
  border: none;
  width: 280px;
  height: 90px;
  border-radius: 12px;
}
.front {
  display: block;
  padding: 28px 80px;
  border-radius: 12px;
  font-size: 1.25rem;
  background: rgb(245, 74, 117);
  transform: translateY(-4px);
}
.button:focus:not(:focus-visible) {
  outline: none;
}
```

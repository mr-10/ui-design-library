# Horrible Snake 61

A card UI element from Uiverse.io by lonefox-xxx.

Source: https://uiverse.io/lonefox-xxx/horrible-snake-61

Author: lonefox-xxx

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #212121, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="card">
  Click me
</div>
```

### styles.css

```css
/* From Uiverse.io by lonefox-xxx - Tags: card */
.card {
  width: 210px;
  height: 235px;
  background: #212121;
  box-shadow: rgba(0, 0, 0, 0.4) 10px 20px 30px, rgba(0, 0, 0, 0.3) 10px 1px 53px 3px, rgba(1, 0, 0, 0.2) 0px -1px 3px inset;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: #fff;
}

.card:hover {
  transform: scale(1.021);
}

.card:active {
  transform: scale(0.95) rotateZ(1.1deg);
}
```

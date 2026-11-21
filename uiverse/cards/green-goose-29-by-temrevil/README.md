# Green Goose 29

A card UI element from Uiverse.io by TemRevil.

Source: https://uiverse.io/TemRevil/green-goose-29

Author: TemRevil

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, animation, action, card

Colors: #023047, #fb8500

Fonts: See styles.css

Spacing and radius: 10px, 50%

## Source Code

### index.html

```html
<div class="card"><p>Card</p></div>
```

### styles.css

```css
/* From Uiverse.io by TemRevil  - Tags: simple, animation, action, card */
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 254px;
  background: #023047;
  color: white;
  font-size: 32px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.1s 0s linear;
  position: relative;
  overflow: hidden;
}
.card:active {
  scale: 0.95;
}
.card::after {
  content: "";
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: #fb8500;
  position: absolute;
  right: 250px;
  transition: right 0.4s 0s linear;
  z-index: 1;
}
.card:hover::after {
  right: -160px;
}
.card:hover {
  color: #023047;
}
.card p {
  position: absolute;
  z-index: 10;
}
```

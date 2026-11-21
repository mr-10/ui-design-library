# Perfect Rattlesnake 29

A card UI element from Uiverse.io by Cornerstone-04.

Source: https://uiverse.io/Cornerstone-04/perfect-rattlesnake-29

Author: Cornerstone-04

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #000, #fff, #ffffff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="card">Hover me</div>
```

### styles.css

```css
/* From Uiverse.io by Cornerstone-04 - Tags: card */
.card {
  width: 160px;
  height: 200px;
  background: #ffffff;
  transform: rotate(20deg) skew(-10deg, -5deg);
  transition: .4s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 200px;
}

.card:hover {
  box-shadow: rgba(0,0,0,0.5) 5px 3px,
  rgba(0,0,0,0.4) 10px 6px,
  rgba(0,0,0,0.3) 15px 9px;
  background: #000;
  color: #fff;
  font-size: 1.5rem;
}
```

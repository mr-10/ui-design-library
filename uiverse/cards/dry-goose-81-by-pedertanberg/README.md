# Dry Goose 81

A card UI element from Uiverse.io by pedertanberg.

Source: https://uiverse.io/pedertanberg/dry-goose-81

Author: pedertanberg

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #ffffff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="card">Good morning</div>
```

### styles.css

```css
/* From Uiverse.io by pedertanberg - Tags: card */
.card {
 width: 150px;
 height: 200px;
 background: #ffffff;
 transform: rotate(20deg) skew(-10deg, -5deg);
 transition: box_shadow .25s ease-in;
 display: flex;
 justify-content: center;
 text-align: center;
 font-size: 20px;
 line-height: 200px;
}

.card:hover {
 box-shadow: rgba(255,255,255,0.5) 5px 3px,
  rgba(255,255,255,0.4) 10px 6px,
  rgba(255,255,255,0.3) 15px 9px;
}
```

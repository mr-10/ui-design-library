# Ancient Pug 90

A card UI element from Uiverse.io by Toseef-Ahmad.

Source: https://uiverse.io/Toseef-Ahmad/ancient-pug-90

Author: Toseef-Ahmad

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #8a4d0f, #fffef0

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="card">
  <p>Write here</p>
</div>
<svg class="filter">
  <filter id="wavy2">
    <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1"></feTurbulence>
    <feDisplacementMap in="SourceGraphic" scale="20"></feDisplacementMap>
  </filter>
</svg>
```

### styles.css

```css
/* From Uiverse.io by Toseef-Ahmad - Tags: card */
.card {
  width: 190px;
  height: 254px;
  display: flex;
  padding: 2em;
  box-shadow: 2px 3px 20px black, 0 0 60px #8a4d0f inset;
  background: #fffef0;
  filter: url(#wavy2);
}

.card p {
  color: black;
  font-size: 3rem;
  align-items: center;
}

.filter {
  display: none;
  position: absolute;
}
```

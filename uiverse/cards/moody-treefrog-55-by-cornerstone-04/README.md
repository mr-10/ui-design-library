# Moody Treefrog 55

A card UI element from Uiverse.io by Cornerstone-04.

Source: https://uiverse.io/Cornerstone-04/moody-treefrog-55

Author: Cornerstone-04

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #000, #16161d, #555555, #fff

Fonts: See styles.css

Spacing and radius: 4px

## Source Code

### index.html

```html
<div class="cards">
    <figure class="card">
        <figcaption class="card_title">3D Hover</figcaption>
    </figure>
</div>
```

### styles.css

```css
/* From Uiverse.io by Cornerstone-04 - Tags: card */
.cards {
  perspective: 500px;
}

.card {
  width: 200px;
  height: 250px;
  background: #16161d;
  border: 2px solid #555555;
  border-radius: 4px;
  position: relative;
  transform-style: preserve-3d;
  will-change: transform;
  transition: transform .5s;
}

.card:hover {
  transform: translateZ(10px) rotateX(20deg) rotateY(20deg);
}

.card_title {
  color: #fff;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  transition: transform .5s;
  font: 700 1.5rem monospace;
  text-shadow: -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
}

.card:hover .card_title {
  transform: translateZ(50px);
}
```

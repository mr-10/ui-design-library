# Cuddly Catfish 6

A card UI element from Uiverse.io by Tiagoadag.

Source: https://uiverse.io/Tiagoadag/cuddly-catfish-6

Author: Tiagoadag

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #00ff75, #1a1a1a, #3700ff

Fonts: See styles.css

Spacing and radius: 20px

## Source Code

### index.html

```html
<div class="card">
  <div class="card2">
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by Tiagoadag - Tags: card */
.card {
 width: 190px;
 height: 254px;
 background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
 border-radius: 20px;
 transition: all .3s;
}

.card2 {
 width: 190px;
 height: 254px;
 background-color: #1a1a1a;
 border-radius:;
 transition: all .2s;
}

.card2:hover {
 transform: scale(0.98);
 border-radius: 20px;
}

.card:hover {
 box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}
```

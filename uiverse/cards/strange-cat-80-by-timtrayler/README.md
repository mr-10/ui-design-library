# Strange Cat 80

A card UI element from Uiverse.io by TimTrayler.

Source: https://uiverse.io/TimTrayler/strange-cat-80

Author: TimTrayler

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #191919, #212121, #292929

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="card"></div>
```

### styles.css

```css
/* From Uiverse.io by TimTrayler - Tags: card */
.card {
 width: 200px;
 height: 260px;
 background-color: #212121;
 box-shadow: 15px 15px 30px #191919,
              -15px -15px 30px #292929;
 transition: border-radius cubic-bezier(0.075, 0.82, 0.165, 1) 1s,
              transform cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
}

.card:hover {
 border-bottom-right-radius: 50px;
 border-top-left-radius: 50px;
 transform: scale(1.05);
}
```

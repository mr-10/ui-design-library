# Cold Cat 38

A card UI element from Uiverse.io by alexruix.

Source: https://uiverse.io/alexruix/cold-cat-38

Author: alexruix

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #1fc11b, #555bff, #f5f5f5, #ff5555, #ff9c55, #ffd913

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="card">
</div>
```

### styles.css

```css
/* From Uiverse.io by alexruix - Tags: card */
/*Rainbow card*/
.card {
 --background: #f5f5f5;
 --green: #1FC11B;
 --yellow: #FFD913;
 --orange: #FF9C55;
 --red: #FF5555;
 --violet: #555BFF;
 width: 190px;
 height: 254px;
 display: flex;
 flex-direction: column;
 gap: 1em;
 background: var(--background);
 padding: 1rem;
 border: 3px solid var(--violet);
 box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--green),
        20px -20px 0 -3px var(--background), 20px -20px var(--yellow), 
        30px -30px 0 -3px var(--background), 30px -30px var(--orange), 
        40px -40px 0 -3px var(--background), 40px -40px var(--red);
 transition: box-shadow 1s, top 1s, left 1s;
}


/*Hover*/
.card:hover {
 box-shadow: 0 0 0 -3px var(--background), 0 0 0 0 var(--green),
      0 0 0 -3px var(--background), 0 0 0 0  var(--yellow),
      0 0 0 -3px var(--background), 0 0 0 0  var(--orange),
      0 0 0 -3px  var(--background), 0 0 0 0  var(--red);
}
```

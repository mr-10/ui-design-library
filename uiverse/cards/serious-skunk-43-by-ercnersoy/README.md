# Serious Skunk 43

A card UI element from Uiverse.io by ercnersoy.

Source: https://uiverse.io/ercnersoy/serious-skunk-43

Author: ercnersoy

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #8a8989, #c5c5c5, #e8e8e8, #ffffff

Fonts: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif

Spacing and radius: 1.5rem

## Source Code

### index.html

```html
<div class="card">My Card</div>
```

### styles.css

```css
/* From Uiverse.io by ercnersoy - Tags: card */
.card {
  width: 190px;
  height: 254px;
  background: lightgrey;
  border: 3px inset white;
  background: #e8e8e8;
  box-shadow: inset 20px 20px 60px #c5c5c5, inset -20px -20px 60px #ffffff;
  transition: all .5s ease-in-out;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  color: #8a8989;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.card:hover {
  transform: translateY(-5px);
  transition: all .5s ease-in-out;
}
```

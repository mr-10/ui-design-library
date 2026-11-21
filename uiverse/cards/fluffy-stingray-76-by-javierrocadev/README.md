# Fluffy Stingray 76

A card UI element from Uiverse.io by Javierrocadev.

Source: https://uiverse.io/Javierrocadev/fluffy-stingray-76

Author: Javierrocadev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card, box-shadow

Colors: #a53c3c, #bf5e37, #d08432

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<div class="card">
  <span class="text">Go!</span>
</div>
```

### styles.css

```css
/* From Uiverse.io by Javierrocadev - Tags: card, box-shadow */
.card {
  width: 150px;
  height: 150px;
  background: #a53c3c;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 3em;
  font-weight: 900;
  color: aliceblue;
  transition: all .5s ease-in-out;
}

.text {
  transition: all 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 75px 75px 5px -20px #bf5e37, -75px 75px 5px -20px #d08432, -75px -75px 5px -20px #bf5e37 , 75px -75px 5px -20px #d08432;
  transform: rotate(-45deg);
}

.card:hover .text {
  transform: rotate(45deg);
}
```

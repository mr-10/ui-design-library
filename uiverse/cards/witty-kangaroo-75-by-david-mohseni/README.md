# Witty Kangaroo 75

A card UI element from Uiverse.io by david-mohseni.

Source: https://uiverse.io/david-mohseni/witty-kangaroo-75

Author: david-mohseni

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #a82c2c, #dbbdbd

Fonts: See styles.css

Spacing and radius: 3px

## Source Code

### index.html

```html
<div class="container">
    <div class="card">
        <span>Hover me</span>
    </div>
    <div class="card">
        <span>Hover me</span>
    </div>
    <div class="card">
        <span>Hover me</span>
    </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by david-mohseni - Tags: card */
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
}

.card {
  margin: 2%;
  background: #DBBDBD;
  width: 70px;
  height: 100px;
  box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  transition: .2s all;
  cursor: pointer;
  align-items: center;
  text-align: center;
  font-size: 13px;
  padding-top: 30px;
}

.card > span {
  display: block;
  margin: auto;
  max-width: 40px;
}

.container:hover .card {
  filter: blur(3px);
  opacity: .5;
  transform: scale(.98);
  box-shadow: none;
}

.container:hover .card:hover {
  transform: scale(1);
  filter: blur(0px);
  opacity: 1;
  box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.125);
  background: #A82C2C;
  color: white;
}
```

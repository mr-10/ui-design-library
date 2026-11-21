# Curly Lionfish 2

A card UI element from Uiverse.io by Gaurav-WebDev.

Source: https://uiverse.io/Gaurav-WebDev/curly-lionfish-2

Author: Gaurav-WebDev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card, hover effect, cool card

Colors: #088080, #333, #9fe4e44a, #f3f3f3

Fonts: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif

Spacing and radius: 100%, 40px

## Source Code

### index.html

```html
<div class="card">
  <p class="c-txt">Hover Me</p>
</div>
```

### styles.css

```css
/* From Uiverse.io by Gaurav-WebDev - Tags: card, hover effect, cool card */
.card {
  width: 190px;
  height: 254px;
  background: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: #333;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  border-radius: 40px;
  cursor: pointer;
  position: relative;
  transition: all 0.7s ease-in-out;
  overflow: hidden;
}

.card::before {
  content: "";
  position: absolute;
  height: 40%;
  width: 100%;
  background-color: #088080;
  bottom: 0;
  right: 0;
  transform: translatey(70px);
  border-radius: 100%;
  transition: all 0.7s ease-in-out;
}

.c-txt {
  z-index: 2;
}

.card:hover::before {
  transform: scale(7) translate(-20px);
}

.card:hover {
  box-shadow: 1px -10px 500px 500px #9fe4e44a;
  color: #f3f3f3;
}
```

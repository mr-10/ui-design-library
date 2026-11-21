# Clever Elephant 35

A radio button UI element from Uiverse.io by andrew-demchenk0.

Source: https://uiverse.io/andrew-demchenk0/clever-elephant-35

Author: andrew-demchenk0

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: radio, stars, rating

Colors: #666, #e58e09, #ff9e0b, #ffa723

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="rating">
  <input value="5" name="rate" id="star5" type="radio">
  <label title="text" for="star5"></label>
  <input value="4" name="rate" id="star4" type="radio">
  <label title="text" for="star4"></label>
  <input value="3" name="rate" id="star3" type="radio" checked="">
  <label title="text" for="star3"></label>
  <input value="2" name="rate" id="star2" type="radio">
  <label title="text" for="star2"></label>
  <input value="1" name="rate" id="star1" type="radio">
  <label title="text" for="star1"></label>
</div>
```

### styles.css

```css
/* From Uiverse.io by andrew-demchenk0 - Tags: radio, stars, rating */
.rating:not(:checked) > input {
  position: absolute;
  appearance: none;
}

.rating:not(:checked) > label {
  float: right;
  cursor: pointer;
  font-size: 30px;
  color: #666;
}

.rating:not(:checked) > label:before {
  content: '★';
}

.rating > input:checked + label:hover,
.rating > input:checked + label:hover ~ label,
.rating > input:checked ~ label:hover,
.rating > input:checked ~ label:hover ~ label,
.rating > label:hover ~ input:checked ~ label {
  color: #e58e09;
}

.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: #ff9e0b;
}

.rating > input:checked ~ label {
  color: #ffa723;
}
```

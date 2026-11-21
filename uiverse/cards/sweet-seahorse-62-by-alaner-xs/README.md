# Sweet Seahorse 62

A card UI element from Uiverse.io by Alaner-xs.

Source: https://uiverse.io/Alaner-xs/sweet-seahorse-62

Author: Alaner-xs

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, card

Colors: #111111, #212121, #492fed, #8608b4, #bd6fda, #e8e8e8, #ffffff

Fonts: inherit

Spacing and radius: 100%, 10px, 8px

## Source Code

### index.html

```html
<div class="card">
  <div class="card-border-top">
  </div>
  <div class="img">
  </div>
  <span> Person</span>
  <p class="job"> Job Title</p>
  <button> Click
  </button>
</div>
```

### styles.css

```css
/* From Uiverse.io by Alaner-xs - Tags: gradient, card */
.card {
  width: 190px;
  height: 254px;
  background-image: linear-gradient(144deg,#8608b4, #492fed 60%,#bd6fda);
  border: none;
  border-radius: 10px;
  padding-top: 10px;
  position: relative;
  margin: auto;
  font-family: inherit;
}

.card span {
  font-weight: 600;
  color: white;
  text-align: center;
  display: block;
  padding-top: 10px;
  font-size: 1.3em;
}

.card .job {
  font-weight: 400;
  color: white;
  display: block;
  text-align: center;
  padding-top: 5px;
  font-size: 1em;
}

.card .img {
  width: 70px;
  height: 70px;
  background: #e8e8e8;
  border-radius: 100%;
  margin: auto;
  margin-top: 20px;
}

.card button {
  padding: 8px 25px;
  display: block;
  margin: auto;
  border-radius: 8px;
  border: none;
  margin-top: 30px;
  background: #e8e8e8;
  color: #111111;
  font-weight: 600;
}

.card button:hover {
  background: #212121;
  color: #ffffff;
}
```

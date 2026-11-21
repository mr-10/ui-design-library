# White Octopus 62

A card UI element from Uiverse.io by alexmaracinaru.

Source: https://uiverse.io/alexmaracinaru/white-octopus-62

Author: alexmaracinaru

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #100a886b, #3405a3, #534bf3, #6b64f3

Fonts: See styles.css

Spacing and radius: 0px 0px 15px 15px, 15px, 8px

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
/* From Uiverse.io by alexmaracinaru - Tags: card */
.card {
 width: 190px;
 height: 254px;
 background: #3405a3;
 border-radius: 15px;
 box-shadow: 1px 5px 60px 0px #100a886b;
}

.card .card-border-top {
 width: 60%;
 height: 3%;
 background: #6b64f3;
 margin: auto;
 border-radius: 0px 0px 15px 15px;
}

.card span {
 font-weight: 600;
 color: white;
 text-align: center;
 display: block;
 padding-top: 10px;
 font-size: 16px;
}

.card .job {
 font-weight: 400;
 color: white;
 display: block;
 text-align: center;
 padding-top: 3px;
 font-size: 12px;
}

.card .img {
 width: 70px;
 height: 80px;
 background: #6b64f3;
 border-radius: 15px;
 margin: auto;
 margin-top: 25px;
}

.card button {
 padding: 8px 25px;
 display: block;
 margin: auto;
 border-radius: 8px;
 border: none;
 margin-top: 30px;
 background: #6b64f3;
 color: white;
 font-weight: 600;
}

.card button:hover {
 background: #534bf3;
}
```

# Lucky Dingo 81

A card UI element from Uiverse.io by alexruix.

Source: https://uiverse.io/alexruix/lucky-dingo-81

Author: alexruix

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, card, modern, clean

Colors: #0a3394, #212121, #4286f4, #d0d0d0, #f5f5f5

Fonts: See styles.css

Spacing and radius: 16px

## Source Code

### index.html

```html
<div class="card">
<div class="card-image"></div>
  <div class="card-description">
    <p class="text-title"> Card Title</p>
    <p class="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by alexruix - Tags: gradient, card, modern, clean */
.card {
  height: 254px;
  width: 190px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 16px;
  box-shadow: 0 0 20px 8px #d0d0d0;
  overflow: hidden;
}

 /*Image*/
.card-image {
  height: 100%;
  width: 100%;
  position: absolute;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: #0a3394;
  background: linear-gradient(to top, #0a3394, #4286f4);
}

/*Description */
.card-description {
  display: flex;
  position: absolute;
  gap: .5em;
  flex-direction: column;
  background-color: #f5f5f5;
  color: #212121;
  height: 70%;
  bottom: 0;
  border-radius: 16px;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 1rem;
}

/*Text*/
.text-title {
  font-size: 1.3rem;
  font-weight: 700;
}

.text-body {
  font-size: 1rem;
  line-height: 130%;
}


/* Hover states */
.card:hover .card-description {
  transform: translateY(100%);
}
```

# Foolish Falcon 87

A card UI element from Uiverse.io by eduardo-amaro-maciel.

Source: https://uiverse.io/eduardo-amaro-maciel/foolish-falcon-87

Author: eduardo-amaro-maciel

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card, scroll snap, dynamic

Colors: #004d7a, #008793, #00bf72, #051937, #141414, #6f12eb, #888, #9c00d8, #a8eb12, #ba00c5

Fonts: See styles.css

Spacing and radius: 20px, 8px

## Source Code

### index.html

```html
<div class="container scroll-1">
  <div class="card">
    <div class="card__image"></div>
    <div class="card__content">
        <span class="card__title">Hello</span>
        <p class="card__describe">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
  </div>
  <div class="card">
    <div class="card__image"></div>
    <div class="card__content">
        <span class="card__title">Hello</span>
        <p class="card__describe">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
  </div>
  <div class="card">
    <div class="card__image"></div>
    <div class="card__content">
        <span class="card__title">Hello</span>
        <p class="card__describe">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by eduardo-amaro-maciel - Tags: card, scroll snap, dynamic */
.scroll-1::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.scroll-1::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: #888;
}

.container * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: #fff;
}

.container {
  display: flex;
  overflow-x: scroll;
  padding: 24px;
  width: 300px;
  scroll-snap-type: x mandatory;
  scroll-padding-top: 24px;
  border-radius: 8px;
  gap: 20px;
}

.container .card {
  flex: 0 0 100%;
  overflow: hidden;
  border-radius: 8px;
  background-color: #141414;
  scroll-snap-align: start;
}

.card .card__image {
  flex: 1;
  height: 140px;
}

.card:nth-child(1) .card__image {
  background-image: linear-gradient(
      to right top,
      #051937, 
      #004d7a, 
      #008793, 
      #00bf72, 
      #a8eb12
  );
}

.card:nth-child(2) .card__image {
  background-image: linear-gradient(
    to right top, 
    #dc09a5, 
    #ce00b4, 
    #ba00c5, 
    #9c00d8, 
    #6f12eb
  );
}

.card:nth-child(3) .card__image {
  background-image: linear-gradient(
    to right top, 
    #dc1009, 
    #e55f00, 
    #e49200, 
    #dac000, 
    #c7eb12
  );
}

.card .card__content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}

.card .card__content .card__title {
  font-size: 32px;
  color: #fff;
  text-transform: capitalize;
}

.card .card__content .card__describe {
  color: #fff;
  font-size: 16px;
}
```

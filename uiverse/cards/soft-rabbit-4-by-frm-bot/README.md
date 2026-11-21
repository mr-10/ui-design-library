# Soft Rabbit 4

A card UI element from Uiverse.io by FrM-bot.

Source: https://uiverse.io/FrM-bot/soft-rabbit-4

Author: FrM-bot

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #33001b, #ff0084

Fonts: See styles.css

Spacing and radius: .5rem 2rem

## Source Code

### index.html

```html
<div class="card">
    <div class="img-container">
        <div class="img">
        </div>
        <div class="description card">
            <span class="title">
                Card
            </span>
        </div>
    </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by FrM-bot - Tags: card */
/* From uiverse.io by @FrM-bot */
.card {
  width: 200px;
  height: min-content;
  transition: all .3s;
  position: relative;
  border-radius: .5rem 2rem;
  box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.5);
}

.card:hover {
  transform: scale(1.03);
}

.img {
  transition: all .3s;
  background: #ff0084;
  background: -webkit-linear-gradient(to right, #33001b, #ff0084);
  background: linear-gradient(to right, #33001b, #ff0084);
  width: 100%;
}

.img:hover {
  transform: scale(1.3);
}

.img-container {
  display: grid;
  border-radius: .5rem 2rem;
  height: 270px;
  overflow: hidden;
}

.description {
  position: absolute;
  bottom: .5rem;
  left: .5rem;
  text-align: start;
  padding: .5rem 1em;
  width: 90%;
  transition: all 0.5s ease;
  text-overflow: ellipsis;
  white-space: nowrap;
  backdrop-filter: blur(.1rem);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: .5rem 2rem;
}

.description:hover {
  transform: perspective(100px) translateX(7px) rotateX(3deg) rotateY(3deg) scale(1);
  box-shadow: none;
}

.title {
  color: aliceblue;
}
```

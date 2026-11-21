# Grumpy Chicken 19

A card UI element from Uiverse.io by tsd29142.

Source: https://uiverse.io/tsd29142/grumpy-chicken-19

Author: tsd29142

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card, hover, box-shadow, aesthetic

Colors: #010e47, #011160, #07052e, #0d117a, #210c93

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<div class="container">
  <div class="card">
  
  </div>
    </div>
```

### styles.css

```css
/* From Uiverse.io by tsd29142 - Tags: card, hover, box-shadow, aesthetic */
.card {
  height: 250px;
  width: 190px;
  background-image: linear-gradient(to top,   #210c93, #0d117a, #011160, #010e47, #07052e);
  box-shadow: rgba(0, 0, 0, 0.24) -20px 30px 10px;
  transform-style: preserve-3d;
  transform: perspective(400px)
  rotateX(60deg)
  rotateZ(-30deg);
  border-radius: 10px;
  transition: transform 2s;
}

.card:hover {
  transform: rotateY(19deg);
}
```

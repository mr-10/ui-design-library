# Slimy Wolverine 10

A card UI element from Uiverse.io by gharsh11032000.

Source: https://uiverse.io/gharsh11032000/slimy-wolverine-10

Author: gharsh11032000

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, card, hover effect

Colors: #4158d0, #c850c0, #ffcc70

Fonts: See styles.css

Spacing and radius: 8px

## Source Code

### index.html

```html
<div class="card">
  <div class="card-content">
    <p class="card-title">Card hover effect
    </p><p class="card-para">Lorem ipsum dolor sit 
      amet, consectetur adipiscing elit.</p>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by gharsh11032000 - Tags: gradient, card, hover effect */
.card {
  width: 300px;
  height: 200px;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  border-radius: 8px;
  color: white;
  overflow: hidden;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  cursor: pointer;
}

.card-content {
  padding: 20px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
}

.card-content .card-title {
  font-size: 24px;
  font-weight: 700;
  color: inherit;
  text-transform: uppercase;
}

.card-content .card-para {
  color: inherit;
  opacity: 0.8;
  font-size: 14px;
}

.card:hover {
  transform: rotateY(10deg) rotateX(10deg) scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.1));
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  z-index: 1;
}

.card:hover:before {
  transform: translateX(-100%);
}

.card:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.1));
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  z-index: 1;
}

.card:hover:after {
  transform: translateX(100%);
}
```

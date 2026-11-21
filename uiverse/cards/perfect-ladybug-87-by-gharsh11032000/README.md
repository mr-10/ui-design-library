# Perfect Ladybug 87

A card UI element from Uiverse.io by gharsh11032000.

Source: https://uiverse.io/gharsh11032000/perfect-ladybug-87

Author: gharsh11032000

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card, hover effect, cardhover

Colors: #f89b29, #f89b2980, #ff0f7b, #ff0f7b80, #ffffff

Fonts: See styles.css

Spacing and radius: 10px, 50px

## Source Code

### index.html

```html
<div class="card">
  <p class="heading">Card Hover</p>
  <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
  </p><div class="overlay"></div>
  <button class="card-btn">Click</button>
</div>
```

### styles.css

```css
/* From Uiverse.io by gharsh11032000 - Tags: card, hover effect, cardhover  */
.card {
  position: relative;
  width: 350px;
  height: 250px;
  background-image: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
  border-radius: 10px;
  display: flex;
  padding: 10px 30px;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.heading {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
}

.para {
  text-align: center;
  color: #ffffff;
  opacity: 0.7;
  line-height: 1.4;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.card:hover .overlay {
  opacity: 1;
  pointer-events: auto;
}

.card .card-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: 600;
  padding: 10px 20px;
  font-size: 16px;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  border: none;
  opacity: 0;
  scale: 0;
  transform-origin: 0 0;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.card:hover .card-btn {
  opacity: 1;
  scale: 1;
}

.card .card-btn:hover {
  box-shadow: 0 0 0px 5px rgba(0, 0, 0, 0.3);
}

.card .card-btn:active {
  scale: 0.95;
}

.overlay::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-45deg, #f89b2980 0%, #ff0f7b80 100% );
  transition: transform 0.5s ease;
}

.card:hover .overlay::after {
  transform: translate(-50%, -50%) scale(2);
}
```

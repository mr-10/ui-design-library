# Empty Mule 38

A card UI element from Uiverse.io by StefanR1901.

Source: https://uiverse.io/StefanR1901/empty-mule-38

Author: StefanR1901

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card, heart, pump

Colors: #000000

Fonts: See styles.css

Spacing and radius: 50%

## Source Code

### index.html

```html
<div class="one-div"></div>
```

### styles.css

```css
/* From Uiverse.io by StefanR1901 - Tags: card, heart, pump */
.one-div-container {
  position: relative;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
}

.one-div {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,136,0,1) 0%, rgba(255,77,210,1) 50%, rgba(0,212,255,1) 100%);
  box-shadow: 0 0 50px rgba(255,255,255,0.5);
  transition: all 0.5s ease-in-out;
  animation: pulse 2s ease-in-out infinite;
}

.one-div:hover {
  transform: scale(1.2);
  background: radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(255,77,210,1) 50%, rgba(255,136,0,1) 100%);
  box-shadow: 0 0 70px rgba(255,255,255,0.7), 0 0 20px rgba(255,255,255,0.7), 0 0 10px rgba(255,255,255,0.7);
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }
}
```

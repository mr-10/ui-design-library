# Slippery Stingray 30

A card UI element from Uiverse.io by KhaledMatalkah.

Source: https://uiverse.io/KhaledMatalkah/slippery-stingray-30

Author: KhaledMatalkah

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card, hover, animated

Colors: #5b1577, #68057c, #891883, #a52574, #a52585, #b700ff, #b9317c, #bd3fa2, #be268b, #ca21ae

Fonts: See styles.css

Spacing and radius: 10%, 50%

## Source Code

### index.html

```html
<div class="card"></div>
```

### styles.css

```css
/* From Uiverse.io by KhaledMatalkah - Tags: card, hover, animated */
.card {
  width: 254px;
  height: 300px;
  background: linear-gradient(180deg, #5b1577, #a52585);
  border-radius: 10%;
  box-shadow: -35px 35px 70px #891883, 10px -35px 70px #db26db;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  animation: shadowAnimation 5s infinite ease-in-out;
}

@keyframes shadowAnimation {
  0% {
    box-shadow: -35px 35px 70px #ca21ae, 10px -35px 70px #ca21ae;
  }

  50% {
    box-shadow: -20px 10px 50px #bd3fa2, 0 -20px 50px #b9317c;
  }

  100% {
    box-shadow: -35px 35px 70px #ca27af, 10px -35px 70px #bd3fa2;
  }
}

.card::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, #68057c, #a52574);
  border-radius: 50%;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.card::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, #b700ff, #be268b, transparent);
  border-radius: 50%;
  opacity: 0.2;
  transition: opacity 0.3s ease;
}

.card:hover {
  transform: scale(1.1);
}

.card:hover::before,
.card:hover::after {
  opacity: 1;
}
```

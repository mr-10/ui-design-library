# Happy Cougar 51

A card UI element from Uiverse.io by abhusha08.

Source: https://uiverse.io/abhusha08/happy-cougar-51

Author: abhusha08

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: flashy, gradient, button, card, hover, hover effect, buttons

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 0.625em

## Source Code

### index.html

```html
<div class="card">
  <button class="red-btn">OPS TEAM</button>

  <button class="blue-btn">START-UP</button>
</div>
```

### styles.css

```css
/* From Uiverse.io by abhusha08  - Tags: flashy, gradient, button, card, hover, hover effect, buttons */
.card {
  display: flex;
  flex-direction: column;
  background: lightgrey;
}

.red-btn {
  width: 300px;
  height: 150px;
  margin: 15px;
  background: rgb(255, 0, 0);
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  color: white;
  border: none;
  border-radius: 0.625em;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.blue-btn {
  width: 300px;
  height: 150px;
  margin: 15px;
  background: rgb(0, 8, 144);
  background: linear-gradient(
    90deg,
    rgba(0, 8, 144, 1) 0%,
    rgba(16, 0, 255, 1) 22%,
    rgba(86, 255, 247, 1) 100%
  );
  color: white;
  border: none;
  border-radius: 0.625em;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

button:hover {
  color: rgb(0, 0, 0);
}

button:after {
  content: "";
  background: white;
  position: absolute;
  z-index: -1;
  left: -20%;
  right: -20%;
  top: 0;
  bottom: 0;
  transform: skewX(-45deg) scale(0, 1);
  transition: all 0.5s;
}

button:hover:after {
  transform: skewX(-45deg) scale(1, 1);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
```

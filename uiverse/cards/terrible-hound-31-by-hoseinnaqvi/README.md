# Terrible Hound 31

A card UI element from Uiverse.io by Hoseinnaqvi.

Source: https://uiverse.io/Hoseinnaqvi/terrible-hound-31

Author: Hoseinnaqvi

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: logo, one-div, fruit

Colors: See styles.css

Fonts: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif

Spacing and radius: 0 40% 0 60%, 40%

## Source Code

### index.html

```html
<div class="one-div"></div>
```

### styles.css

```css
/* From Uiverse.io by Hoseinnaqvi - Tags: logo, one-div, fruit */
.one-div {
  margin-top: 40px;
  width: 300px;
  height: 300px;
  background-image: linear-gradient(to right,red,orange);
  border-radius: 40%;
  box-shadow: 0px 0px 10px black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.one-div::before {
  content: '';
  height: 90px;
  width: 90px;
  border-radius: 0 40% 0 60%;
  background-color: green;
  position: absolute;
  top: 5%;
  left: 42%;
  box-shadow: 0px -3px 6px rgba(4, 4, 4, 0.695);
  z-index: -1;
}

.one-div::after {
  content: '😋';
  filter: hue-rotate(130deg);
  font-size: 10em;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  border-radius: 0 40% 0 60%;
  text-align: center;
  top: 33%;
  left: 37%;
  animation: txt 1s infinite alternate;
}

@keyframes txt {
  0% {
    opacity: 0.1;
  }

  100% {
    opacity: 1;
  }
}

@keyframes intro {
  0% {
    top: -100px;
  }

  50% {
    top: -50px;
  }

  100% {
    top: 0px;
  }
}
```

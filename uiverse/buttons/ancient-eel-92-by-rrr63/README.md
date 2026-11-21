# Ancient Eel 92

A button UI element from Uiverse.io by rrr63.

Source: https://uiverse.io/rrr63/ancient-eel-92

Author: rrr63

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover, scale

Colors: #283044, #78a1bb, #ebf5ee

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<button class="button">
  Click here ..
</button>
```

### styles.css

```css
/* From Uiverse.io by rrr63 - Tags: button, hover, scale */
.button {
  padding: 10px 35px;
  background-color: #EBF5EE;
  font-weight: bolder;
  border: 0px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;
  transition: all .2s ease-in-out .1s;
}

.button:hover {
  background-color: #EBF5EE;
  transform: scale(1.2) rotate(5deg);
}

.button:before {
  content: '';
  position: absolute;
  background-color: #78A1BB;
  height: 180%;
  top: -30%;
  left: -40%;
  transform: rotateZ(20deg);
  width: 40px;
  transition: left .2s ease-in-out, left 0s;
}

.button:after {
  content: '';
  position: absolute;
  background-color: #283044;
  height: 180%;
  top: -30%;
  left: -40%;
  transform: translateX(-40px) rotateZ(20deg);
  width: 40px;
  transition: left .2s ease-in-out, left 0s;
}

.button:hover:after {
  left: 150%;
  transition: left .3s ease-in-out;
}

.button:hover:before {
  left: 150%;
  transition: left .3s ease-in-out;
}
```

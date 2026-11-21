# Loud Husky 59

A button UI element from Uiverse.io by simontheonlyone.

Source: https://uiverse.io/simontheonlyone/loud-husky-59

Author: simontheonlyone

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: minimalist, button, hover, shadow, glow, light&dark, focus

Colors: #111, #fff

Fonts: poppins

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button class="button">
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by simontheonlyone - Source: WhiteNervosa - https://uiverse.io/WhiteNervosa/popular-ladybug-27 - Tags: minimalist, button, hover, shadow, glow, light&dark, focus */
.button {
  position: relative;
  width: 10em;
  height: 2em;
  text-align: center;
  font-family: poppins;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  background-color: rgba(3, 3, 3, .5);
  border: none;
  transition: color .2s linear,
        box-shadow .3s linear,
        background-color .3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.button:focus,
.button:hover {
  box-shadow: 0 0 110px #fff;
  background-color: rgba(255, 255, 255, 0.4);
  color: #111;
  font-weight: 500;
}

.button:focus:before,
.button:hover:before,
.button:focus:after,
.button:hover:after {
  width: 100%;
  left: 0%;
}

.button:before,
.button:after {
  content: '';
  position: absolute;
  pointer-events: none;
  left: 50%;
  width: 0%;
  height: 2px;
  background-color: #fff;
  transition: width, left, 250ms cubic-bezier(0.25, .8, .25, 1);
}

.button:before {
  top: -2px;
}

.button:after {
  bottom: -2px;
}
```

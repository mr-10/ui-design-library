# Tall Mayfly 66

A button UI element from Uiverse.io by abuayaan01.

Source: https://uiverse.io/abuayaan01/tall-mayfly-66

Author: abuayaan01

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, water, btn, waves, 3d button, Button design

Colors: #000, #104e81, #2893eb, #fff

Fonts: sans-serif

Spacing and radius: 40%, 45%, 50px

## Source Code

### index.html

```html
<button class="button">
  <span class="liquid"></span>  
  <span class="btn-txt">Click Me</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by abuayaan01 - Tags: button, water, btn, waves, 3d button, Button design */
.button {
  background-color: #000;
  border: 0px;
  outline: 0px;
  color: #fff;
  width: 200px;
  padding: 20px;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.liquid {
  background-color: #2893eb;
  width: 200px;
  height: 70px;
  position: absolute;
  bottom: 0;
  left: 0;
  box-shadow: inset 5px -5px 25px #104e81,
  inset -5px 0px 25px #104e81;
}

.liquid::after {
  content: '';
  width: 450px;
  height: 400px;
  background: #000;
  z-index: 1;
  position: absolute;
  left: -110px;
  top: -380px;
  border-radius: 45%;
  animation: animate 5s linear 2s infinite;
}

.liquid::before {
  content: '';
  width: 450px;
  height: 400px;
  background-color: rgb(68, 160, 235);
  z-index: 1;
  position: absolute;
  left: -110px;
  top: -380px;
  border-radius: 40%;
  animation: animate 5s linear 1.8s infinite;
}

.btn-txt {
  position: relative;
  z-index: 1;
  font-size: 22px;
  font-family: sans-serif;
  letter-spacing: 2px;
}

@keyframes animate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
```

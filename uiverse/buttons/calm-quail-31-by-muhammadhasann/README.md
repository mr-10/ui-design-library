# Calm Quail 31

A button UI element from Uiverse.io by MuhammadHasann.

Source: https://uiverse.io/MuhammadHasann/calm-quail-31

Author: MuhammadHasann

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #6d7973, #ffffff

Fonts: See styles.css

Spacing and radius: 150px, 25px

## Source Code

### index.html

```html
<button>
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by MuhammadHasann - Tags: button */
button {
  position: relative;
  padding: 13px 35px;
  background: #6d7973;
  font-size: 17px;
  font-weight: 900;
  color: #ffffff;
  border: 2px solid #6d7973;
  border-radius: 25px;
  transition: all .3s ease-in-out;
}

button::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 124px;
  height: 45px;
  border: 3px solid #6d7973;
  border-radius: 25px;
  transition: all .3s ease-in-out;
  z-index: 2;
}

button:hover::after {
  animation: radar_45011 1s ease infinite .3s;
}

@keyframes radar_45011 {
  from {
    opacity: 1;
    width: 124px;
    height: 45px;
    border-radius: 25px;
  }

  to {
    opacity: 0;
    width: 470px;
    height: 220px;
    border-radius: 150px;
  }
}

button:active {
  transform: scale(.9);
}
```

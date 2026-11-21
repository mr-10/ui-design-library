# Empty Turkey 39

A button UI element from Uiverse.io by TISEPSE.

Source: https://uiverse.io/TISEPSE/empty-turkey-39

Author: TISEPSE

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, button, click

Colors: #d8ba98, #dac0a3, #eadbc8, #f8f0e5

Fonts: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif

Spacing and radius: 10px, 30px 30px 0px 0px, 50px 50px 0px 0px

## Source Code

### index.html

```html
<a class="bck-grnd"><span class="style"></span>Hover me </a>
```

### styles.css

```css
/* From Uiverse.io by TISEPSE  - Tags: animation, button, click */
.bck-grnd {
  position: relative;
  display: flex;
  background-color: #dac0a3;
  padding: 15px 20px;
  font-size: 25px;
  color: black;
  text-decoration: none;
  border: 3px solid transparent;
  overflow: hidden;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  z-index: 2;
  border-radius: 10px;
  letter-spacing: 3px;
  box-shadow: 0 0.4rem #eadbc8;
  box-shadow: 0.4rem 0.4rem 0 #eadbc8;
  transition: 0.5s;
}

.bck-grnd .style {
  background: #f8f0e5;
  height: 150px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 30px 30px 0px 0px;
  top: 120%;
  z-index: -1;
  transition: 0.5s;
}

.bck-grnd:hover .style {
  top: -70%;
  border-radius: 50px 50px 0px 0px;
}

.bck-grnd:hover {
  color: #d8ba98;
  border: 3px solid #dac0a3;
  box-shadow: none;
}

.bck-grnd:active {
  transform: scale(1.1);
}
```

# Swift Warthog 30

A button UI element from Uiverse.io by Manish-Tamang.

Source: https://uiverse.io/Manish-Tamang/swift-warthog-30

Author: Manish-Tamang

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover effect, html, css, 3d button, button hover effect

Colors: #000, #fff

Fonts: "Montserrat", sans-serif

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<span><a href="#"></a></span>
```

### styles.css

```css
/* From Uiverse.io by Manish-Tamang  - Tags: button, hover effect, html, css, 3d button, button hover effect  */
a {
  position: relative;
  display: inline-flex;
  width: 180px;
  height: 55px;
  margin: 0 15px;
  perspective: 1000px;
  text-decoration: none;
}

a:before,
a:after {
  position: absolute;
  content: "3D HOVER";
  height: 55px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid black;
  box-sizing: border-box;
  font-size: 19px;
  letter-spacing: 1px;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  transition: transform 0.25s;
}

a:before {
  color: #fff;
  background: #000;
  transform: rotateY(0deg) translateZ(25px);
}

a:after {
  color: #000;
  transform: rotateX(90deg) translateZ(25px);
}

a:hover:before {
  transform: translateZ(-25px) rotateX(-90deg);
}

a:hover:after {
  transform: rotateY(0deg) translateZ(25px);
}
```

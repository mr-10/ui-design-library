# Neat Cow 49

A button UI element from Uiverse.io by aboalsim114.

Source: https://uiverse.io/aboalsim114/neat-cow-49

Author: aboalsim114

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #fff

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<button>
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by aboalsim114 - Tags: button */
button {
  position: relative;
  background-color: rgb(230, 34, 77);
  border-radius: 5px;
  box-shadow: rgb(121, 18, 55) 0px 4px 0px 0px;
  padding: 15px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  width: 154px;
  height: 49px;
  color: #fff;
  border: none;
  font-size: 20px;
  transition: all .3s ease-in-out;
  z-index: 1;
  overflow: hidden;
}

button::before {
  content: "";
  background-color: rgb(248, 50, 93);
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: width 700ms ease-in-out;
  display: inline-block;
}

button:hover::before {
  width: 100%;
}
```

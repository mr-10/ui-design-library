# Sour Bullfrog 96

A button UI element from Uiverse.io by 212004ALJI.

Source: https://uiverse.io/212004ALJI/sour-bullfrog-96

Author: 212004ALJI

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #222

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<button>
  INPUT
</button>
```

### styles.css

```css
/* From Uiverse.io by 212004ALJI - Tags: button */
button {
  /* padding: 5px 10px; */
  height: 50px;
  width: 100px;
  font-size: 20px;
  position: relative;
  border: navajowhite;
  background-color: #222;
  color: aliceblue;
  z-index: 1;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: 2px 2px 2px red;
}

button::before {
  content: '';
  height: 10px;
  width: 30px;
  position: absolute;
  background-image: linear-gradient(45deg, salmon,red);
  left: -10px;
  top: 0;
  z-index: -1;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
}

button:hover::before {
  height: 100px;
  width: 100px;
}

button:hover {
  border-radius: 5px;
}
```

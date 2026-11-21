# Cuddly Zebra 19

A button UI element from Uiverse.io by KhaledMatalkah.

Source: https://uiverse.io/KhaledMatalkah/cuddly-zebra-19

Author: KhaledMatalkah

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover, transition

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 50px

## Source Code

### index.html

```html
<button class="button">
  Hover Me!
</button>
```

### styles.css

```css
/* From Uiverse.io by KhaledMatalkah - Tags: button, hover, transition */
.button {
  display: inline-block;
  padding: 15px 32px;
  font-size: 17px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  background: transparent;
  border-radius: 50px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  border: none;
  z-index: 1;
}

.button {
  overflow: hidden;
}

.button:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  transition: left 0.8s ease-in-out;
  z-index: -1;
}

.button:hover:before {
  left: 0%;
}

.button:after {
  content: "";
  position: absolute;
  bottom: 50%;
  right: -100%;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  transition: right 0.8s ease-in-out;
  z-index: -1;
}

.button:hover:after {
  right: 0%;
}
```

# Tasty Tiger 23

A checkbox UI element from Uiverse.io by KSAplay.

Source: https://uiverse.io/KSAplay/tasty-tiger-23

Author: KSAplay

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox, square

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<label class="container">
  <input type="checkbox" checked="checked">
  <div class="checkmark"></div>
</label>
```

### styles.css

```css
/* From Uiverse.io by KSAplay - Tags: checkbox, square */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.container {
  position: relative;
  cursor: pointer;
  font-size: 17px;
  width: 2em;
  height: 2em;
  user-select: none;
  border: 5px solid white;
  display: block;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.checkmark:after {
  content: '';
  position: absolute;
  top: 25%;
  left: 25%;
  background-color: white;
  width: 50%;
  height: 50%;
  transform: scale(0);
  transition: .1s ease;
}

.container input:checked ~ .checkmark:after {
  transform: scale(1);
}
```

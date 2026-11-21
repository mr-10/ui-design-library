# Shy Horse 87

A checkbox UI element from Uiverse.io by csozidev.

Source: https://uiverse.io/csozidev/shy-horse-87

Author: csozidev

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox

Colors: #004000, #00de00, #00ff00, #676767

Fonts: See styles.css

Spacing and radius: 1rem, 25px

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
/* From Uiverse.io by csozidev - Tags: checkbox */
/* Green glow checkbox made by: csozi | Website: www.csozi.hu*/

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  background-color: #676767;
  padding: 4px;
  border-radius: 25px;
}

.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 1.3em;
  width: 1.3em;
  border-radius: 1rem;
  background-color: #004000;
  transition: 0.1s;
}

.container input:checked ~ .checkmark {
  background-color: #00de00;
  box-shadow: 0 0 10px #00ff00;
}
```

# Tiny Frog 22

A button UI element from Uiverse.io by newrocker2468.

Source: https://uiverse.io/newrocker2468/tiny-frog-22

Author: newrocker2468

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, green, button, hover, simple button, #button

Colors: #5affc0, #a0fad8

Fonts: See styles.css

Spacing and radius: 10px, 20px, 5px

## Source Code

### index.html

```html
<button class="button1">
 Click me!
</button>
```

### styles.css

```css
/* From Uiverse.io by newrocker2468 - Tags: simple, green, button, hover, simple button, #button */
.button1 {
  background-color: white;
  font-weight: bold;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  padding: 1.2em;
  color: rgb(0, 0, 0);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 500ms;
  z-index: 99;
}

.button1::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 20px;
  bottom: -30px;
  left: 45px;
  background-color: #5affc0;
  z-index: -99;
  transition: all 500ms;
}

.button1:hover::after {
  width: 120px;
  height: 60px;
  border-radius: 10px;
  transition: all 500ms;
  bottom: -1px;
  left: -1px;
}

.button1:hover {
  border-radius: 20px;
  box-shadow: 0 0 100px 20px #5affc0;
}

.button1:active {
  transform: translateY(10px);
}

.button1:focus {
  border: 5px solid #a0fad8;
}
```

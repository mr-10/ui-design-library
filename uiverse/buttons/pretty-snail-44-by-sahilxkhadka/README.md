# Pretty Snail 44

A button UI element from Uiverse.io by sahilxkhadka.

Source: https://uiverse.io/sahilxkhadka/pretty-snail-44

Author: sahilxkhadka

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, shadow, keyboard

Colors: #0004, #0009, #202020, #232323, #282828, #4a4a4a

Fonts: "Montserrat", sans-serif

Spacing and radius: 10px

## Source Code

### index.html

```html
<button class="button">
  <div>
    <span>
      <i>W</i>
    </span>
  </div>
  <div>
    <span>
      <i>A</i>
    </span>
  </div>
  <div>
    <span>
      <i>S</i>
    </span>
  </div>
  <div>
    <span>
      <i>D</i>
    </span>
  </div>
</button>
```

### styles.css

```css
/* From Uiverse.io by sahilxkhadka  - Tags: button, shadow, keyboard */
.button {
  outline: none;
  border: none;
  display: flex;
  width: 400px;
  justify-content: center;
  flex-wrap: wrap;
  background-color: transparent;
}
.button div:first-child {
  width: 100%;
  display: flex;
  justify-content: center;
}
.button span {
  cursor: pointer;
  position: relative;
  height: 80px;
  width: 80px;
  padding: 8px 15px;
  margin: 8px 4px;
  display: inline-block;
  border-radius: 10px;
  background: linear-gradient(180deg, #282828, #202020);
  box-shadow: inset -8px 0 8px rgba(0, 0, 0, 0.15),
    inset 0 -8px 8px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(0, 0, 0, 0.75),
    10px 20px 25px rgba(0, 0, 0, 0.4);
  overflow: hidden;
}
.button span::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 4px;
  bottom: 14px;
  right: 12px;
  background: linear-gradient(90deg, #232323, #4a4a4a);
  border-radius: 10px;
  box-shadow: -10px -10px 10px rgba(255, 255, 255, 0.25),
    10px 5px 10px rgba(0, 0, 0, 0.15);
  border-left: 1px solid #0004;
  border-bottom: 1px solid #0004;
  border-top: 1px solid #0009;
}
.button span i {
  font-family: "Montserrat", sans-serif;
  position: relative;
  font-style: normal;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: white;
}
```

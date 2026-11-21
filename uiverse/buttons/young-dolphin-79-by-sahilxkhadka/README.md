# Young Dolphin 79

A button UI element from Uiverse.io by sahilxkhadka.

Source: https://uiverse.io/sahilxkhadka/young-dolphin-79

Author: sahilxkhadka

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, keyboard, keyboard style

Colors: #0004, #0009, #202020, #232323, #282828, #4a4a4a

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<button>
  <span>Uiverse</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by sahilxkhadka - Tags: button, keyboard, keyboard style */
button {
  all: unset;
  position: relative;
  height: 4em;
  width: 10em;
  padding: 8px 24px;
  border-radius: 10px;
  background: linear-gradient(180deg, #282828, #202020);
  box-shadow: inset -8px 0 8px rgba(0, 0, 0, 0.15),
                inset 0 -8px 8px rgba(0, 0, 0, 0.25),
                0 0 0 2px rgba(0, 0, 0, 0.75),
                10px 20px 25px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

button::before {
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

button span {
  font-size: 1.5rem;
  color: white;
  position: relative;
  margin-top: -8px;
}
```

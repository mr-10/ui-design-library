# Terrible Walrus 31

A button UI element from Uiverse.io by lenfear23.

Source: https://uiverse.io/lenfear23/terrible-walrus-31

Author: lenfear23

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: neumorphism, button

Colors: #222, #333, #444, #d6d6d6

Fonts: 'Damion', cursive

Spacing and radius: 10px

## Source Code

### index.html

```html
<button>
    Button
</button>
```

### styles.css

```css
/* From Uiverse.io by lenfear23 - Tags: neumorphism, button */
button {
  margin: 12px;
  height: 50px;
  width: 120px;
  border-radius: 10px;
  background: #333;
  justify-content: center;
  align-items: center;
  box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #444, inset -5px -5px 10px #222;
  font-family: 'Damion', cursive;
  border: none;
  font-size: 16px;
  color: rgb(161, 161, 161);
  transition: 500ms;
}

button:hover {
  box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #222, inset -5px -5px 10px #444;
  color: #d6d6d6;
  transition: 500ms;
}
```

# Ordinary Vampirebat 21

A button UI element from Uiverse.io by Rodrypaladin.

Source: https://uiverse.io/Rodrypaladin/ordinary-vampirebat-21

Author: Rodrypaladin

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, animation, blue, button, css, css effect

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button class="button">
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by Rodrypaladin - Tags: simple, animation, blue, button, css, css effect */
.button {
  padding: 10px 20px;
  font-size: 1.1rem;
  background-color: rgb(74, 153, 255);
  border: none;
  color: white;
  position: relative;
  width: 120px;
  height: 45px;
  transition: background-color 0.2s ease-in, all 0.15s ease-in;
}

button::after {
  display: flex;
  align-items: center;
  justify-content: center;
  content: "Button";
  width: 120px;
  height: 45px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(5px, 5px);
  background-color: rgb(1, 111, 255);
  transition: all 0.15s ease-in;
}

button:hover::after {
  transform: translate(-5px, -6px);
}

button:hover {
  transform: translate(5px, 5px);
}

button:active::after {
  background-color: rgb(0, 83, 192);
}
```

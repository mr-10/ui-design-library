# Slimy Stingray 64

A button UI element from Uiverse.io by eduardo-amaro-maciel.

Source: https://uiverse.io/eduardo-amaro-maciel/slimy-stingray-64

Author: eduardo-amaro-maciel

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: blue, minimalist, button, hover, border, hover effect, css effect

Colors: #000814, #003566, #fff

Fonts: See styles.css

Spacing and radius: 50%, 50px

## Source Code

### index.html

```html
<button class="button">
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by eduardo-amaro-maciel - Tags: blue, minimalist, button, hover, border, hover effect, css effect */
.button {
  width: 150px;
  height: 50px;
  border-radius: 50px;
  background-color: transparent;
  border: 2px solid #000814;
  overflow: hidden;
  position: relative;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  transition: 300ms ease;
}

.button::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #003566;
  top: 100%;
  left: 0;
  transition: 500ms ease;
}

.button:hover {
  color: #fff;
  letter-spacing: 3px;
}

.button:hover::before {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

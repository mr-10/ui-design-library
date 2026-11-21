# Proud Bullfrog 29

A button UI element from Uiverse.io by KSAplay.

Source: https://uiverse.io/KSAplay/proud-bullfrog-29

Author: KSAplay

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #0050ec, #0e285d

Fonts: See styles.css

Spacing and radius: 2em

## Source Code

### index.html

```html
<button>
  START
</button>
```

### styles.css

```css
/* From Uiverse.io by KSAplay - Tags: button */
button {
  background-color: #0050ec;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 20px;
  border-radius: 2em;
  cursor: pointer;
  transition: 0.1s ease;
  border-width: 0;
  box-shadow: 1px 5px 0 0 #0e285d;
}

button:hover {
  transform: translateY(-4px);
  box-shadow: 1px 9px 0 0 #0e285d;
}

button:active {
  transform: translateY(4px);
  box-shadow: 0px 0px 0 0 #0e285d;
}
```

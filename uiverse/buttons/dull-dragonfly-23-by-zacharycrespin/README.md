# Dull Dragonfly 23

A button UI element from Uiverse.io by ZacharyCrespin.

Source: https://uiverse.io/ZacharyCrespin/dull-dragonfly-23

Author: ZacharyCrespin

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, stack

Colors: #000, #fff

Fonts: Roboto, sans-serif

Spacing and radius: 2px

## Source Code

### index.html

```html
<button>Button</button>
```

### styles.css

```css
/* From Uiverse.io by ZacharyCrespin - Tags: button, stack */
button {
  transition: all 0.5s;
  font-size: 17px;
  padding: 1ch 2ch;
  background-color: white;
  color: #000;
  font-family: Roboto, sans-serif;
  border: none;
  border-radius: 2px;
  box-shadow: 2px 2px 0px hsl(0, 0%, 90%),
    4px 4px 0px hsl(0, 0%, 80%),
    6px 6px 0px hsl(0, 0%, 70%),
    8px 8px 0px hsl(0, 0%, 60%),
    10px 10px 0px hsl(0, 0%, 50%),
    12px 12px 0px hsl(0, 0%, 40%),
    14px 14px 0px hsl(0, 0%, 30%),
    16px 16px 0px hsl(0, 0%, 20%),
    18px 18px 0px hsl(0, 0%, 10%);
}

button:hover {
  background-color: hsl(0, 0%, 50%);
  color: #fff;
  box-shadow: none;
}
```

# Proud Vampirebat 22

A button UI element from Uiverse.io by SteveBloX.

Source: https://uiverse.io/SteveBloX/proud-vampirebat-22

Author: SteveBloX

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: blue, black, button, hover, active

Colors: #000000, #0000ff

Fonts: inherit

Spacing and radius: 0.93em

## Source Code

### index.html

```html
<button>
    Button
</button>
```

### styles.css

```css
/* From Uiverse.io by SteveBloX - Tags: blue, black, button, hover, active */
button {
  font-family: inherit;
  width: 7.18em;
  height: 2.81em;
  cursor: pointer;
  background: #000000;
  border: 0.14em solid #0000FF;
  box-shadow: 0px 0.25em 0.25em rgba(0, 0, 0, 0.25);
  border-radius: 0.93em;
  transition: all 0.3s;
  color: white;
  font-size: 1.06em;
  text-transform: uppercase;
}

button:hover {
  width: 7.18em;
  height: 2.81em;
  box-shadow: 0px 0.81em 0.62em rgba(0, 0, 0, 0.25);
  background: blue;
  /*background: #000000;*/
  border-radius: 0.93em;
  transform: translate(0.38em, -0.37em);
}

button:active {
  transform: scale(0.90)
}
```

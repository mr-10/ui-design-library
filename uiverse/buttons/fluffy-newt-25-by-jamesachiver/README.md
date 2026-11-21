# Fluffy Newt 25

A button UI element from Uiverse.io by JamesAchiver.

Source: https://uiverse.io/JamesAchiver/fluffy-newt-25

Author: JamesAchiver

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #084748a8, #31b0d7de, #5b04bf, #d74589af, #fff

Fonts: Calibri

Spacing and radius: 0.6em

## Source Code

### index.html

```html
<button class="button">
  <b>
  Button
  </b>
</button>
```

### styles.css

```css
/* From Uiverse.io by JamesAchiver - Tags: button */
.button {
  position: relative;
  padding: 0.5em 1.2em;
  font-size: 1.8em;
  font-family: Calibri;
  background-color: #5b04bf;
  border: none;
  color: #FFF;
  cursor: pointer;
  align-items: center;
  box-shadow: inset 0px 38px 25px 0 #5b04bf, inset 0 0px 0px 0px #084748a8, inset 0 69px 0px 0px #d74589af;
  border-radius: 0.6em;
}

.button:hover {
  padding: 0.7em 1.4em;
  transition: 0.4s ease-in-out;
  box-shadow: inset 0px 38px 25px 5px #5b04bf, inset 10px 40px 10px 0px #084748a8, inset 0 69px 0px 0px #31b0d7de;
}

.button:active {
  box-shadow: 0.2em 0.2em 0.3em rgba(0,0,0,0.3);
  transform: translate(0.1em , 0.1em);
}
```

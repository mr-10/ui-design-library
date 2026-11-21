# Nasty Otter 73

A button UI element from Uiverse.io by KSAplay.

Source: https://uiverse.io/KSAplay/nasty-otter-73

Author: KSAplay

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #f11271, #fd3084, #feb1de, #fff6fb

Fonts: See styles.css

Spacing and radius: 15px

## Source Code

### index.html

```html
<button class="btn">
  PLAY
</button>
```

### styles.css

```css
/* From Uiverse.io by KSAplay - Tags: button */
.btn {
  padding: 0.5em 2em 0.5em 2.5em;
  font-size: 1em;
  font-weight: bold;
  border-radius: 15px;
  color: #fff6fb;
  letter-spacing: 0.3em;
  text-shadow: -2px 2px 5px #FD3084;
  background-color: transparent;
  border: 2px solid #FEB1DE;
  box-shadow: 0 0 0px 1px #F11271,
    0 0 10px 2px #FD3084,
    inset 0 0 0px 1px #F11271,
    inset 0 0 10px 2px #FD3084;
  transition: 100ms;
}

.btn:hover {
  box-shadow: 0 0 0px 1px #F11271,
    0 0 10px 2px #FD3084,
    inset 0 0 0px 1px #F11271,
    inset 0 0 30px 2px #FD3084;
  text-shadow: 0 0 10px #FD3084;
  transform: translateY(-5px);
}

.btn:active {
  box-shadow: 0 0 0px 1px #F11271,
    0 0 25px 2px #FD3084,
    inset 0 0 0px 1px #F11271,
    inset 0 0 30px 2px #FD3084;
  transform: translateY(1px);
}
```

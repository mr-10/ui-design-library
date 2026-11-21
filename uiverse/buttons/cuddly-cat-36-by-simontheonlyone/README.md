# Cuddly Cat 36

A button UI element from Uiverse.io by simontheonlyone.

Source: https://uiverse.io/simontheonlyone/cuddly-cat-36

Author: simontheonlyone

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: green, button, active

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 1em, 2.1em, 3em

## Source Code

### index.html

```html
<button>
</button>
```

### styles.css

```css
/* From Uiverse.io by simontheonlyone - Tags: green, button, active */
button {
  position: relative;
  width: 10em;
  height: 4em;
  border: none;
  border-radius: 2.1em;
  background-color: whitesmoke;
  box-shadow: 0 0 30px rgba(0, 0, 0, .22);
  cursor: pointer;
  transition: all 100ms;
}

button:active {
  transform: translate(5px, 5px);
  box-shadow: none;
}

button::before {
  content: '';
  position: absolute;
  inset: 43% 13%;
  width: 5.5em;
  height: .6em;
  border: none;
  border-radius: 3em;
  background-color: rgb(0, 209, 0);
  transition: all 300ms ease;
}

button::after {
  content: '';
  position: absolute;
  inset: 43% 77%;
  width: 1.1em;
  height: .6em;
  border: none;
  border-radius: 1em;
  background-color: rgb(0, 209, 0);
  transition: all 300ms ease;
}

button:active::before,
button:focus::before {
  width: 1.1em;
  background-color: red;
}

button:active::after,
button:focus::after {
  width: 5.5em;
  inset: 43% 33%;
  background-color: red;
}
```

# Fat Ladybug 84

A button UI element from Uiverse.io by AqFox.

Source: https://uiverse.io/AqFox/fat-ladybug-84

Author: AqFox

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: 3d, blue, button, glossy

Colors: #0000, #0004, #0005, #004dff, #fff, #fff5

Fonts: system-ui, sans-serif

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button>BUTTON</button>
```

### styles.css

```css
/* From Uiverse.io by AqFox - Tags: 3d, blue, button, glossy */
button {
  --c: #fff;
 /* text color */
  background: linear-gradient(90deg, #0000 33%, #fff5, #0000 67%) var(--_p,100%)/300% no-repeat,
    #004dff;
 /* background color */
  color: #0000;
  border: none;
  transform: perspective(500px) rotateY(calc(20deg*var(--_i,-1)));
  text-shadow: calc(var(--_i,-1)* 0.08em) -.01em 0   var(--c),
    calc(var(--_i,-1)*-0.08em)  .01em 2px #0004;
  outline-offset: .1em;
  transition: 0.3s;
}

button:hover,
button:focus-visible {
  --_p: 0%;
  --_i: 1;
}

button:active {
  text-shadow: none;
  color: var(--c);
  box-shadow: inset 0 0 9e9q #0005;
  transition: 0s;
}

button {
  font-family: system-ui, sans-serif;
  font-weight: bold;
  font-size: 2rem;
  margin: 0;
  cursor: pointer;
  padding: .1em .3em;
}
```

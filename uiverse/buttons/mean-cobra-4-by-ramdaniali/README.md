# Mean Cobra 4

A button UI element from Uiverse.io by ramdaniAli.

Source: https://uiverse.io/ramdaniAli/mean-cobra-4

Author: ramdaniAli

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #357af0, #4181f098, #cccccc, #d4d4d4, #ebebeb, #fbfbfb, #ffffff, #ffffff1f

Fonts: See styles.css

Spacing and radius: 20px

## Source Code

### index.html

```html
<button>
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by ramdaniAli - Tags: button */
button {
  color: #4181f098;
  text-transform: uppercase;
  letter-spacing: 5px;
  /* border: none; */
  font-weight: bold;
  font-size: 17px;
  padding: 1rem 2rem;
  border: 1px solid #ffffff1f;
  border-radius: 20px;
  background: #ebebeb;
  -webkit-box-shadow: 5px 5px 15px #cccccc,
              -5px -5px 15px #ffffff;
  box-shadow: 5px 5px 15px #cccccc,
              -5px -5px 15px #ffffff;
  -webkit-transition: box-shadow 0.3s ease-in-out;
  transition: box-shadow 0.3s ease-in-out;
}

button:hover {
  color: #357af0;
  background: linear-gradient(145deg, #d4d4d4, #fbfbfb);
  -webkit-box-shadow: 5px 5px 15px #cccccc,
              -5px -5px 15px #ffffff;
  box-shadow: 5px 5px 15px #cccccc,
              -5px -5px 15px #ffffff;
}

button:active {
  color: #357af0;
  background: #ebebeb;
  -webkit-box-shadow: inset 5px 5px 15px #cccccc,
              inset -5px -5px 15px #ffffff;
  box-shadow: inset 5px 5px 15px #cccccc,
              inset -5px -5px 15px #ffffff;
}
```

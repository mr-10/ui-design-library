# Spicy Turkey 3

A button UI element from Uiverse.io by ercnersoy.

Source: https://uiverse.io/ercnersoy/spicy-turkey-3

Author: ercnersoy

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 0.3rem

## Source Code

### index.html

```html
<button> hover me!
</button>
```

### styles.css

```css
/* From Uiverse.io by ercnersoy - Tags: button */
button {
 padding: 1rem 2rem;
 border: 0;
 box-shadow: 0px 0px 40px 0px red;
 font-weight: bolder;
 color: white;
 border-radius: 0.3rem;
 background-color: red;
 letter-spacing: .2rem;
}

button:hover {
 animation: changeBg 1s infinite;
 -webkit-animation-duration: 10s;
}

@keyframes changeBg {
 0%,
	100% {
  box-shadow: 0px 0px 40px 0px red;
 }

 25% {
  box-shadow: 0px 0px 40px 0px turquoise;
  background-color: turquoise;
 }

 50% {
  box-shadow: 0px 0px 40px 0px purple;
  background-color: purple;
 }

 75% {
  box-shadow: 0px 0px 40px 0px rgb(191, 204, 11);
  background-color: rgb(191, 204, 11);
 }
}
```

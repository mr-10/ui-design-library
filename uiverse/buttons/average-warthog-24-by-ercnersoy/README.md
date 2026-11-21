# Average Warthog 24

A button UI element from Uiverse.io by ercnersoy.

Source: https://uiverse.io/ercnersoy/average-warthog-24

Author: ercnersoy

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #5584ac, #ffffff

Fonts: 'Rajdhani', sans-serif

Spacing and radius: 30px, 30px 30px 0px 30px

## Source Code

### index.html

```html
<button>BUTTON</button>
```

### styles.css

```css
/* From Uiverse.io by ercnersoy - Tags: button */
button {
 padding: 20px 30px;
 border-radius: 30px;
 border: 5px solid #ffffff;
 background-color: #5584AC;
 font-size: 15px;
 color: white;
 letter-spacing: 5px;
 font-weight: bolder;
 animation: none;
 transition: all .5s ease-in-out;
 font-family: 'Rajdhani', sans-serif;
}

button:hover {
 border-radius: 30px 30px 0px 30px;
 box-shadow: inset 0px 30px 10px -25px black;
 transition: all .5s ease-in-out;
 animation: bounce42 1.6s infinite;
}

@keyframes bounce42 {
 0%, 20%, 50%, 80%, 100% {
  transform: translateY(0);
 }

 40% {
  transform: translateY(-5px);
 }

 60% {
  transform: translateY(-5px);
 }
}
```

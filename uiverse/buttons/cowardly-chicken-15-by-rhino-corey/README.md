# Cowardly Chicken 15

A button UI element from Uiverse.io by rhino-corey.

Source: https://uiverse.io/rhino-corey/cowardly-chicken-15

Author: rhino-corey

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #000000, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button> Hexagonal Button
</button>
```

### styles.css

```css
/* From Uiverse.io by rhino-corey - Tags: button */
button {
 display: inline-block;
 position: relative;
 color: #fff;
 font-weight: 500;
 font-size: 14px;
 text-decoration: none;
 text-transform: uppercase;
 padding: 15px 30px;
 text-align: center;
 border: none;
 clip-path: polygon(7% 0, 93% 0, 100% 50%, 93% 100%, 7% 100%, 0 50%);
 background-color: #000000;
 background-image: radial-gradient(200% 70% at center 20%, rgba(48,44,45,1) -30%, rgba(50,46,47,1) 49%, rgba(22,18,19,1) 50%, rgba(22,18,19,1) 150%);
 background-repeat: no-repeat;
 transition: background-position-y ease-in-out 250ms;
}

button:hover {
 background-position-y: -50px;
}

button:active {
 transform: scale(0.99);
}
```

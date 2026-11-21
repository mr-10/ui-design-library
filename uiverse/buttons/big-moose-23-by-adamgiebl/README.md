# Big Moose 23

A button UI element from Uiverse.io by adamgiebl.

Source: https://uiverse.io/adamgiebl/big-moose-23

Author: adamgiebl

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #27ae60, #2ecc71, #fff

Fonts: See styles.css

Spacing and radius: 3px

## Source Code

### index.html

```html
<button> Button
</button>
```

### styles.css

```css
/* From Uiverse.io by adamgiebl - Tags: button */
button {
 position: relative;
 padding: 10px 40px;
 margin: 0px 10px 10px 0px;
 float: left;
 border-radius: 3px;
 font-size: 20px;
 color: #FFF;
 text-decoration: none;
 background-color: #2ecc71;
 border: none;
 border-bottom: 5px solid #27ae60;
 text-shadow: 0px -2px #27ae60;
 -webkit-transition: all 0.1s;
 transition: all 0.1s;
}

button:hover, button:active {
 -webkit-transform: translate(0px,5px);
 -ms-transform: translate(0px,5px);
 transform: translate(0px,5px);
 border-bottom: 1px solid #2ecc71;
}
```

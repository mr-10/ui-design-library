# Warm Zebra 80

A button UI element from Uiverse.io by Mike11jr.

Source: https://uiverse.io/Mike11jr/warm-zebra-80

Author: Mike11jr

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #000, #0d3b66, #131313, #4cc9f0, #ecd448, #ff6700, #fff

Fonts: See styles.css

Spacing and radius: 12px

## Source Code

### index.html

```html
<button class="btn"> Shop now
</button>
```

### styles.css

```css
/* From Uiverse.io by Mike11jr - Tags: button */
.btn {
 padding: 1.1em 2em;
 background: none;
 border: 2px solid #fff;
 font-size: 15px;
 color: #131313;
 cursor: pointer;
 position: relative;
 overflow: hidden;
 transition: all 0.3s;
 border-radius: 12px;
 background-color: #ecd448;
 font-weight: bolder;
 box-shadow: 0 2px 0 2px #000;
}

.btn:before {
 content: "";
 position: absolute;
 width: 100px;
 height: 120%;
 background-color: #ff6700;
 top: 50%;
 transform: skewX(30deg) translate(-150%, -50%);
 transition: all 0.5s;
}

.btn:hover {
 background-color: #4cc9f0;
 color: #fff;
 box-shadow: 0 2px 0 2px #0d3b66;
}

.btn:hover::before {
 transform: skewX(30deg) translate(150%, -50%);
 transition-delay: 0.1s;
}

.btn:active {
 transform: scale(0.9);
}
```

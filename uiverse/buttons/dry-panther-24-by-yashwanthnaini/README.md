# Dry Panther 24

A button UI element from Uiverse.io by Yashwanthnaini.

Source: https://uiverse.io/Yashwanthnaini/dry-panther-24

Author: Yashwanthnaini

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #03a9f4, #f441a5, #ffeb3b, #ffffff, #ffffff10

Fonts: 'Ropa Sans', sans-serif

Spacing and radius: 20px

## Source Code

### index.html

```html
<button>
  <span> HOVER
  </span>
</button>
```

### styles.css

```css
/* From Uiverse.io by Yashwanthnaini - Tags: button */
button {
 border: none;
 border-radius: 20px;
 background: linear-gradient(32deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
 transition: all 1.5s ease;
 font-family: 'Ropa Sans', sans-serif;
 font-weight: bold;
 letter-spacing: 0.05rem;
 padding: 0;
}

button span {
 display: inline-block;
 padding: 15px 35px;
 font-size: 17px;
 border-radius: 20px;
 background: #ffffff10;
 backdrop-filter: blur(20px);
 transition: 0.4s ease-in-out;
 transition-property: color;
 height: 100%;
 width: 100%;
}

button span:hover {
 backdrop-filter: blur(0px);
 color: #ffffff;
}
```

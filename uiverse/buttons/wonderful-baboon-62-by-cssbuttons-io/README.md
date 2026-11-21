# Wonderful Baboon 62

A button UI element from Uiverse.io by cssbuttons-io.

Source: https://uiverse.io/cssbuttons-io/wonderful-baboon-62

Author: cssbuttons-io

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, button

Colors: #00ddeb, #5b42f3, #af40ff, #ffffff

Fonts: Phantomsans, sans-serif

Spacing and radius: 6px, 8px

## Source Code

### index.html

```html
<button>
  <span class="text">Button</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by cssbuttons-io - Tags: gradient, button */
button {
 align-items: center;
 background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
 border: 0;
 border-radius: 8px;
 box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
 box-sizing: border-box;
 color: #FFFFFF;
 display: flex;
 font-family: Phantomsans, sans-serif;
 font-size: 18px;
 justify-content: center;
 line-height: 1em;
 max-width: 100%;
 min-width: 140px;
 padding: 3px;
 text-decoration: none;
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 white-space: nowrap;
 cursor: pointer;
 transition: all .3s;
}

button:active,
button:hover {
 outline: 0;
}

button span {
 background-color: rgb(5, 6, 45);
 padding: 16px 24px;
 border-radius: 6px;
 width: 100%;
 height: 100%;
 transition: 300ms;
}

button:hover span {
 background: none;
}

button:active {
 transform: scale(0.9);
}
```

# Rotten Swan 33

A button UI element from Uiverse.io by meermubashar.

Source: https://uiverse.io/meermubashar/rotten-swan-33

Author: meermubashar

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #b9b9b9

Fonts: 'Times New Roman', Times, serif

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button> Button
</button>
```

### styles.css

```css
/* From Uiverse.io by meermubashar - Tags: button */
button {
 width: 140px;
 height: 45px;
 font-size: 23px;
 cursor: pointer;
 border: none;
 outline: none;
 background: transparent;
 color: white;
 font-family: 'Times New Roman', Times, serif;
 font-weight: 700;
 position: relative;
 transition: all 0.5s;
 z-index: 1;
}

button::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 width: 5px;
 height: 100%;
 background-color: white;
 z-index: -1;
 transition: all 0.5s;
}

button:hover::before {
 width: 100%;
}

button:hover {
 color: black;
}

button:active:before {
 background: #b9b9b9;
}
```

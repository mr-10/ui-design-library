# Afraid Monkey 100

A button UI element from Uiverse.io by cuatrofender.

Source: https://uiverse.io/cuatrofender/afraid-monkey-100

Author: cuatrofender

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #006bb3

Fonts: sans-serif

Spacing and radius: 4px

## Source Code

### index.html

```html
<button> Hover me.
</button>
```

### styles.css

```css
/* From Uiverse.io by cuatrofender - Tags: button */
button {
 border: none;
 font-family: sans-serif;
 font-size: 17px;
 background: transparent;
 color: #006bb3;
 border: solid 1px rgba(0, 107, 179, 0.2);
 padding: 10px;
 border-radius: 4px;
 transition-duration: 0.2s;
}

button:before {
 content: "»";
 opacity: 0;
 margin-left: -15px;
 transition-duration: 0.2s;
}

button:hover:before {
 margin-left: 0px;
 opacity: 1;
}

button:hover {
 color: black;
 background: rgba(0, 0, 0, 0.02);
 border: solid 1px gainsboro;
}
```

# Great Falcon 16

A button UI element from Uiverse.io by e-coders.

Source: https://uiverse.io/e-coders/great-falcon-16

Author: e-coders

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #111827, #374151, #6b7280, #ffffff

Fonts: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"

Spacing and radius: .75rem

## Source Code

### index.html

```html
<button>Button</button>
```

### styles.css

```css
/* From Uiverse.io by e-coders - Tags: button */
button {
 background-color: #111827;
 border: 1px solid transparent;
 border-radius: .75rem;
 box-sizing: border-box;
 color: #FFFFFF;
 cursor: pointer;
 flex: 0 0 auto;
 font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
 font-size: 1.125rem;
 font-weight: 600;
 line-height: 1.5rem;
 padding: .75rem 1.2rem;
 text-align: center;
 text-decoration: none #6B7280 solid;
 text-decoration-thickness: auto;
 transition-duration: .2s;
 transition-property: background-color,border-color,color,fill,stroke;
 transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 width: auto;
}

button:hover {
 background-color: #374151;
}

button:focus {
 box-shadow: none;
 outline: 2px solid white;
 outline-offset: 2px;
}

@media (min-width: 768px) {
 button {
  padding: .75rem 1.5rem;
 }
}
```

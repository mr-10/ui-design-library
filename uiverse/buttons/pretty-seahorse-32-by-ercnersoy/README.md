# Pretty Seahorse 32

A button UI element from Uiverse.io by ercnersoy.

Source: https://uiverse.io/ercnersoy/pretty-seahorse-32

Author: ercnersoy

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #91c0ff99

Fonts: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif

Spacing and radius: 26px

## Source Code

### index.html

```html
<button> Click me !
</button>
```

### styles.css

```css
/* From Uiverse.io by ercnersoy - Tags: button */
button {
 padding: 1em 1.6em;
 border: 0;
 transition: all .5s ease-in-out;
 font-size: 17px;
 letter-spacing: 0.1rem;
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 color: rgb(0, 0, 0);
 font-weight: bolder;
 backdrop-filter: blur(5px);
 background-color: rgba(255, 255, 255, 1);
 border-radius: 26px;
 box-shadow: 0px 0px 0px 0px rgba(145, 192, 255, 0.5),
             inset -8px -8px 16px 0px rgba(145, 193, 255, 0.973),
             inset 0px 11px 28px 0px rgb(255, 255, 255);
}

button:hover {
 transition: all .5s ease-in-out;
 backdrop-filter: blur(5px);
 background-color: rgba(255, 255, 255, 1);
 border-radius: 26px;
 box-shadow: 0px 0px 0px 0px rgba(145, 192, 255, 0.5),
              inset 8px -8px 16px 10px rgb(145, 193, 255),
              inset 0px 11px 28px 0px rgb(255, 255, 255);
}

button:active {
 border-radius: 26px;
 box-shadow: 0px 0px 0px 0px rgba(145, 193, 255, 0.822),
  inset -8px -8px 16px 10px #91c0ff99,
  inset 0px 11px 28px 50px rgb(255, 255, 255);
}
```

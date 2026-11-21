# Spotty Snail 58

A button UI element from Uiverse.io by bhaveshxrawat.

Source: https://uiverse.io/bhaveshxrawat/spotty-snail-58

Author: bhaveshxrawat

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #181818, #191919, #212121, #292929, #2e2e2e

Fonts: inherit

Spacing and radius: 9px

## Source Code

### index.html

```html
<button><span> Grab it!</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by bhaveshxrawat - Tags: button */
button {
 border: none;
 padding: 0.7em 2em;
 font-size: 18px;
 font-family: inherit;
 background-blend-mode: multiply;
 color: rgb(235, 234, 234);
 border-radius: 9px;
 background: linear-gradient(225deg, #181818, #2e2e2e);
 box-shadow: -5px 5px 10px #191919,
             5px -5px 10px #292929;
}

button:hover {
 background: #212121;
 transition: background 1s ease;
 box-shadow: -5px 5px 10px #191919,
             5px -5px 10px #292929;
}

button:active {
 transition: box-shadow .1s ease;
 border-radius: 9px;
 background: #212121;
 box-shadow: inset -5px 5px 10px #191919,
              inset 5px -5px 10px #292929;
}

span {
 opacity: 0.5;
 transition: opacity 0.2s ease;
}

button:hover span {
 opacity: 0.7;
}
```

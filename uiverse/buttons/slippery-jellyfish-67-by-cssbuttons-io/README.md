# Slippery Jellyfish 67

A button UI element from Uiverse.io by cssbuttons-io.

Source: https://uiverse.io/cssbuttons-io/slippery-jellyfish-67

Author: cssbuttons-io

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #3a0ca3, #560bad, #fff

Fonts: inherit

Spacing and radius: 50%, 6px

## Source Code

### index.html

```html
<button> Hover me
</button>
```

### styles.css

```css
/* From Uiverse.io by cssbuttons-io - Tags: button */
button {
 --color: #560bad;
 font-family: inherit;
 display: inline-block;
 width: 8em;
 height: 2.6em;
 line-height: 2.5em;
 margin: 20px;
 position: relative;
 overflow: hidden;
 border: 2px solid var(--color);
 transition: color .5s;
 z-index: 1;
 font-size: 17px;
 border-radius: 6px;
 font-weight: 500;
 color: var(--color);
}

button:before {
 content: "";
 position: absolute;
 z-index: -1;
 background: var(--color);
 height: 150px;
 width: 200px;
 border-radius: 50%;
}

button:hover {
 color: #fff;
}

button:before {
 top: 100%;
 left: 100%;
 transition: all .7s;
}

button:hover:before {
 top: -30px;
 left: -30px;
}

button:active:before {
 background: #3a0ca3;
 transition: background 0s;
}
```

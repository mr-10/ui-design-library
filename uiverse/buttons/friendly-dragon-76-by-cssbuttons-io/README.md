# Friendly Dragon 76

A button UI element from Uiverse.io by cssbuttons-io.

Source: https://uiverse.io/cssbuttons-io/friendly-dragon-76

Author: cssbuttons-io

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #fff

Fonts: inherit

Spacing and radius: 100px, 6em

## Source Code

### index.html

```html
<button class="btn"> Button
</button>
```

### styles.css

```css
/* From Uiverse.io by cssbuttons-io - Tags: button */
.btn {
 position: relative;
 font-size: 17px;
 text-transform: uppercase;
 text-decoration: none;
 padding: 1em 2.5em;
 display: inline-block;
 border-radius: 6em;
 transition: all .2s;
 border: none;
 font-family: inherit;
 font-weight: 500;
 color: black;
 background-color: white;
}

.btn:hover {
 transform: translateY(-3px);
 box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
 transform: translateY(-1px);
 box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn::after {
 content: "";
 display: inline-block;
 height: 100%;
 width: 100%;
 border-radius: 100px;
 position: absolute;
 top: 0;
 left: 0;
 z-index: -1;
 transition: all .4s;
}

.btn::after {
 background-color: #fff;
}

.btn:hover::after {
 transform: scaleX(1.4) scaleY(1.6);
 opacity: 0;
}
```

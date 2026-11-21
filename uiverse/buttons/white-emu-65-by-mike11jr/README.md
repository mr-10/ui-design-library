# White Emu 65

A button UI element from Uiverse.io by Mike11jr.

Source: https://uiverse.io/Mike11jr/white-emu-65

Author: Mike11jr

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #38b6ff, #6285f8, #cb6ce6

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<button class="btn"> Hover Me!
</button>
```

### styles.css

```css
/* From Uiverse.io by Mike11jr - Tags: button */
.btn {
 padding: 0.9em 1.9em;
 font-size: 16px;
 border: none;
 background: #6285f8;
 color: white;
 cursor: pointer;
 position: relative;
 z-index: 1;
}

.btn:hover {
 color: rgb(255, 255, 255);
}

.btn::before,.btn::after {
 content: "";
 position: absolute;
 top: 0%;
 left: 0%;
 width: 100%;
 height: 100%;
 background: rgba(128, 128, 128, 0.096);
 backdrop-filter: blur(10px);
 z-index: -1;
 transition: all 0.4s;
}

.btn::after {
 z-index: -2;
 transition: all 0.4s;
}

.btn:hover::before {
 background: rgb(0, 0, 0, 0.315);
 border-radius: 10px;
}

.btn:hover::after {
 background: linear-gradient(to right, #cb6ce6, #38b6ff);
 border-radius: 10px;
 transform: scale(1.07, 1.2) rotateX(180deg);
}
```

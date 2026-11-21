# Nasty Fish 9

A button UI element from Uiverse.io by CristianMontoya98.

Source: https://uiverse.io/CristianMontoya98/nasty-fish-9

Author: CristianMontoya98

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 0.625em

## Source Code

### index.html

```html
<button class="btn"> Button
</button>
```

### styles.css

```css
/* From Uiverse.io by CristianMontoya98 - Tags: button */
.btn {
 width: 6.5em;
 height: 2.3em;
 margin: 0.5em;
 background: black;
 color: white;
 border: none;
 border-radius: 0.625em;
 font-size: 20px;
 font-weight: bold;
 cursor: pointer;
 position: relative;
 z-index: 1;
 overflow: hidden;
}

button:hover {
 color: black;
}

button:after {
 content: "";
 background: white;
 position: absolute;
 z-index: -1;
 left: -20%;
 right: -20%;
 top: 0;
 bottom: 0;
 transform: skewX(-45deg) scale(0, 1);
 transition: all 0.5s;
}

button:hover:after {
 transform: skewX(-45deg) scale(1, 1);
 -webkit-transition: all 0.5s;
 transition: all 0.5s;
}
```

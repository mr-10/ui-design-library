# Young Eagle 60

A button UI element from Uiverse.io by gksckt.

Source: https://uiverse.io/gksckt/young-eagle-60

Author: gksckt

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #000, #444141, #53cbef, #dcc66c, #ffa3b6, #fff

Fonts: See styles.css

Spacing and radius: 4px

## Source Code

### index.html

```html
<button> Button
</button>
```

### styles.css

```css
/* From Uiverse.io by gksckt - Tags: button */
button {
 background-color: #444141;
 border-radius: 4px;
 color: #fff;
 cursor: pointer;
 padding: 15px 30px;
 font-size: 18px;
 font-weight: bold;
 letter-spacing: 1px;
 border: none;
}

button:hover {
 background-image: linear-gradient(90deg, #53cbef 0%, #dcc66c 50%, #ffa3b6 75%, #53cbef 100%);
 animation: slidernbw 5s linear infinite;
 color: #000;
}

@keyframes slidernbw {
 to {
  background-position: 20vw;
 }
}
```

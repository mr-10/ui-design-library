# Heavy Yak 65

A button UI element from Uiverse.io by Zena4L.

Source: https://uiverse.io/Zena4L/heavy-yak-65

Author: Zena4L

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 1000px, 100px

## Source Code

### index.html

```html
<a href="#" class="btn"> Click Me</a>
```

### styles.css

```css
/* From Uiverse.io by Zena4L - Tags: button */
.btn:link,
.btn:visited {
 text-transform: uppercase;
 text-decoration: none;
 color: rgb(27, 27, 27);
 padding: 10px 30px;
 border: 1px solid;
 border-radius: 1000px;
 display: inline-block;
 transition: all .2s;
 position: relative;
}

.btn:hover {
 transform: translateY(-5px);
 box-shadow: 0 10px 20px rgba(27, 27, 27, .5);
}

.btn:active {
 transform: translateY(-3px);
}

.btn::after {
 content: "";
 display: inline-block;
 height: 100%;
 width: 100%;
 border-radius: 100px;
 top: 0;
 left: 0;
 position: absolute;
 z-index: -1;
 transition: all .3s;
}

.btn:hover::after {
 background-color: rgb(0, 238, 255);
 transform: scaleX(1.4) scaleY(1.5);
 opacity: 0;
}
```

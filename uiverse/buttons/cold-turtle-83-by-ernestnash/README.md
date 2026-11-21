# Cold Turtle 83

A button UI element from Uiverse.io by ernestnash.

Source: https://uiverse.io/ernestnash/cold-turtle-83

Author: ernestnash

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: See styles.css

Fonts: inherit

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<a class="btn" href="#">I am a button</a>
```

### styles.css

```css
/* From Uiverse.io by ernestnash - Tags: button */
.btn {
 display: inline-block;
 padding: 0.9rem 1.8rem;
 font-size: 16px;
 font-weight: 700;
 color: white;
 border: 3px solid rgb(252, 70, 100);
 cursor: pointer;
 position: relative;
 background-color: transparent;
 text-decoration: none;
 overflow: hidden;
 z-index: 1;
 font-family: inherit;
}

.btn::before {
 content: "";
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 background-color: rgb(252, 70, 100);
 transform: translateX(-100%);
 transition: all .3s;
 z-index: -1;
}

.btn:hover::before {
 transform: translateX(0);
}
```

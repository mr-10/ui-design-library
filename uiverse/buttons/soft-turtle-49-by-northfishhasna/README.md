# Soft Turtle 49

A button UI element from Uiverse.io by NorthFishHasNa.

Source: https://uiverse.io/NorthFishHasNa/soft-turtle-49

Author: NorthFishHasNa

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #3d405b, #ffffff

Fonts: See styles.css

Spacing and radius: 4px

## Source Code

### index.html

```html
<button>
  <span>Button</span>
</button>
```

### styles.css

```css
/* From Uiverse.io by NorthFishHasNa - Tags: button */
button {
 display: inline-block;
 border-radius: 4px;
 background-color: #3d405b;
 border: none;
 color: #FFFFFF;
 text-align: center;
 font-size: 17px;
 padding: 16px;
 width: 130px;
 transition: all 0.5s;
 cursor: pointer;
 margin: 5px;
}

button span {
 cursor: pointer;
 display: inline-block;
 position: relative;
 transition: 0.5s;
}

button span:after {
 content: '»';
 position: absolute;
 opacity: 0;
 top: 0;
 right: -15px;
 transition: 0.5s;
}

button:hover span {
 padding-right: 15px;
}

button:hover span:after {
 opacity: 1;
 right: 0;
}
```

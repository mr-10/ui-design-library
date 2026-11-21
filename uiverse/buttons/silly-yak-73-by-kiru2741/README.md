# Silly Yak 73

A button UI element from Uiverse.io by kiru2741.

Source: https://uiverse.io/kiru2741/silly-yak-73

Author: kiru2741

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button> Button
</button>
```

### styles.css

```css
/* From Uiverse.io by kiru2741 - Tags: button */
button {
 padding: 10px;
 font-size: 15px;
 outline: none;
 border: 2px solid black;
 background-color: white;
 color: white;
 position: relative;
 letter-spacing: 1px;
}

button::before {
 content: 'Button';
 /*Button's value/text-content */
 position: absolute;
 top: -14%;
 left: 7%;
 background-color: black;
 width: 100%;
 height: 100%;
 color: white;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: 0.15s ease-in-out;
 font-weight: bold;
}

button:hover::before {
 top: 0;
 left: 0;
}
```

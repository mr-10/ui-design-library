# Rotten Pig 19

A button UI element from Uiverse.io by xueyuantan.

Source: https://uiverse.io/xueyuantan/rotten-pig-19

Author: xueyuantan

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #0fd850, #c5c5c5, #f9f047, #ffffff

Fonts: inherit

Spacing and radius: 30em

## Source Code

### index.html

```html
<button> Pick up!
</button>
```

### styles.css

```css
/* From Uiverse.io by xueyuantan - Tags: button */
button {
 width: 9em;
 height: 3em;
 border-radius: 30em;
 font-size: 15px;
 font-family: inherit;
 border: none;
 position: relative;
 overflow: hidden;
 z-index: 1;
 box-shadow: 6px 6px 12px #c5c5c5,
             -6px -6px 12px #ffffff;
}

button::before {
 content: '';
 width: 0;
 height: 3em;
 border-radius: 30em;
 position: absolute;
 top: 0;
 left: 0;
 background-image: linear-gradient(to right, #0fd850 0%, #f9f047 100%);
 transition: .5s ease;
 display: block;
 z-index: -1;
}

button:hover::before {
 width: 9em;
}
```

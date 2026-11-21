# Nasty Cat 19

A button UI element from Uiverse.io by aasisodiya.

Source: https://uiverse.io/aasisodiya/nasty-cat-19

Author: aasisodiya

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #bcb4b4, #dfd9d9, #eee

Fonts: See styles.css

Spacing and radius: 1rem

## Source Code

### index.html

```html
<button> Button
</button>
```

### styles.css

```css
/* From Uiverse.io by aasisodiya - Tags: button */
button {
 background-color: #eee;
 border: none;
 padding: 1rem;
 font-size: 1rem;
 width: 10em;
 border-radius: 1rem;
 color: lightcoral;
 box-shadow: 0 0.4rem #dfd9d9;
 cursor: pointer;
}

button:active {
 color: white;
 box-shadow: 0 0.2rem #dfd9d9;
 transform: translateY(0.2rem);
}

button:hover:not(:disabled) {
 background: lightcoral;
 color: white;
 text-shadow: 0 0.1rem #bcb4b4;
}

button:disabled {
 cursor: auto;
 color: grey;
}
```

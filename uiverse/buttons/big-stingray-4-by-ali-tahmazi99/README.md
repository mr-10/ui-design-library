# Big Stingray 4

A button UI element from Uiverse.io by Ali-Tahmazi99.

Source: https://uiverse.io/Ali-Tahmazi99/big-stingray-4

Author: Ali-Tahmazi99

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #03045e, #240046, #5a189a, #e0aaff

Fonts: See styles.css

Spacing and radius: 10px

## Source Code

### index.html

```html
<button>
  <span> Button
  </span>
</button>
```

### styles.css

```css
/* From Uiverse.io by Ali-Tahmazi99 - Tags: button */
/* From uiverse.io by @Ali-Tahmazi99 */
button {
 display: inline-block;
 width: 150px;
 height: 50px;
 border-radius: 10px;
 border: 1px solid #03045e;
 position: relative;
 overflow: hidden;
 transition: all 0.5s ease-in;
 z-index: 1;
}

button::before,
button::after {
 content: '';
 position: absolute;
 top: 0;
 width: 0;
 height: 100%;
 transform: skew(15deg);
 transition: all 0.5s;
 overflow: hidden;
 z-index: -1;
}

button::before {
 left: -10px;
 background: #240046;
}

button::after {
 right: -10px;
 background: #5a189a;
}

button:hover::before,
button:hover::after {
 width: 58%;
}

button:hover span {
 color: #e0aaff;
 transition: 0.3s;
}

button span {
 color: #03045e;
 font-size: 18px;
 transition: all 0.3s ease-in;
}
```

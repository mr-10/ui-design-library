# Nasty Deer 97

A button UI element from Uiverse.io by Botwe-Felix5820.

Source: https://uiverse.io/Botwe-Felix5820/nasty-deer-97

Author: Botwe-Felix5820

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, shake

Colors: #016dd9, #ffffff

Fonts: inherit

Spacing and radius: 10em

## Source Code

### index.html

```html
<button> Shake
</button>
```

### styles.css

```css
/* From Uiverse.io by Botwe-Felix5820 - Tags: button, shake */
button {
 height: 3em;
 width: 8em;
 border: none;
 border-radius: 10em;
 background: #016DD9;
 font-size: 17px;
 color: #ffffff;
 font-family: inherit;
 font-weight: 500;
}

button:hover {
 animation: shake3856 0.3s linear infinite both;
}

@keyframes shake3856 {
 0% {
  -webkit-transform: translate(0);
  transform: translate(0);
 }

 20% {
  -webkit-transform: translate(-2px, 2px);
  transform: translate(-2px, 2px);
 }

 40% {
  -webkit-transform: translate(-2px, -2px);
  transform: translate(-2px, -2px);
 }

 60% {
  -webkit-transform: translate(2px, 2px);
  transform: translate(2px, 2px);
 }

 80% {
  -webkit-transform: translate(2px, -2px);
  transform: translate(2px, -2px);
 }

 100% {
  -webkit-transform: translate(0);
  transform: translate(0);
 }
}
```

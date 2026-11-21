# Big Baboon 67

A button UI element from Uiverse.io by Botwe-Felix5820.

Source: https://uiverse.io/Botwe-Felix5820/big-baboon-67

Author: Botwe-Felix5820

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, squishy

Colors: #016dd9, #ffffff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button> Squeeze me
</button>
```

### styles.css

```css
/* From Uiverse.io by Botwe-Felix5820 - Tags: button, squishy */
button {
 height: 2.8em;
 width: 9em;
 background: transparent;
 -webkit-animation: jello-horizontal 0.9s both;
 animation: jello-horizontal 0.9s both;
 border: 2px solid #016DD9;
 outline: none;
 color: #016DD9;
 font-size: 17px;
}

button:hover {
 background: #016DD9;
 color: #ffffff;
 animation: squeeze3124 0.9s both;
}

@keyframes squeeze3124 {
 0% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
 }

 30% {
  -webkit-transform: scale3d(1.25, 0.75, 1);
  transform: scale3d(1.25, 0.75, 1);
 }

 40% {
  -webkit-transform: scale3d(0.75, 1.25, 1);
  transform: scale3d(0.75, 1.25, 1);
 }

 50% {
  -webkit-transform: scale3d(1.15, 0.85, 1);
  transform: scale3d(1.15, 0.85, 1);
 }

 65% {
  -webkit-transform: scale3d(0.95, 1.05, 1);
  transform: scale3d(0.95, 1.05, 1);
 }

 75% {
  -webkit-transform: scale3d(1.05, 0.95, 1);
  transform: scale3d(1.05, 0.95, 1);
 }

 100% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
 }
}
```

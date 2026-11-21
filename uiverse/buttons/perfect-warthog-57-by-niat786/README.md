# Perfect Warthog 57

A button UI element from Uiverse.io by niat786.

Source: https://uiverse.io/niat786/perfect-warthog-57

Author: niat786

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #0400ff, #05bada66, #4ce3f7, #fff

Fonts: inherit

Spacing and radius: 20px

## Source Code

### index.html

```html
<button> Button
</button>
```

### styles.css

```css
/* From Uiverse.io by niat786 - Tags: button */
button {
 border: none;
 color: #fff;
 background-image: linear-gradient(30deg, #0400ff, #4ce3f7);
 border-radius: 20px;
 background-size: 100% auto;
 font-family: inherit;
 font-size: 17px;
 padding: 0.6em 1.5em;
}

button:hover {
 background-position: right center;
 background-size: 200% auto;
 -webkit-animation: pulse 2s infinite;
 animation: pulse512 1.5s infinite;
}

@keyframes pulse512 {
 0% {
  box-shadow: 0 0 0 0 #05bada66;
 }

 70% {
  box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
 }

 100% {
  box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
 }
}
```

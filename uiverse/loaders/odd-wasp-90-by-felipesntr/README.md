# Odd Wasp 90

A loader UI element from Uiverse.io by felipesntr.

Source: https://uiverse.io/felipesntr/odd-wasp-90

Author: felipesntr

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loader

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 100%

## Source Code

### index.html

```html
<div class="loader">
<div class="in"></div>
<div class="out-1"></div>
<div class="out-2"></div>
<div class="out-3"></div>
</div>
```

### styles.css

```css
/* From Uiverse.io by felipesntr - Tags: loader */
.loader {
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
}

.out-1 {
 position: absolute;
 width: 4em;
 height: 4em;
 border-radius: 100%;
 border: 0.2em solid transparent;
 border-top-color: rgb(43, 226, 83);
 animation: rec 2s infinite;
 transition: all ease-in-out 0.3s;
}

.out-2 {
 position: absolute;
 width: 4em;
 height: 4em;
 border-radius: 100%;
 border: 0.2em solid transparent;
 border-left-color: rgb(226, 223, 43);
 animation: rec 2s infinite;
 transition: all ease-in-out 0.3s;
}

.out-3 {
 position: absolute;
 width: 4em;
 height: 4em;
 border-radius: 100%;
 border: 0.2em solid transparent;
 border-bottom-color: rgb(51, 105, 252);
 animation: rec 2s infinite;
 transition: all ease-in-out 0.3s;
}

.in {
 position: absolute;
 border-radius: 100%;
 border: 0.2em solid rgba(43, 226, 83, 0.11);
 width: 4em;
 height: 4em;
 transition: all ease-in-out 0.3s;
}

@keyframes rec {
 0% {
  transform: rotate(360deg);
 }
}
```

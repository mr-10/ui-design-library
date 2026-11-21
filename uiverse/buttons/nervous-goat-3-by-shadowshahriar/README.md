# Nervous Goat 3

A button UI element from Uiverse.io by ShadowShahriar.

Source: https://uiverse.io/ShadowShahriar/nervous-goat-3

Author: ShadowShahriar

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, button

Colors: #000, #212121, #29dbbc, #488cfb, #655adc, #ddf505, #e440bb, #ff9f0e, #fff

Fonts: "Roboto", Arial, "Segoe UI", sans-serif

Spacing and radius: 15px, var(--border-radius)

## Source Code

### index.html

```html
<button>Hover me!</button>
```

### styles.css

```css
/* From Uiverse.io by ShadowShahriar - Tags: gradient, button */
button {
 --border-radius: 15px;
 --border-width: 4px;
 appearance: none;
 position: relative;
 padding: 1em 2em;
 border: 0;
 background-color: #212121;
 font-family: "Roboto", Arial, "Segoe UI", sans-serif;
 font-size: 18px;
 font-weight: 500;
 color: #fff;
 z-index: 2;
}

button::after {
 --m-i: linear-gradient(#000, #000);
 --m-o: content-box, padding-box;
 content: "";
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 padding: var(--border-width);
 border-radius: var(--border-radius);
 background-image: conic-gradient(
		#488cfb,
		#29dbbc,
		#ddf505,
		#ff9f0e,
		#e440bb,
		#655adc,
		#488cfb
	);
 -webkit-mask-image: var(--m-i), var(--m-i);
 mask-image: var(--m-i), var(--m-i);
 -webkit-mask-origin: var(--m-o);
 mask-origin: var(--m-o);
 -webkit-mask-clip: var(--m-o);
 mask-composite: exclude;
 -webkit-mask-composite: destination-out;
 filter: hue-rotate(0);
 animation: rotate-hue linear 500ms infinite;
 animation-play-state: paused;
}

button:hover::after {
 animation-play-state: running;
}

@keyframes rotate-hue {
 to {
  filter: hue-rotate(1turn);
 }
}

button,
button::after {
 box-sizing: border-box;
}

button:active {
 --border-width: 5px;
}
```

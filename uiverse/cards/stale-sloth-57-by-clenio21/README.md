# Stale Sloth 57

A card UI element from Uiverse.io by Clenio21.

Source: https://uiverse.io/Clenio21/stale-sloth-57

Author: Clenio21

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: card

Colors: #000, #29dbbc, #488cfb, #655adc, #ddf505, #e440bb, #ff9f0e, #fff

Fonts: See styles.css

Spacing and radius: 15px, var(--border-radius)

## Source Code

### index.html

```html
<div class="card"></div>
```

### styles.css

```css
/* From Uiverse.io by Clenio21 - Tags: card */
.card {
 width: 190px;
 height: 254px;
 --border-radius: 15px;
 --border-width: 4px;
 appearance: none;
 position: relative;
 padding: 1em 2em;
 border: 0;
 background: rgb(5, 5, 22);
 font-size: 18px;
 font-weight: 500;
 color: #fff;
 z-index: 2;
 border-radius: 15px;
}

.card::after {
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

.card:hover::after {
 animation-play-state: running;
}

@keyframes rotate-hue {
 to {
  filter: hue-rotate(1turn);
 }
}

.card,
.card::after {
 box-sizing: border-box;
}

.card:active {
 --border-width: 5px;
}
```

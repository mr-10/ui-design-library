# Pretty Yak 93

A button UI element from Uiverse.io by JesusRafaelNavaCruz.

Source: https://uiverse.io/JesusRafaelNavaCruz/pretty-yak-93

Author: JesusRafaelNavaCruz

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: loading, animated, loading animation

Colors: #8338ec, #c19bf5, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="content">
  <div class="text">LOADING...</div>
  <div class="text">LOADING...</div>
</div>
```

### styles.css

```css
/* From Uiverse.io by JesusRafaelNavaCruz - Source: Oluwakemi - https://codepen.io/techgirldiaries/pen/LYWPJPN - Tags: loading, animated, loading animation */
.content {
  position: relative;
}

.content .text {
  color: #fff;
  font-size: 3rem;
  position: absolute;
  transform: translate(-50%, -50%);
}

.content .text:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px #8338ec;
}

.content .text:nth-child(2) {
  color: #c19bf5;
  animation: animate 4s ease-in-out infinite;
}

@keyframes animate {
  0%,
	100% {
    clip-path: polygon(
			0% 45%,
			16% 44%,
			33% 50%,
			54% 60%,
			70% 61%,
			84% 59%,
			100% 52%,
			100% 100%,
			0% 100%
		);
  }

  50% {
    clip-path: polygon(
			0% 60%,
			15% 65%,
			34% 66%,
			51% 62%,
			67% 50%,
			84% 45%,
			100% 46%,
			100% 100%,
			0% 100%
		);
  }
}
```

# Neat Goat 26

A loader UI element from Uiverse.io by vk-uiux.

Source: https://uiverse.io/vk-uiux/neat-goat-26

Author: vk-uiux

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, loading, card, loader, placeholder, animated, css, css effect, skeleton loading

Colors: #ccc

Fonts: See styles.css

Spacing and radius: .8rem, inherit

## Source Code

### index.html

```html
<div class="card">
  <div class="card__skeleton card__title"></div>
  <div class="card__skeleton card__description">         </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by vk-uiux - Tags: animation, loading, card, loader, placeholder, animated, css, css effect, skeleton loading  */
.card {
  width: 18rem;
  padding: 1rem;
  text-align: center;
  border-radius: .8rem;
  background-color: white;
}

.card__skeleton {
  background-image: linear-gradient(
		90deg,
		#ccc 0px,
		rgb(229 229 229 / 90%) 40px,
		#ccc 80px
	);
  background-size: 300%;
  background-position: 100% 0;
  border-radius: inherit;
  animation: shimmer 1.5s infinite;
}

.card__title {
  height: 15px;
  margin-bottom: 15px;
}

.card__description {
  height: 100px;
}

@keyframes shimmer {
  to {
    background-position: -100% 0;
  }
}
```

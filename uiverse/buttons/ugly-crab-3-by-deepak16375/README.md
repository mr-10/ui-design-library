# Ugly Crab 3

A button UI element from Uiverse.io by deepak16375.

Source: https://uiverse.io/deepak16375/ugly-crab-3

Author: deepak16375

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: gradient, button, animated, gradients, hover effect, hoverme, hover button

Colors: #1877f2, #acbcff, #aee2ff, #b799ff, #e6fffd

Fonts: See styles.css

Spacing and radius: 15px

## Source Code

### index.html

```html
<button class="button">
  Hover me!
</button>
```

### styles.css

```css
/* From Uiverse.io by deepak16375 - Tags: gradient, button, animated, gradients, hover effect, hoverme, hover button */
.button {
  font-size: 17px;
  font-weight: bold;
  border: 0px;
  color: white;
  background-color: #1877f2;
  padding: 1rem 2rem;
  border-radius: 15px;
  cursor: pointer;
}

.button:hover {
  background-image: linear-gradient(90deg,
		#B799FF 0%,
		#ACBCFF 50%,
		#AEE2FF 75%,
		#E6FFFD 100%);
  color: black;
  animation: slide 10s linear infinite;
}

@keyframes slide {
  100% {
    background-position: 50rem;
  }
}
```

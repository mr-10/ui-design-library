# Strange Fox 68

A checkbox UI element from Uiverse.io by ahmed150up.

Source: https://uiverse.io/ahmed150up/strange-fox-68

Author: ahmed150up

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: checkbox, star

Colors: #000, #ffc107

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<input type="checkbox" id="star">
<label for="star">
  <svg viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
  </svg>
</label>
```

### styles.css

```css
/* From Uiverse.io by ahmed150up - Tags: checkbox, star */
input[type="checkbox"] {
  display: none;
}

label svg {
  width: 44px;
  height: 44px;
  fill: none;
  stroke: #000;
  stroke-width: 2px;
}

input[type="checkbox"]:checked + label svg {
  fill: #FFC107;
  animation: pop_42 0.5s ease-out;
}

@keyframes pop_42 {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}
```

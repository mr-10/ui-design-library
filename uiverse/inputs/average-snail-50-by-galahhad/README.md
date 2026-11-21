# Average Snail 50

A input UI element from Uiverse.io by Galahhad.

Source: https://uiverse.io/Galahhad/average-snail-50

Author: Galahhad

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: input

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 4px

## Source Code

### index.html

```html
<input type="password" name="text" class="input" pattern="\d+" placeholder="Numbers only or shake">
```

### styles.css

```css
/* From Uiverse.io by Galahhad - Tags: input */
.input {
  max-width: 190px;
  padding: 12px;
  border: none;
  border-radius: 4px;
  box-shadow: 2px 2px 7px 0 rgb(0, 0, 0, 0.2);
  outline: none;
  color: dimgray;
}

.input:invalid {
  animation: justshake 0.3s forwards;
  color: red;
}

@keyframes justshake {
  25% {
    transform: translateX(5px);
  }

  50% {
    transform: translateX(-5px);
  }

  75% {
    transform: translateX(5px);
  }

  100% {
    transform: translateX-(5px);
  }
}
```

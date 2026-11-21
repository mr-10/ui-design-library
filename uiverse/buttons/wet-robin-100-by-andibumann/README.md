# Wet Robin 100

A button UI element from Uiverse.io by AndiBumann.

Source: https://uiverse.io/AndiBumann/wet-robin-100

Author: AndiBumann

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: animation, gradient, button

Colors: #f00, #ff69b4, #ffa500, #ffffff

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<div class="container">
  <button class="join-now-button">Join now</button>
</div>
```

### styles.css

```css
/* From Uiverse.io by AndiBumann  - Tags: animation, gradient, button */
.join-now-button {
  background-color: #ff69b4; /* Grundfarbe (Pink) */
  background-image: linear-gradient(
    to right,
    #ff69b4 0%,
    #ffffff 25%,
    #f00 50%,
    #ffa500 75%,
    #ff69b4 100%
  ); /* Farbverlauf */
  background-size: 200% 100%; /* Größe des Farbverlaufs */
  background-position: left; /* Position des Farbverlaufs */
  transition: background-position 0.3s; /* Animation des Farbverlaufs */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Schatteneffekt */
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.join-now-button:hover {
  background-position: right; /* Animation des Farbverlaufs */
}
```

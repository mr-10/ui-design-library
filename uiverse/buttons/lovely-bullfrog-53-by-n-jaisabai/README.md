# Lovely Bullfrog 53

A button UI element from Uiverse.io by n-jaisabai.

Source: https://uiverse.io/n-jaisabai/lovely-bullfrog-53

Author: n-jaisabai

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<div class="button">EXPLORE GALAXY</div>
```

### styles.css

```css
/* From Uiverse.io by n-jaisabai - Tags: button */
.button {
  background: radial-gradient(ellipse at top, white, blue, black, black);
  color: white;
  position: relative;
  background-size: 130% 130%;
  background-position: center center;
  padding: 15px 30px;
}

.button:hover {
  background: radial-gradient(ellipse at top, white, blue, black, black);
  animation: gradient 4s;
  animation-fill-mode: forwards;
  /* background-position: center center; */
}

.button:hover:after {
  content: "";
  position: absolute;
  inset: -.625em;
  background: radial-gradient(ellipse at top, white, blue, black, black);
  /* background-position: center center; */
  filter: blur(1.5em);
  z-index: -1;
  animation: gradient 4s;
  animation-fill-mode: forwards;
}

@keyframes gradient {
  0% {
    background-size: 130% 130%;
  }

  100% {
    background-size: 200% 200%;
  }
}
```

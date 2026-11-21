# Shaggy Octopus 89

A button UI element from Uiverse.io by r7chardgh.

Source: https://uiverse.io/r7chardgh/shaggy-octopus-89

Author: r7chardgh

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, hover, glitch

Colors: #333, #fff

Fonts: See styles.css

Spacing and radius: See styles.css

## Source Code

### index.html

```html
<button class="button">
  glitch
</button>
```

### styles.css

```css
/* From Uiverse.io by r7chardgh - Tags: button, hover, glitch */
.button {
  position: relative;
  border: 0;
  padding: 1em 2em;
  font-weight: 700;
  cursor: pointer;
  outline: .5em solid #fff;
  outline-offset: -.3em;
  color: #fff;
  background-color: #333;
  text-transform: uppercase;
}

.button:hover {
  animation: shake 500ms infinite,glitch 400ms infinite steps(4);
}

@keyframes shake {
  0% {
  }

  25% {
    transform: translate(-.1em,-.1em);
  }

  50% {
    transform: translate(.3em,0);
  }

  75% {
    transform: translate(0,.3em);
  }

  100% {
  }
}

@keyframes glitch {
  from {
    box-shadow: .8em .8em  rgba(240, 84, 219),
  -.8em -.8em rgba(84, 240, 232);
  }

  to {
    text-shadow: .3em .2em  rgba(240, 84, 219),
  -.3em -.2em rgba(84, 240, 232);
  }
}
```

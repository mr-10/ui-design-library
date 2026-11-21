# Hard Penguin 52

A button UI element from Uiverse.io by JhaveLang.

Source: https://uiverse.io/JhaveLang/hard-penguin-52

Author: JhaveLang

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, animation, simple button

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 4em

## Source Code

### index.html

```html
<button class="button">Enter</button>
```

### styles.css

```css
/* From Uiverse.io by JhaveLang  - Tags: simple, animation, simple button */
.button {
  font-weight: 600;
  padding: 1em 4em 1em 4em;
  border-radius: 4em;
  border: 0;
  background: rgb(251, 213, 213);
  background: linear-gradient(
    115deg,
    rgba(251, 213, 213, 1) 20%,
    rgba(248, 180, 180, 1) 41%,
    rgba(252, 233, 106, 1) 100%
  );
  cursor: pointer;
  box-shadow: 0em 0em 0em 0.3em rgb(251, 213, 213);
  transition: background 0.3s ease;
}
.button:hover {
  background: rgb(252, 233, 106);
  background: linear-gradient(
    115deg,
    rgba(252, 233, 106, 1) 0%,
    rgba(251, 213, 213, 1) 37%,
    rgba(248, 180, 180, 1) 100%
  );
}
.button:hover {
  background: rgb(252, 233, 106);
  background: linear-gradient(
    115deg,
    rgba(252, 233, 106, 1) 0%,
    rgba(251, 213, 213, 1) 37%,
    rgba(248, 180, 180, 1) 100%
  );
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
```

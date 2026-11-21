# Short Wasp 25

A button UI element from Uiverse.io by Rodrypaladin.

Source: https://uiverse.io/Rodrypaladin/short-wasp-25

Author: Rodrypaladin

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, animation, purple, pink, button, click, css, click animation

Colors: #dd04d9, #df34db, #ff00c8

Fonts: See styles.css

Spacing and radius: 22px

## Source Code

### index.html

```html
<button class="button">
  Button
</button>
```

### styles.css

```css
/* From Uiverse.io by Rodrypaladin - Tags: simple, animation, purple, pink, button, click, css, click animation */
.button {
  margin: 0 10px;
  padding: 10px 30px;
  border: 5px solid #DF34DB;
  border-radius: 22px;
  font-size: 20px;
  color: #DF34DB;
  transition: transform 0.1s ease-in, all 0.08s ease-in;
  box-shadow: 0 5px 0 #dd04d9;
}

.button:hover {
  border-color: #ff00c8;
  box-shadow: 0 5px 0 #ff00c8;
}

.button:active {
  transform: translateY(5px);
  box-shadow: 0 0 0 #DF34DB;
}
```

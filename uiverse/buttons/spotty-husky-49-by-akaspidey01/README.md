# Spotty Husky 49

A button UI element from Uiverse.io by AKAspidey01.

Source: https://uiverse.io/AKAspidey01/spotty-husky-49

Author: AKAspidey01

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: simple, flashy, animation, button, hover, smooth, hover effect, button hover effect

Colors: #fff

Fonts: See styles.css

Spacing and radius: 1em

## Source Code

### index.html

```html
<button class="button">
  <div class="similar-line line-1"></div>
  <div class="similar-line line-2"></div>
  <div class="similar-line line-3"></div>
</button>
```

### styles.css

```css
/* From Uiverse.io by AKAspidey01  - Tags: simple, flashy, animation, button, hover, smooth, hover effect, button hover effect  */
.button {
  cursor: pointer;
  position: relative;
  width: 5em;
  height: 4em;
  border: none;
  background: rgb(248, 66, 42);
  padding: 0.5em;
  display: flex;
  justify-content: center;
  gap: 0.7em;
  flex-direction: column;
  transition-duration: 0.5s;
}
.button:hover {
  background: rgb(7, 142, 253);
}
.similar-line {
  height: 0.2em;
  background: #fff;
  border-radius: 1em;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
.line-1 {
  width: 40%;
}
.line-2 {
  width: 70%;
}
.line-3 {
  width: 90%;
}
.button:hover .line-1 {
  width: 90%;
}
.button:hover .line-2 {
  width: 70%;
}
.button:hover .line-3 {
  width: 40%;
}
```

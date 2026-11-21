# Great Eel 58

A button UI element from Uiverse.io by r7chardgh.

Source: https://uiverse.io/r7chardgh/great-eel-58

Author: r7chardgh

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button, reload, f5

Colors: #3f3f3f

Fonts: See styles.css

Spacing and radius: .2em

## Source Code

### index.html

```html
<button class="button">
</button>
```

### styles.css

```css
/* From Uiverse.io by r7chardgh - Tags: button, reload, f5 */
.button {
  position: relative;
  width: 3em;
  height: 3em;
  transform: rotateX(30deg);
  border-radius: .2em;
  border: 1px solid #3f3f3f;
  box-shadow: 0 .3em 0 .1em #3f3f3f;
  ;
  transition: all 150ms;
}

.button::after {
  position: absolute;
  content: "f5";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: .2em;
  text-align: end;
  color: #3f3f3f;
}

.button:active {
  transform: rotateX(30deg) translateY(.3em);
  box-shadow: 0 0 0 0 #3f3f3f;
}
```

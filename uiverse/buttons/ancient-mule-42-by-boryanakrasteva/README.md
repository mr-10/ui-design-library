# Ancient Mule 42

A button UI element from Uiverse.io by boryanakrasteva.

Source: https://uiverse.io/boryanakrasteva/ancient-mule-42

Author: boryanakrasteva

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: See styles.css

Fonts: See styles.css

Spacing and radius: 13px, 2px

## Source Code

### index.html

```html
<button class="mouse">
  <div class="scroll"></div>

</button>
```

### styles.css

```css
/* From Uiverse.io by boryanakrasteva - Tags: button */
.mouse {
  width: 25px;
  height: 40px;
  border: 1px solid rgb(196, 196, 196);
  background-color: transparent;
  border-radius: 13px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.scroll {
  width: 3px;
  height: 10px;
  background-color: rgb(196, 196, 196);
  border-radius: 2px;
  position: absolute;
  bottom: 9px;
  animation: move_918 1.5s linear infinite;
}

@keyframes move_918 {
  0% {
    bottom: 9px;
  }

  50% {
    bottom: 5px;
  }

  100% {
    bottom: 9px;
  }
}
```

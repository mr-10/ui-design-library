# Splendid Snail 23

A button UI element from Uiverse.io by garerim.

Source: https://uiverse.io/garerim/splendid-snail-23

Author: garerim

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: button

Colors: #006b92, #f1f1f1

Fonts: See styles.css

Spacing and radius: 5px

## Source Code

### index.html

```html
<button class="btn">Hover me !
    <div class="background"></div>
</button>
```

### styles.css

```css
/* From Uiverse.io by garerim - Tags: button */
.btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  background-color: inherit;
  border: none;
  outline: none;
  color: #f1f1f1;
}

.btn:hover .background {
  height: inherit;
  width: 120%;
  top: 50%;
}

.btn .background {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 3px;
  width: 100%;
  background-color: #006b92;
  z-index: -1;
  border-radius: 5px;
  transition: all 0.3s;
}
```
